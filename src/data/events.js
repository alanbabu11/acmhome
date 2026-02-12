/**
 * Event Schema Definition:
 * @typedef {Object} Event
 * @property {string} id - Unique identifier
 * @property {string} title - Event title
 * @property {string} description - Short summary for cards
 * @property {string} details - Rich description for the modal
 * @property {string} date - Date string (e.g., "14th September 2025")
 * @property {string} time - Time string (e.g., "10:30 AM")
 * @property {string} location - Event location
 * @property {string} category - Category tag (e.g., "ACM", "Workshop", "Contest", "Tech Talk")
 * @property {boolean} isLive - Boolean indicating if the event is currently live
 * @property {string} image - Main event image URL
 * @property {string[]} images - Array of image URLs for the modal carousel
 */

export const events = [
    {
        id: "event-today",
        title: "ACM Live: Today's Tech Jam",
        description: "Join us for a spontaneous jam session on the latest tech trends.",
        details: "This is a special live event happening today! We'll be discussing the hottest topics in the developer community and having some hands-on fun.",
        date: "February 12, 2026",
        time: "1:00 PM",
        location: "ACM Lounge",
        category: "Workshop",
        isLive: true,
        image: "",
        images: ["", "", ""]
    },
    {
        id: "event-1",
        title: "ACM Workshop: AI Basics",
        description: "Join us for an introductory workshop on Artificial Intelligence. Learn the fundamentals of machine learning.",
        details: "This comprehensive workshop covers the core concepts of AI and Machine Learning. We will dive into supervised learning, neural networks, and provide hands-on experience building your first model using popular libraries. Perfect for beginners looking to start their AI journey.",
        date: "March 14, 2026",
        time: "10:30 AM",
        location: "Main Auditorium",
        category: "Workshop",
        isLive: true,
        image: "",
        images: ["", "", ""]
    },
    {
        id: "event-2",
        title: "Coding Contest: Hack the Night",
        description: "A 12-hour coding marathon where developers compete to solve challenging algorithms.",
        details: "Put your coding skills to the test in this high-intensity 12-hour hackathon. Teams will be presented with complex algorithmic problems and real-world challenges. Great prizes, free food, and a chance to network with top developers in the community.",
        date: "April 20, 2026",
        time: "09:00 PM",
        location: "Innovation Lab",
        category: "Contest",
        isLive: true,
        image: "",
        images: ["", "", ""]
    },
    {
        id: "event-3",
        title: "Tech Talk: Future of Web Dev",
        description: "Industry experts discuss the evolving landscape of web development.",
        details: "Join our panel of industry veterans as they discuss the upcoming trends in web technology. Topics include the adoption of React 19, the impact of AI on front-end development, and the future of serverless architectures. Q&A session follows the talk.",
        date: "May 25, 2026",
        time: "04:00 PM",
        location: "Virtual (Zoom)",
        category: "Tech Talk",
        isLive: true,
        image: "",
        images: ["", "", ""]
    },
    {
        id: "event-4",
        title: "Cloud Fundamentals",
        description: "An exploration of cloud computing services and architectures.",
        details: "This session provided an overview of cloud computing platforms like AWS, Azure, and Google Cloud. Participants learned about IaaS, PaaS, and SaaS models and how to deploy simple applications to the cloud.",
        date: "August 1, 2025",
        time: "11:00 AM",
        location: "Lab A",
        category: "ACM",
        isLive: false,
        image: "",
        images: ["", "", ""]
    },
    {
        id: "event-5",
        title: "Python for Beginners",
        description: "A hands-on introduction to the Python programming language.",
        details: "This workshop introduced the basics of Python, including syntax, data types, and control structures. Attendees worked through several exercises to solidify their understanding of core programming concepts.",
        date: "August 15, 2025",
        time: "02:00 PM",
        location: "Seminar Hall",
        category: "Workshop",
        isLive: false,
        image: "",
        images: ["", "", ""]
    },
    {
        id: "event-6",
        title: "Web Security 101",
        description: "Understanding common web vulnerabilities and how to prevent them.",
        details: "A deep dive into common web security threats like XSS, SQL injection, and CSRF. The talk focused on best practices for building secure web applications and protecting user data.",
        date: "September 5, 2025",
        time: "03:30 PM",
        location: "Main Auditorium",
        category: "ACM",
        isLive: false,
        image: "",
        images: ["", "", ""]
    }
];
