import missionImage from "../assets/missionImage.png"
import purposeImage from "../assets/purposeImage.png"
import storyImage from "../assets/storyImage.png"




// src/utils/constants.js
export const navLinks = [
    { id: 1, key: "about-us", ref: "/about-us", label: "about us" },
    { id: 2, key: "careers", ref: "/careers", label: "careers" },
    { id: 3, key: "faqs", ref: "/", label: "faqs", hash: "#faqs" }, // Added hash
    { id: 4, key: "contact-us", ref: "/about-us", label: "contact us", hash: "#contact-us" },
];

export const additionalNavLinks = [
    {
        id: 1,
        key: "support",
        label: "Customer Support",
        ref: "/customer-support",
    },
    {
        id: 2,
        key: "terms",
        label: "Terms & Conditions",
        ref: "/terms-conditions",
    },
    { id: 3, key: "privacy", label: "Privacy Policy", ref: "/privacy-policy" },
];


export const services = [
    {
        title: "Custom Software Solutions",
        description:
            "We specialize in building custom software, tailored specifically to your operations. From analysis to deployment, we craft solutions that align perfectly with your goals and integrate seamlessly with your existing systems.",

    },
    {
        title: "Engineering R&D Solutions",
        description:
            "We provide specialized engineering R&D services that focus on enhancing design, improving efficiency, and integrating advanced technologies into your systems.",
    },
    {
        title: "Hardware and Electronics R&D",
        description:
            "Our team designs and develops custom hardware and electronics, providing end-to-end solutions from prototyping to full-scale production.",
    },
    {
        title: "Industrial Internet of Things (IIoT)",
        description:
            "We offer IIoT solutions that integrate devices across your industrial processes, allowing you to monitor, control, and automate operations for greater efficiency.",
    },
    {
        title: "Robotics and Automation",
        description:
            "Our robotics and automation solutions increase productivity, reduce human error, and streamline your workflows.",
    },
    {
        title: "Cloud and DevOps Solutions",
        description:
            "We deliver scalable cloud solutions and DevOps practices to help you streamline development processes, optimize infrastructure, and ensure faster delivery cycles with continuous integration and deployment.",
    },
];


export const aboutUsDescription = [
    {
        title: "Our Mission",
        image: missionImage,
        description: [
            "We empower individuals and organizations by fostering clarity, enhancing efficiency, and driving success. Our structured workflows align tasks with a greater purpose.",
            "By emphasizing organization, we create strong foundations where goals are clear, processes are streamlined, and productivity is maximized.",
            "Through innovation, we enable seamless adaptation to evolving needs. Success is not just about milestones but about nurturing progress, fostering collaboration, and celebrating growth."
        ],
    },
    {
        title: "Our Purpose",
        image: purposeImage,
        description: [
            "We believe technology should be accessible to all and serve as a tool for positive impact. Our solutions bridge gaps, create opportunities, and improve lives through innovation.",
            "We design scalable, efficient, and user-friendly systems that empower individuals and organizations to reach their full potential.",
            "At the heart of our purpose is sustainability and social responsibility. We strive to create long-term value, support ethical practices, and inspire meaningful change."
        ],
    },
    {
        title: "Our Story",
        image: storyImage,
        description: [
            "Our journey began with a spark of curiosity and a dream to make a difference. In a small garage, a group of passionate innovators came together to build something impactful.",
            "Their first product, born from perseverance and teamwork, was met with overwhelming support, turning a simple idea into a thriving enterprise.",
            "Today, that spirit of innovation and resilience continues to drive us. Our story is a testament to the power of dreams, hard work, and the belief that together, we can achieve the extraordinary."
        ],
    }
];


export const jobListings = [
    { id: 1, title: "Frontend Intern", location: "Remote", type: "Intern" },
    { id: 2, title: "Backend Intern", location: "Remote", type: "Intern" },
    { id: 3, title: "SDE Intern", location: "Remote", type: "Intern" },
    { id: 4, title: "SDET Intern", location: "Remote", type: "Intern" },
    { id: 5, title: "Data Engineer Intern", location: "Remote", type: "Intern" }

];

