const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer for file upload handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${req.session.user.username}-${file.fieldname}${ext}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10 MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = {
      image: /jpeg|jpg|png|gif/,
      pdf: /pdf/
    };
    const extname = allowedTypes[file.fieldname].test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes[file.fieldname].test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error(`Invalid file type for ${file.fieldname}.`));
    }
  }
});

const app = express();
const port = 3000;
const saltRounds = 10;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Initialize session middleware
app.use(session({
  secret: '9sGgHMepaTMd0MVP', // Replace with a strong secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Connect to SQLite3 database
const db = new sqlite3.Database('./info.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite3 database.');
  }
});

// Helper function to validate email format
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}



// POST request handler for /signup
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Please provide username, email, and password.' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  db.get(`SELECT * FROM users WHERE username = ? OR email = ?`, [username, email], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }

    if (row) {
      if (row.username === username) {
        return res.status(400).json({ error: 'Username already taken.' });
      } else if (row.email === email) {
        return res.status(400).json({ error: 'Email already in use.' });
      }
    }

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Error hashing password.' });
      }

      const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      db.run(query, [username, email, hashedPassword], (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to register user.' });
        }
        res.status(201).json({ message: 'User registered successfully!' });
      });
    });
  });
});



// POST request handler for /login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Please provide username and password.' });
  }

  const query = `SELECT * FROM users WHERE username = ?`;
  db.get(query, [username], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }

    if (!row) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }

    bcrypt.compare(password, row.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ error: 'Invalid username or password.' });
      }

      // User authenticated successfully, start a session
      req.session.user = { id: row.id, username: row.username };
      res.status(200).json({ message: 'Login successful!', user: { id: row.id, username: row.username } });
    });
  });
});

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    res.status(401).json({ error: 'Unauthorized: Please log in.' });
  }
}

// Example of a protected route
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.status(200).json({ message: `Welcome to your dashboard, ${req.session.user.username}!` });
});



// POST request to /jobs
app.post('/jobs', isAuthenticated, (req, res) => {
  const { title, experience, price, description, tags } = req.body;
  const userId = req.session.user.id;
  if (!title || !experience || !price) {
      return res.status(400).json({ error: 'Title, experience, and price are required.' });
  }

  const sql = `INSERT INTO jobs (title, experience, price, description, tags, user_id) VALUES (?, ?, ?, ?, ?, ?)`;
  const tagsString = tags.join(','); // Convert tags array to comma-separated string

  db.run(sql, [title, experience, price, description, tagsString, userId], function(err) {
      if (err) {
          return res.status(500).json({ error: err.message });
      }

      res.status(201).json({ id: this.lastID });
  });
});



// GET endpoint to retrieve all jobs
app.get('/jobs', isAuthenticated, (req, res) => {
  const sql = `SELECT * FROM jobs`;
  
  db.all(sql, [], (err, rows) => {
      if (err) {
          return res.status(500).json({ error: 'Failed to retrieve jobs from the database.' });
      }
      
      // Convert tags from comma-separated string back to an array for each job
      const jobs = rows.map(row => ({
          id: row.id,
          title: row.title,
          experience: row.experience,
          price: row.price,
          description: row.description,
          tags: row.tags ? row.tags.split(',') : []  // Convert tags string back to an array
      }));
      
      res.status(200).json(jobs);
  });
});


app.post('/upload', isAuthenticated, upload.fields([{ name: 'image', maxCount: 1 }, { name: 'pdf', maxCount: 1 }]), (req, res) => {
  if (!req.files || !req.files.image || !req.files.pdf) {
    return res.status(400).json({ error: 'Both image and PDF files are required.' });
  }

  const imageFile = req.files.image[0];
  const pdfFile = req.files.pdf[0];

  res.status(200).json({
    message: 'Files uploaded successfully!',
    image: {
      filename: imageFile.filename,
      path: imageFile.path,
    },
    pdf: {
      filename: pdfFile.filename,
      path: pdfFile.path,
    }
  });
});

// POST request handler for /logout
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to log out.' });
    }
    res.status(200).json({ message: 'Logged out successfully.' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
