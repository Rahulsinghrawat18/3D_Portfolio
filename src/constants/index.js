import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        //company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        //date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Expertise in React.js framework, including functional components, hooks, and state management libraries such as Redux",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Adept at collaborating with cross-functional teams to translate complex requirements into elegant, efficient solutions.",
        ],
    },
    {
        title: "BlockChain Enthusiast",
       // company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        //date: "Jan 2021 - Feb 2022",
        points: [
            "Solid understanding of blockchain fundamentals, including distributed ledger technology, consensus mechanisms, and cryptographic principles.",
            "Excellent problem-solving and analytical skills, with a proactive mindset towards identifying and addressing technical and conceptual challenges.",
            "Experience with smart contract development using languages like Solidity.",
            "Strong grasp of blockchain scalability, interoperability, and governance challenges, along with potential solutions and advancements.",
        ],
    },
    {
        title: "Web Developer",
        //company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        //date: "Jan 2022 - Jan 2023",
        points: [
            "Innovative and detail-oriented web developer with a passion for crafting responsive and user-centric digital experiences.",
            " Equipped with a strong foundation in front-end and back-end development technologies, I thrive on turning creative concepts into robust, high-performance web solutions.",
            "Proficient in responsive web design principles and frameworks like Bootstrap or Tailwind CSS, ensuring seamless experiences across devices and screen sizes.",
        ],
    },
    {
        title: "Full stack Developer",
        //company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        //date: "Jan 2023 - Present",
        points: [
            "Dynamic and adaptable Full Stack Developer with a comprehensive skill set encompassing both front-end and back-end technologies.",
            "Proficiency in front-end technologies such as HTML5, CSS, JavaScript, and modern JavaScript frameworks/libraries like React.js for building interactive user interfaces.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "I thrive in collaborative environments where I can leverage my expertise to drive project success and exceed client expectations.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Rahulsinghrawat18',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rahul-singh-rawat-783a98243/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Social Media App',
        description: 'A modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more.',
        link: 'https://github.com/Rahulsinghrawat18',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Razor Pay Frontend',
        description: "Developed this clone using Tailwind CSS, showcasing my skills in frontend development and payment gateway integration.",
        link: 'https://github.com/Rahulsinghrawat18/razorpay_frontend',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/Rahulsinghrawat18/Get-yourself-a-car',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Web 3 NFT Card Game',
        description: 'Welcome to my showcase featuring an exciting project that blends cutting-edge technology and gaming innovation – the Online Multiplayer Web 3 NFT Card Game. As a passionate blockchain developer and enthusiast of interactive web applications, this project represents a culmination of my skills in Solidity and React.js.',
        link: 'https://github.com/Rahulsinghrawat18/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'AI Powered 3D Website',
        description: 'A 3d website that allows you to customize your very own T-shirt according to your unique style preferences.',
        link: 'https://github.com/Rahulsinghrawat18',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/Rahulsinghrawat18/AI_Based_Article_Summarizer',
    }
];