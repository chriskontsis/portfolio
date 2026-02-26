// src/data/portfolio.js
export const portfolioData = {
  ascii_art: `
          _____                    _____          
         /\\    \\                  /\\    \\         
        /::\\    \\                /::\\____\\        
       /::::\\    \\              /:::/    /        
      /::::::\\    \\            /:::/    /         
     /:::/\\:::\\    \\          /:::/    /          
    /:::/  \\:::\\    \\        /:::/____/           
   /:::/    \\:::\\    \\      /::::\\    \\           
  /:::/    / \\:::\\    \\    /::::::\\____\\________  
 /:::/    /   \\:::\\    \\  /:::/\\:::::::::::\\    \\ 
/:::/____/     \\:::\\____\\/:::/  |:::::::::::\\____\\
\\:::\\    \\      \\::/    /\\::/   |::|~~~|~~~~~     
 \\:::\\    \\      \\/____/  \\/____|::|   |          
  \\:::\\    \\                    |::|   |          
   \\:::\\    \\                   |::|   |          
    \\:::\\    \\                  |::|   |          
     \\:::\\    \\                 |::|   |          
      \\:::\\    \\                |::|   |          
       \\:::\\____\\               \\::|   |          
        \\::/    /                \\:|   |          
         \\/____/                  \\|___|   
`,
  name: "Chris Kontsis",
  title: "Software Engineer",
  bio: "Lives for hard problems and engineering the systems that solve them.",
  linkedin: "https://linkedin.com/in/ckontsis/",
  github: "https://github.com/chriskontsis/",
  work: [
    {
      company: "Amazon",
      role: "Software Development Engineer I",
      period: "June 2025 -- October 2025",
      highlights: [
        `Built and maintained a catalog-as-a-service platform that other Amazon teams relied on to store, manage, and discover items at scale.`,
      ],
    },
    {
      company: "Capital One",
      role: "Software Engineer Intern",
      period: "June 2024 -- August 2024",
      highlights: [
        `Enhanced the Test Data Management CLI, a command-line tool that automates testing workflows for over 
        40 teams, enabling live dependency testing with 0 human intervention.`,
      ],
    },
    {
      company: "Lumen Technologies",
      role: "Software Engineer Intern",
      period: "June 2023 -- August 2023",
      highlights: [
        `Improved Lumen's email intent AI model, which predicts over 20 customer 
        intents to automate responses to common inquiries across the organization.`
      ],
    },
    {
      company: "Meteor Studio at ASU",
      role: "Software Developer",
      period: "January 2023 -- May 2023",
      highlights: [
        `Developed “Career XRcade”, a VR app with more than 40 mini-games and interactive 
        experiences aimed at empowering students in envisioning their future careers.`
      ],
    },
  ],
  projects: [
    {
      name: "Lite-Exchange",
      github: "https://github.com/chriskontsis/Lite-Exchange",
      tech: ["C++", "Boost", "CMake", "FIX", "GTest"],
      description: ` Building a multithreaded client-server order matching engine in C++ that matches limit and cancel orders
                    using a price-time priority book`,
    },
    {
      name: "AI Tunes",
      github: "https://github.com/chriskontsis/AiTunes",
      tech: [
        "Python",
        "Pandas",
        "Numpy",
        "Scikit-learn",
        "Matplotlib",
        "React",
        "Flask",
      ],
      description:
        "Engineered a content-based music recommendation system delivering personalized song suggestions with Spotify links",
    },
  ],
  blog: [
    {
      title: "Coming Soon",
      date: "",
      tags: [],
    },
  ],
};
