import Nav from "./Nav";
import Main from "./Main";
import Chatbot from "./Chatbot";
import MainCont from "./MainCont";
import { useState, useEffect } from "react";
import Portfolio from "./Portfolio";
function Dashboard() {
    const [showComponent, setShowComponent] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    // const [blogSchema, setFreelancers] = useState([])
    const toggleComponent = () => { 
    setShowComponent(prevState => !prevState);
    };
    const blogSchema = [
      {
        index: 1,
        title: "WordPress Blog Designer Needed",
        experience: "Intermediate",
        price: "150.00",
        description: `I am creating a blog about online shopping or deals that helps compare products and offers so consumers can make the buying decision that works best for them. I need a WordPress website that visually looks amazing and works extremely well on mobile devices. I also need a premium theme that allows me to easily create additional pages as needed. Every blog I write in the coming weeks and months needs to be on its own page. I have no idea about the budget for this project. I just put a number down as a guess. Yes, I want a great deal, but more importantly, I want something that looks amazing and can be done in a few days (at most), not weeks. I want to hire very soon so I look forward to reading the proposals as they come in. When applying, please provide examples of previous WordPress websites you have created. Thank you for your interest.`,
        tags: ["Web Development", "REACT"],
        username: "Sherzybath"
      },
      {
        index: 2,
        title: "Shopify Store Setup Specialist Needed",
        experience: "Advanced",
        price: "200.00",
        description: `I am looking to launch an e-commerce store using Shopify and need a specialist to help with the setup. The store will sell various fashion products, and I need someone who can create a visually appealing and user-friendly design. The store should include all necessary features like payment gateways, product categories, and a responsive design that works on all devices. Please share your previous Shopify work and any themes you recommend. Looking for a quick turnaround.`,
        tags: ["Mobile Development", "Shopify"],
        username: "user2"
      },
      {
        index: 3,
        title: "Custom WordPress Plugin Developer",
        experience: "Expert",
        price: "500.00",
        description: `I need a custom WordPress plugin developed for a real estate website. The plugin should allow users to search properties based on various filters such as location, price range, and property type. Additionally, the plugin should integrate with Google Maps to display the location of each property. The site must be fast, and the plugin should not slow down performance. I’m looking for someone with extensive experience in WordPress plugin development.`,
        tags: ["WordPress", "Graphic Designing"],
        username: "user3"
      },
      {
        index: 4,
        title: "Landing Page Designer for Online Course",
        experience: "Intermediate",
        price: "100.00",
        description: `I need a landing page designed to promote my new online course. The landing page should be optimized for conversions, with a strong call to action, testimonials, and an attractive design. The goal is to attract as many sign-ups as possible before the course launch. I am open to suggestions on the best tools to use, but it should be easy to update and integrate with email marketing platforms.`,
        tags: ["Web Design", "Landing Page"],
        username: "user4"
      },
      {
        index: 5,
        title: "SEO Specialist for Local Business Website",
        experience: "Intermediate",
        price: "250.00",
        description: `I am looking for an SEO specialist who can help improve the online presence of my local business. The website is built on WordPress, and I need someone to optimize on-page SEO, build backlinks, and improve local SEO rankings. I want to see measurable results within a few weeks, including increased traffic and higher rankings for relevant keywords. Experience with Google My Business is a plus.`,
        tags: ["SEO", "Local SEO"],
        username: "user5"
      },
      {
        index: 6,
        title: "React Developer for Single Page Application",
        experience: "Advanced",
        price: "300.00",
        description: `I need an experienced React developer to build a single-page application (SPA) for a startup project. The application should be highly responsive and include dynamic features like real-time data updates and user authentication. The UI/UX design has already been completed, so I need someone who can take the design files and bring them to life with clean, efficient code. Experience with Redux or Context API is preferred.`,
        tags: ["React", "SPA Development"],
        username: "user6"
      },
      {
        index: 7,
        title: "Content Writer for Technology Blog",
        experience: "Beginner",
        price: "50.00",
        description: `I am looking for a content writer who can contribute to a technology blog. The ideal candidate should have a passion for technology and the ability to explain complex topics in a simple, engaging way. Articles will cover a range of topics, including software development, gadgets, and tech news. Each article should be at least 1,000 words long, well-researched, and include relevant images. Please provide writing samples with your application.`,
        tags: ["Content Writing", "Technology"],
        username: "user7"
      },
      {
        index: 8,
        title: "UX/UI Designer for Mobile App Redesign",
        experience: "Expert",
        price: "400.00",
        description: `I need a talented UX/UI designer to redesign the interface of an existing mobile app. The app is currently functional, but the design is outdated, and I want to improve the overall user experience. The redesign should focus on making the app more intuitive, visually appealing, and in line with modern design trends. The app is available on both iOS and Android, so the design should be compatible with both platforms.`,
        tags: ["UI/UX Developer", "Mobile App"],
        username: "user8"
      },
      {
        index: 9,
        title: "Digital Marketing Specialist for Product Launch",
        experience: "Intermediate",
        price: "350.00",
        description: `I am launching a new product and need a digital marketing specialist to create and execute a marketing strategy. The strategy should include social media marketing, email campaigns, and content marketing to generate buzz and drive sales. I am looking for someone with experience in launching products online and can provide measurable results. Knowledge of SEO and PPC campaigns is a plus.`,
        tags: ["Digital Marketing", "Product Launch"],
        username: "user9"
      },
      {
        index: 10,
        title: "Full-Stack Developer for E-commerce Website",
        experience: "Advanced",
        price: "1200.00",
        description: `I need a full-stack developer to build an e-commerce website with a user-friendly interface, payment gateway integration, and inventory management. The website should be scalable and optimized for speed and security. Experience with React, Node.js, and MongoDB is required.`,
        tags: ["Full-Stack Development", "E-commerce"],
        username: "user10"
    },
    {
        index: 11,
        title: "UI/UX Designer for Mobile App Redesign",
        experience: "Intermediate",
        price: "800.00",
        description: `Looking for a UI/UX designer to revamp the design of our existing mobile app. The redesign should enhance user experience and improve navigation. The ideal candidate will have experience with Figma and Sketch, and a strong portfolio of mobile app designs.`,
        tags: ["UI/UX Design", "Mobile App"],
        username: "user11"
    },
    {
        index: 12,
        title: "Graphic Designer for Brand Identity",
        experience: "Entry",
        price: "400.00",
        description: `Seeking a graphic designer to create a brand identity for our startup. This includes designing a logo, business cards, letterhead, and social media templates. Creativity and an understanding of modern design trends are essential.`,
        tags: ["Graphic Design", "Brand Identity"],
        username: "user12"
    },
    {
        index: 13,
        title: "Video Editor for YouTube Channel",
        experience: "Intermediate",
        price: "300.00",
        description: `Need a video editor to help create engaging content for a YouTube channel. The editor should be skilled in Adobe Premiere Pro and After Effects, with experience in creating intros, outros, and motion graphics. Understanding of YouTube SEO and trends is a plus.`,
        tags: ["Video Editing", "YouTube"],
        username: "user13"
    },
    {
        index: 14,
        title: "SEO Specialist for Website Optimization",
        experience: "Advanced",
        price: "500.00",
        description: `Looking for an SEO specialist to optimize our website for search engines. The goal is to improve our organic search ranking and increase traffic. Experience with keyword research, on-page and off-page SEO, and Google Analytics is required.`,
        tags: ["SEO", "Website Optimization"],
        username: "user14"
    },
    {
        index: 15,
        title: "Data Scientist for Predictive Analytics",
        experience: "Advanced",
        price: "1500.00",
        description: `We need a data scientist to develop predictive analytics models for our business. The models should help us forecast sales, identify trends, and optimize inventory. Proficiency in Python, R, and machine learning algorithms is necessary.`,
        tags: ["Data Science", "Predictive Analytics"],
        username: "user15"
    },
    {
        index: 16,
        title: "Content Writer for Tech Blog",
        experience: "Entry",
        price: "150.00",
        description: `Seeking a content writer to produce articles for a tech blog. The topics will cover the latest trends in technology, software development, and product reviews. The writer should have excellent research skills and a passion for technology.`,
        tags: ["Content Writing", "Tech Blog"],
        username: "user16"
    },
    {
        index: 17,
        title: "Cloud Engineer for AWS Infrastructure Setup",
        experience: "Advanced",
        price: "2000.00",
        description: `Looking for a cloud engineer to set up AWS infrastructure for our application. The setup should include EC2 instances, S3 storage, and RDS databases. Experience with infrastructure as code (IaC) using Terraform or CloudFormation is required.`,
        tags: ["Cloud Computing", "AWS"],
        username: "user17"
    },
    {
        index: 18,
        title: "Game Developer for Mobile Game",
        experience: "Intermediate",
        price: "1000.00",
        description: `We are developing a mobile game and need a game developer with experience in Unity or Unreal Engine. The game should be optimized for performance and include in-app purchases. Creativity in game design and knowledge of mobile gaming trends is a plus.`,
        tags: ["Game Development", "Mobile Game"],
        username: "user18"
    },
    {
        index: 19,
        title: "DevOps Engineer for CI/CD Pipeline Setup",
        experience: "Advanced",
        price: "1800.00",
        description: `Seeking a DevOps engineer to set up a CI/CD pipeline for our software development team. The pipeline should automate testing, building, and deployment processes. Experience with Jenkins, Docker, and Kubernetes is essential.`,
        tags: ["DevOps", "CI/CD"],
        username: "user19"
    },
    {
        index: 20,
        title: "3D Animator for Product Visualization",
        experience: "Intermediate",
        price: "1200.00",
        description: `We need a 3D animator to create product visualizations for our marketing campaigns. The animations should be realistic and highlight the features of our products. Experience with Blender or Maya is required.`,
        tags: ["3D Animation", "Product Visualization"],
        username: "user20"
    },
    {
        index: 21,
        title: "Network Engineer for VPN Setup",
        experience: "Intermediate",
        price: "700.00",
        description: `Looking for a network engineer to set up a secure VPN for our remote employees. The VPN should be scalable and compatible with various devices. Experience with OpenVPN or similar technologies is necessary.`,
        tags: ["Network Engineering", "VPN"],
        username: "user21"
    },
    {
        index: 22,
        title: "Technical Writer for API Documentation",
        experience: "Advanced",
        price: "600.00",
        description: `Seeking a technical writer to create comprehensive API documentation for our developers. The documentation should be clear, concise, and include examples. Experience with RESTful APIs and Swagger is required.`,
        tags: ["Technical Writing", "API Documentation"],
        username: "user22"
    }
    
    ];
    // useEffect(() => {
    //   const fetchFreelancers = async () => {
    //     try {
    //       const response = await fetch('http://localhost:8080/jobs');
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const data = await response.json();
    //       setFreelancers(data);
    //       console.log(data)
    //     } catch (error) {
    //       alert(error.message);
    //     }
    //   };
  
    //   fetchFreelancers();
    // }, []);
  return (
    <div className='Dashboard'>
        <MainCont toggle2={toggleComponent} LIST={blogSchema} select={setSelectedPost}/>
        {/* <div className="liner">
        <Nav toggle={toggleComponent}/>
        <Main/>
        </div> */}
        {showComponent && <Chatbot toggle={toggleComponent} />}
        {selectedPost && <Portfolio list={selectedPost} toggle={() =>setSelectedPost(null)}/> }
    </div>
  )
}

export default Dashboard