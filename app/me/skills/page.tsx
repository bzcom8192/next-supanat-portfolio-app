// Frontend
// HTML
// CSS
// JavaScript
// React
// Next.js
// Backend
// Node.js
// Express
// PHP
// Database
// MySQL
// PostgreSQL
// Supabase
// Tools
// Git
// GitHub
// VS Code
// Docker

import Sidebar from "@/components/Sidebar";
import SkillCard from "@/components/SkillCard";
import { CodeXml, Cpu, Database, Toolbox } from "lucide-react";
import Image from "next/image";


const skills = [
    {
        name: "Frontend",
        icon: <CodeXml className="inline-block w-6 h-6 ml-2" />,
        skills: [
            {
                name: "HTML",
                src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
                alt: "HTML",
            },
            {
                name: "CSS",
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                alt: "CSS",
            },
            {
                name: "JavaScript",
                src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                alt: "JavaScript",
            },
            {
                name: "React",
                src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                alt: "React",
            },
            {
                name: "Next.js",
                src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
                alt: "Next.js",
            },
        ]
    },
    {
        name: "Backend",
        icon: <Cpu className="inline-block w-6 h-6 ml-2" />,
        skills: [
            {
                name: "Node.js",
                src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                alt: "Node.js",
            },
            {
                name: "Express",
                src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
                alt: "Express",
            },
            {
                name: "PHP",
                src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
                alt: "PHP",
            },
        ]
    },
    {
        name: "Database",
        icon: <Database className="inline-block w-6 h-6 ml-2" />,
        skills: [
            {
                name: "MySQL",
                src: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png?utm_source=wikitech.wikimedia.org&utm_campaign=index&utm_content=original",
                alt: "MySQL",
            },
            {
                name: "PostgreSQL",
                src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
                alt: "PostgreSQL",
            },
            {
                name: "Supabase",
                src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp",
                alt: "Supabase",
            },
        ]
    },
    {
        name: "Tools",
        icon: <Toolbox className="inline-block w-6 h-6 ml-2" />,
        skills: [
            {
                name: "Git",
                src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
                alt: "Git",
            },
            {
                name: "GitHub",
                src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
                alt: "GitHub",
            },
            {
                name: "VS Code",
                src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
                alt: "VS Code",
            },
            {
                name: "Docker",
                src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
                alt: "Docker",
            },
        ]
    }
]

export default function Page() {
    return (
        <div className="flex justify-center min-h-screen">
            <Sidebar />
            <div className="w-full p-1 md:p-4 animate-slide-in">
                <h1 className="text-base md:text-3xl text-slate-800 font-bold text-center rounded-full w-max mx-auto px-4 py-2 bg-gradient-to-b from-gray-200 to-gray-300">ทักษะของฉัน</h1>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 my-4 text-base md:text-lg p-1 md:p-8 text-left gap-8">
                    {skills.map((category, index) => (
                        <div key={index} className="flex flex-col text-gray-600 mb-2 p-2">
                            <h2 className="flex items-center font-bold gap-2">{category.icon} {category.name}</h2>
                            <div className="text-gray-600 mt-2">
                                <div className="grid grid-cols-3 gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillCard
                                            key={skillIndex}
                                            src={skill.src}
                                            name={skill.name}
                                            alt={skill.alt}
                                            className="inline-block mx-1 h-16 w-auto p-1"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};