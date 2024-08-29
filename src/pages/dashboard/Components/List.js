import React from 'react'
import Filter from './Filter'
import Notice from './Notice'
const List = () => {
  const blogSchema = [
    {
      title: "WordPress Blog Designer Needed",
      experience: "Intermediate",
      price: "$150.00",
      description: `I am creating a blog about online shopping or deals that helps compare products and offers so consumers can make the buying decision that works best for them. I need a WordPress website that visually looks amazing and works extremely well on mobile devices. I also need a premium theme that allows me to easily create additional pages as needed. Every blog I write in the coming weeks and months needs to be on its own page. I have no idea about the budget for this project. I just put a number down as a guess. Yes, I want a great deal, but more importantly, I want something that looks amazing and can be done in a few days (at most), not weeks. I want to hire very soon so I look forward to reading the proposals as they come in. When applying, please provide examples of previous WordPress websites you have created. Thank you for your interest.`,
      tags: ["Web design", "REACT"],
    },
    {
      title: "Shopify Store Setup Specialist Needed",
      experience: "Advanced",
      price: "$200.00",
      description: `I am looking to launch an e-commerce store using Shopify and need a specialist to help with the setup. The store will sell various fashion products, and I need someone who can create a visually appealing and user-friendly design. The store should include all necessary features like payment gateways, product categories, and a responsive design that works on all devices. Please share your previous Shopify work and any themes you recommend. Looking for a quick turnaround.`,
      tags: ["eCommerce", "Shopify"],
    },
    {
      title: "Custom WordPress Plugin Developer",
      experience: "Expert",
      price: "$500.00",
      description: `I need a custom WordPress plugin developed for a real estate website. The plugin should allow users to search properties based on various filters such as location, price range, and property type. Additionally, the plugin should integrate with Google Maps to display the location of each property. The site must be fast, and the plugin should not slow down performance. I’m looking for someone with extensive experience in WordPress plugin development.`,
      tags: ["WordPress", "Plugin Development"],
    },
    {
      title: "Landing Page Designer for Online Course",
      experience: "Intermediate",
      price: "$100.00",
      description: `I need a landing page designed to promote my new online course. The landing page should be optimized for conversions, with a strong call to action, testimonials, and an attractive design. The goal is to attract as many sign-ups as possible before the course launch. I am open to suggestions on the best tools to use, but it should be easy to update and integrate with email marketing platforms.`,
      tags: ["Web Design", "Landing Page"],
    },
    {
      title: "SEO Specialist for Local Business Website",
      experience: "Intermediate",
      price: "$250.00",
      description: `I am looking for an SEO specialist who can help improve the online presence of my local business. The website is built on WordPress, and I need someone to optimize on-page SEO, build backlinks, and improve local SEO rankings. I want to see measurable results within a few weeks, including increased traffic and higher rankings for relevant keywords. Experience with Google My Business is a plus.`,
      tags: ["SEO", "Local SEO"],
    },
    {
      title: "React Developer for Single Page Application",
      experience: "Advanced",
      price: "$300.00",
      description: `I need an experienced React developer to build a single-page application (SPA) for a startup project. The application should be highly responsive and include dynamic features like real-time data updates and user authentication. The UI/UX design has already been completed, so I need someone who can take the design files and bring them to life with clean, efficient code. Experience with Redux or Context API is preferred.`,
      tags: ["React", "SPA Development"],
    },
    {
      title: "Content Writer for Technology Blog",
      experience: "Beginner",
      price: "$50.00",
      description: `I am looking for a content writer who can contribute to a technology blog. The ideal candidate should have a passion for technology and the ability to explain complex topics in a simple, engaging way. Articles will cover a range of topics, including software development, gadgets, and tech news. Each article should be at least 1,000 words long, well-researched, and include relevant images. Please provide writing samples with your application.`,
      tags: ["Content Writing", "Technology"],
    },
    {
      title: "UX/UI Designer for Mobile App Redesign",
      experience: "Expert",
      price: "$400.00",
      description: `I need a talented UX/UI designer to redesign the interface of an existing mobile app. The app is currently functional, but the design is outdated, and I want to improve the overall user experience. The redesign should focus on making the app more intuitive, visually appealing, and in line with modern design trends. The app is available on both iOS and Android, so the design should be compatible with both platforms.`,
      tags: ["UX/UI Design", "Mobile App"],
    },
    {
      title: "Digital Marketing Specialist for Product Launch",
      experience: "Intermediate",
      price: "$350.00",
      description: `I am launching a new product and need a digital marketing specialist to create and execute a marketing strategy. The strategy should include social media marketing, email campaigns, and content marketing to generate buzz and drive sales. I am looking for someone with experience in launching products online and can provide measurable results. Knowledge of SEO and PPC campaigns is a plus.`,
      tags: ["Digital Marketing", "Product Launch"],
    },
  ];
  return (
    <div className='NoticeBoard'>
        <Notice list={blogSchema}/>
        <Filter />
    </div>
  )
}

export default List