export const jobDescriptionContent = {
    'Frontend Intern': {
        description: 'As a Frontend Intern, you will work on building interactive UI components using React.',
        tasks: [
            "Develop user interfaces for web applications.",
            "Work closely with designers to implement design mockups.",
            "Write clean, reusable, and maintainable code.",
            "Collaborate with backend developers for API integration.",
            "Test and debug code to ensure seamless user experience."
        ],
        requirements: [
            "Experience with HTML, CSS, JavaScript, and React.",
            "Familiarity with frontend tools like Webpack and Babel.",
            "Strong understanding of responsive web design.",
            "Good problem-solving and debugging skills.",
            "Ability to work in an Agile team environment."
        ]
    },
    'Backend Intern': {
        description: 'As a Backend Intern, you will work on building and maintaining the server-side logic of applications.',
        tasks: [
            "Develop and maintain APIs for various web services.",
            "Collaborate with frontend teams for seamless integration.",
            "Write and optimize SQL queries and manage databases.",
            "Work on application scalability and security enhancements.",
            "Participate in code reviews and knowledge-sharing sessions."
        ],
        requirements: [
            "Proficiency in Node.js or other backend technologies.",
            "Experience with RESTful APIs and database management.",
            "Understanding of server-side logic and database architecture.",
            "Familiarity with cloud platforms like AWS or Azure is a plus.",
            "Good communication and teamwork skills."
        ]
    },
    'SDE Intern': {
        description: 'As an SDE Intern, you will work on developing software applications and contribute to the overall software development lifecycle.',
        tasks: [
            "Design, develop, and maintain software applications.",
            "Write clean, maintainable, and efficient code.",
            "Collaborate with other teams to define software requirements.",
            "Participate in debugging and troubleshooting issues.",
            "Contribute to testing and continuous integration."
        ],
        requirements: [
            "Proficiency in programming languages like Java, Python, or C++.",
            "Experience with version control systems like Git.",
            "Familiarity with databases and data structures.",
            "Knowledge of software development methodologies like Agile.",
            "Strong analytical and problem-solving skills."
        ]
    },
    'SDET Intern': {
        description: 'As an SDET Intern, you will focus on testing software and ensuring high-quality standards through automated testing and manual testing practices.',
        tasks: [
            "Design and develop automated test scripts for applications.",
            "Perform manual testing to identify bugs and issues.",
            "Collaborate with developers to ensure code quality.",
            "Contribute to continuous integration and delivery pipelines.",
            "Document test results and communicate findings to the team."
        ],
        requirements: [
            "Familiarity with testing frameworks like Selenium or Jest.",
            "Experience with writing automated test scripts.",
            "Understanding of manual and automated testing techniques.",
            "Ability to write clear and concise documentation.",
            "Good communication skills and attention to detail."
        ]
    },
    'Data Engineer Intern': {
        description: 'As a Data Engineer Intern, you will work on building and managing data pipelines to support data-driven decision-making processes.',
        tasks: [
            "Build and maintain scalable data pipelines.",
            "Work with large datasets and optimize performance.",
            "Collaborate with data scientists and analysts to understand data needs.",
            "Ensure data quality and accuracy.",
            "Contribute to the implementation of ETL processes."
        ],
        requirements: [
            "Experience with data processing tools and technologies like Hadoop, Spark, or Kafka.",
            "Familiarity with SQL and NoSQL databases.",
            "Knowledge of Python or Java for data processing.",
            "Understanding of data warehousing and data modeling concepts.",
            "Strong problem-solving and analytical skills."
        ]
    }
};

export const careerReasons = [
    {
        title: "Work on Cutting-Edge & Innovative Projects",
        why: "Instead of following traditional methods, the focus is on driving innovation by solving unique problems and disrupting industries.",
        how: [
            "Emphasis on R&D-driven problem-solving with research-backed strategies.",
            "Utilizing AI, automation, and cloud technologies to build scalable and future-ready solutions.",
            "Developing industry-specific solutions rather than generic software."
        ]
    },
    {
        title: "Rapid Career Growth & Hands-On Experience",
        why: "Opportunities to take on multiple responsibilities and work directly on impactful projects lead to a steep learning curve.",
        how: [
            "Involvement in real-world projects instead of just training exercises.",
            "Exposure to different aspects of business, from tech development to client interactions.",
            "Encouragement to take ownership of projects, contributing directly to overall success."
        ]
    },


    {
        title: "Entrepreneurial Mindset & Ownership of Work",
        why: "The work environment fosters decision-making, leadership, and problem-solving skills, encouraging a sense of ownership.",
        how: [
            "Individuals are encouraged to take initiative rather than just follow instructions.",
            "New ideas are welcomed, allowing direct contributions to product roadmaps and strategies.",
            "Exposure to business operations helps develop a broader understanding of the industry."
        ]
    },
    {
        title: "Continuous Learning & Skill Development",
        why: "A dynamic environment pushes individuals to learn new technologies, tools, and methodologies rapidly.",
        how: [
            "Work on advanced technologies like AI, cloud computing, and automation.",
            "Access to mentorship from experienced industry professionals.",
            "Encouragement for self-learning and experimentation to explore innovative approaches."
        ]
    }
];


