import Main from "./Main";
import Nav from "./Nav"
import SignUp from "./SignUp";
import Login from "./Login"
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function changeZIndex(boxNumber) {
  var box1 = document.getElementById("signContainer");
  var box2 = document.getElementById("loginContainer");

  if (boxNumber === 1) {
    box1.style.zIndex = 2; 
    box1.style.opacity = 1;
  } else if (boxNumber === 2) {
    box2.style.zIndex = 2; 
    box2.style.opacity = 1;
  } else if (boxNumber === 3) {
    box1.style.zIndex = -1;
    box1.style.opacity = 0;
  } else if (boxNumber === 4) {
    box2.style.zIndex = -1;
    box2.style.opacity = 0;
  } else if (boxNumber === 5) {
    box1.style.zIndex = -1;
    box2.style.zIndex = 2;
    box2.style.opacity = 1;
    box1.style.opacity = 0;
  } else if (boxNumber === 6) {
    box2.style.zIndex = -1;
    box1.style.zIndex = 2;
    box1.style.opacity = 1;
    box2.style.opacity = 0;
  }
}
function Homepage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  // Login 
  // Login 
  // Login 
  const [loginusername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // FETCH
  // FETCH
  // FETCH
  useEffect(() => {
    if (formSubmitted) {
      const submitData = async () => {
        try {
          const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password,
            }),
          });

          const data = await response.json();
          console.log('Response from server:', data);
          if (response.ok) {
            // If login is successful, navigate to the dashboard
            navigate('/Forms');
          } else {
            // If the server returns an error, refresh the page
            console.error('Login failed:', data.message || response.statusText);
            alert(data.error);

          }
          // navigate('/Forms');
          // Handle response data or errors here
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
          setFormSubmitted(false); // Reset form submission state
        }
      };

      submitData();
    }
  }, [formSubmitted, username, email, password]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true); // Trigger useEffect to send POST request
  };
  // LOGIN
  // LOGIN
  // LOGIN
  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginusername,
          password: loginPassword,
        }),
      });
      const data = await response.json();
      console.log('Response from server:', data);
      if (response.ok) {
        // If login is successful, navigate to the dashboard or home page
        navigate('/2'); // or navigate('/home') as per your routing
      } else {
        // If the server returns an error, display the specific error message
        alert(data.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };
  return (
    <div className='homepage'>
        <div className='App'>
            <SignUp pare={changeZIndex} username={setUsername} email={setEmailAddress} password={setPassword} submit={handleSubmit}/>
            <Login pare={changeZIndex} email={setLoginUsername} password={setLoginPassword} submit={handleLoginSubmit}/>
            <Nav pare={changeZIndex}/>
            <Main />
        </div>
    </div>
  )
}

export default Homepage