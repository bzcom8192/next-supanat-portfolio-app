import Sidebar from "@/components/Sidebar";
import SkillCard from "@/components/SkillCard";
import Footer from "@/components/Footer";
import { CodeXml, Cpu, Database, Blocks } from "lucide-react";

const skillsData = [
    {
        name: "Frontend Development",
        icon: <CodeXml className="w-5 h-5 text-blue-600" />,
        badgeBg: "bg-blue-50",
        skills: [
            { name: "HTML", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
            { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
            { name: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
            { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
            { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        ]
    },
    {
        name: "Backend Development",
        icon: <Cpu className="w-5 h-5 text-emerald-600" />,
        badgeBg: "bg-emerald-50",
        skills: [
            { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
            { name: "Express", src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
            { name: "PHP", src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
        ]
    },
    {
        name: "Database Systems",
        icon: <Database className="w-5 h-5 text-indigo-600" />,
        badgeBg: "bg-indigo-50",
        skills: [
            { name: "MySQL", src: "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png?utm_source=wikitech.wikimedia.org&utm_campaign=index&utm_content=original" },
            { name: "PostgreSQL", src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
            { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp" },
        ]
    },
    {
        name: "DevOps & Tools",
        icon: <Blocks className="w-5 h-5 text-amber-600" />,
        badgeBg: "bg-amber-50",
        skills: [
            { name: "Git", src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
            { name: "GitHub", src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
            { name: "VS Code", src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
            { name: "Docker", src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
        ]
    }
];

export default function Page() {
    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-800">
            <Sidebar />

            <main className="flex-1 p-4 md:p-8 lg:p-12 animate-slide-in max-w-6xl mx-auto w-full flex flex-col justify-between">
                <div>
                    <div className="text-center mb-10">
                        <h1 className="inline-flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tight text-slate-900 bg-white border border-slate-200/80 px-6 py-2.5 rounded-full shadow-sm">
                            <CodeXml className="w-5 h-5 text-blue-600" />
                            ทักษะความเชี่ยวชาญ (My Skills)
                        </h1>
                        <p className="mt-3 text-slate-500 text-sm md:text-base">
                            เครื่องมือ เทคโนโลยี และฐานข้อมูลที่ผมเลือกใช้เพื่อพัฒนาโซลูชันดิจิทัล
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {skillsData.map((category, index) => (
                            <section
                                key={index}
                                className="bg-white border border-slate-200/60 p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <h2 className="flex items-center font-bold text-lg text-slate-900 gap-2.5 mb-5">
                                    <div className={`p-2 rounded-xl ${category.badgeBg}`}>
                                        {category.icon}
                                    </div>
                                    {category.name}
                                </h2>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillCard
                                            key={skillIndex}
                                            src={skill.src}
                                            name={skill.name}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
}