export const faqs = [
    {
        category: "Clients",
        questions: [
            {
                question: "What is Systitsof’s service about?",
                answer: "We provide innovative solutions to help businesses streamline operations, enhance efficiency, and drive growth through technology."
            },
            {
                question: "How can I start using your services?",
                answer: "You can explore our offerings on our website and contact us for customized solutions tailored to your business needs."
            },
            {
                question: "What makes Systitsof different from larger competitors?",
                answer: "As a startup, we offer personalized support, agile solutions, and a deep understanding of early-stage business challenges. We prioritize innovation and customer success."
            },
            {
                question: "Do you offer custom solutions for businesses?",
                answer: "Yes, we specialize in developing tailored solutions to meet your business requirements. Reach out to discuss your needs."
            }
        ]
    },
    {
        category: "Job Seekers & Interns",
        questions: [
            {
                question: "Does Systitsof offer internship opportunities?",
                answer: "Yes, we provide internships for students and fresh graduates in technology, marketing, and business development. Check our careers page for openings."
            },
            {
                question: "What roles are available for full-time employment at Systitsof?",
                answer: "We hire professionals in software development, AI, cybersecurity, marketing, and sales. Open positions are updated on our careers page."
            },
            {
                question: "Why should I consider working at Systitsof?",
                answer: "We offer a dynamic startup environment with opportunities to innovate, learn, and contribute to impactful projects. Our team values creativity and growth."
            },
            {
                question: "How can I apply for a job or internship at Systitsof?",
                answer: "You can apply through our official website’s careers section or contact our HR team for more details on the application process."
            }
        ]
    }
];


export const reasons = [
    {
        title: "R&D-Focused Problem Solving",
        description: "We specialize in research-driven solutions, tackling complex challenges with innovative approaches.",
        details: {
            explanation: "Our approach is rooted in research and development, enabling us to explore innovative solutions for unique challenges. We refine strategies based on continuous feedback to ensure the best outcomes.",
            impact: "This results in efficient, adaptive solutions that tackle complex problems using cutting-edge methods, ensuring long-term sustainability and a competitive advantage for our clients."
        }
    },
    {
        title: "Tailored Solutions, Not Generic Software",
        description: "Every solution is crafted from scratch, ensuring a perfect fit for your business needs.",
        details: {
            explanation: "We build custom solutions that align with business processes and growth strategies, integrating seamlessly with existing workflows to optimize performance.",
            impact: "Tailored solutions increase efficiency, enhance user experience, and provide long-term value by addressing specific business requirements, reducing inefficiencies, and supporting growth."
        }
    },
    {
        title: "Expert Team with Deep Tech Experience",
        description: "Our team consists of industry experts skilled in AI, automation, cloud, and R&D solutions.",
        details: {
            explanation: "Our experts combine deep technical knowledge in AI, automation, and scalable architectures to build reliable, forward-thinking solutions tailored to client needs.",
            impact: "This expertise ensures that our solutions are reliable, efficient, and sustainable, while addressing complex challenges with resilience and innovation."
        }
    },
    {
        title: "Scalable & Future-Ready Infrastructure",
        description: "We design systems that grow with your business, ensuring long-term scalability and efficiency.",
        details: {
            explanation: "We design scalable systems that can handle increasing demands, ensuring seamless integration with emerging technologies and minimizing future performance bottlenecks.",
            impact: "Future-proofing systems reduces the need for costly overhauls, enabling businesses to scale efficiently and remain competitive as they grow."
        }
    },
    {
        title: "Industry-Specific Customization",
        description: "We understand industry nuances and tailor solutions to meet sector-specific challenges.",
        details: {
            explanation: "We create custom solutions that meet the unique challenges, regulations, and operational needs of different industries, ensuring high relevance and compliance.",
            impact: "This approach enhances operational efficiency, ensures compliance, and creates long-term value by delivering industry-specific, practical solutions."
        }
    }
];


export const skillOptions = ["JavaScript", "Python", "React", "Node.js", "Machine Learning", "Cybersecurity"];


export const contactSectionCards = [
    { title: "Customer Support", content: " Our support team is available to assist with any concerns or queries." },
    { title: "Feedback & Suggestions", content: "We value your feedback and are constantly working to improve SystItSoft Share your thoughts to help us grow!" },

];



export const descriptionCards = [
    {
        title: "Our Vision",
        quote: "Wherever there is innovation, there should be SYST IT SOFT.",
        description:
            "We aim to systematize innovation and accountability to reduce resource wastage and inefficiencies across industries. Our goal is to create a world where every process is optimized through technology, making industries smarter, more efficient, and future-ready."
    },
    {
        title: "Our Mission",
        quote: "Transforming industries with custom-built, efficient solutions.",
        description:
            "Our mission is to provide tailored, technology-driven solutions that enhance efficiency and accountability. Instead of offering generic solutions, we analyze problems from the ground up, ensuring that every solution is custom-built for industry-specific needs. Even small changes can lead to significant transformations."
    }
];


export const ourValues = [
    {
        title: "Innovation First",
        description: "We prioritize cutting-edge solutions to real-world challenges.",
    },
    {
        title: "Accountability Matters",
        description: "Our solutions bring transparency and efficiency.",
    },
    {
        title: "Scalability & Growth",
        description: "We build technology that grows with your business.",
    },
    {
        title: "Customer Centricity",
        description: "We focus on understanding and meeting our customers' needs.",
    },
    {
        title: "Integrity and Trust",
        description: "We uphold the highest ethical standards in all our interactions.",
    },
    {
        title: "Collaboration and Teamwork",
        description: "We believe in the power of working together to achieve shared goals.",
    },
];