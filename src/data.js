import { Github, Linkedin, Mail, Twitter, ExternalLink, Code2, Terminal, Database, Cloud, Cpu, Smartphone } from 'lucide-react';

export const portfolioData = {
    name: "Shreemant Sahu",
    role: "Final-Year Computer Science Student",
    tagline: "Exploring the intersection of Software and Hardware.",
    about: "Final-year B.Tech student at KIIT Bhubaneswar with experience in application development. Comfortable in Linux with basic shell scripting and looking to gain hands-on experience in understanding how software interacts with hardware.",
    avatar: "/hero-image.png", // Local image from public folder
    social: [
        { name: "GitHub", url: "https://github.com/themantrixx", icon: Github },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/shreemant-s-9a4919260/", icon: Linkedin },
        { name: "Twitter", url: "https://x.com/the_mantrixx", icon: Twitter },
        { name: "Email", url: "mailto:shreemant.sahu04@gmail.com", icon: Mail },
    ],
    skills: [
        {
            category: "Languages & Mobile",
            items: [
                { name: "C++", level: 85, iconClass: "devicon-cplusplus-plain" },
                { name: "Flutter", level: 90, iconClass: "devicon-flutter-plain" },
                { name: "Dart", level: 85, iconClass: "devicon-dart-plain" },
                { name: "Shell Scripting", level: 70, iconClass: "devicon-bash-plain" },
            ]
        },
        {
            category: "Tools & OS",
            items: [
                { name: "Linux", level: 85, iconClass: "devicon-linux-plain" },
                { name: "Git & GitHub", level: 90, iconClass: "devicon-git-plain" },
                { name: "Firebase", level: 80, iconClass: "devicon-firebase-plain" },
                { name: "Android Studio", level: 75, iconClass: "devicon-androidstudio-plain" },
            ]
        },
        {
            category: "Databases",
            items: [
                { name: "MySQL", level: 80, iconClass: "devicon-mysql-plain" },
                { name: "Firebase DB", level: 85, iconClass: "devicon-firebase-plain" },
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "KIIT Student Management App",
            description: "A Flutter-based mobile app to manage student academic activities digitally. Features QR-based attendance, secure login, and real-time data syncing.",
            tech: ["Flutter", "Firebase Auth", "Real-time Database"],
            link: "https://kiitsap.netlify.app/",
            repo: "https://github.com/themantrixx/KIIT-Student-Management-App",
            featured: true,
            image: "/project_student_app_fun.png"
        }
    ],
    experience: [
        {
            company: "processWare",
            role: "App Development Intern",
            duration: "Remote", // Date not fully parsed, using location/type
            description: "Undertook development of comprehensive modules for a business-oriented application using Flutter and Firebase. Designed frontend UI components and implemented CRUD operations.",
        }
    ],
    education: [
        {
            degree: "B.Tech in Computer Science and Engineering",
            school: "KIIT University, Bhubaneswar",
            logo: "/KIIT-logo-HD.webp",
            duration: "2022 – 2026",
            details: "CGPA: 7.73",
        },
        {
            degree: "Higher Secondary (CBSE)",
            school: "Delhi Public School, Joka",
            logo: "/School_Logo.png",
            duration: "2021 – 2022",
            details: "",
        }
    ]
};
