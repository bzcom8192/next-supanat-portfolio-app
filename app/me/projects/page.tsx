import React from 'react';
import Image from 'next/image';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    role: string;
    year: string;
    imageUrl: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Smart Farm IoT & Management Platform (ฟาร์มอัจฉริยะ)",
        description: "ระบบบริหารจัดการฟาร์มแบบครบวงจรที่เชื่อมต่อกับอุปกรณ์ IoT เพื่อตรวจวัดสภาพแวดล้อม ควบคุมระบบน้ำ-อาหารอัตโนมัติ และแสดงผลข้อมูลแบบ Real-time ผ่าน Dashboard เพื่อเพิ่มผลผลิตและลดต้นทุนแรงงาน",
        technologies: ["React", "Node.js (ESM)", "Go", "MQTT", "Modbus RTU", "Docker"],
        role: "Full-Stack Developer & IoT System Architect (ออกแบบสถาปัตยกรรมระบบเชื่อมต่อฮาร์ดแวร์และพัฒนาเซิร์ฟเวอร์หลัก)",
        year: "2026",
        imageUrl: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80" // รูปแปลงเกษตรอัจฉริยะ/เทคโนโลยีการเกษตร
    },
    {
        id: 2,
        title: "High-Performance Reverse Proxy & Edge Gateway",
        description: "การพัฒนาโปรแกรม Reverse Proxy ประสิทธิภาพสูงด้วยภาษา Go เพื่อนำมาใช้งานแทนเว็บเซิร์ฟเวอร์แบบเดิมในระบบฝังตัว (Embedded Systems) ช่วยลดการใช้ทรัพยากรระบบและเพิ่มความเร็วในการส่งข้อมูล static files ของหน้าเว็บ",
        technologies: ["Go (Golang)", "Linux Kernel Modules", "Docker", "Network Protocols"],
        role: "Backend & Systems Engineer (วิจัยและพัฒนาซอฟต์แวร์ระบบ ควบคุมการทำงานระดับ Kernel และทดสอบประสิทธิภาพ)",
        year: "2026",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" // รูปเซิร์ฟเวอร์และระบบเครือข่าย
    },
    {
        id: 3,
        title: "Enterprise Multi-View Monitoring Desktop Application",
        description: "แอปพลิเคชันบนเดสก์ท็อปสำหรับควบคุมและมอนิเตอร์ระบบภายในเครือข่ายท้องถิ่น รองรับการสแกนหาไอพีและสลับหน้าจอควบคุมของเซิร์ฟเวอร์หลายเครื่องพร้อมกันแบบ Multi-view ช่วยให้เจ้าหน้าที่ดูแลระบบทำงานได้สะดวกขึ้น",
        technologies: ["Electron", "React", "TypeScript", "Vite", "Tailwind CSS"],
        role: "Frontend & Desktop Application Developer (ออกแบบ UI/UX และพัฒนาโครงสร้างการจัดการหน้าต่างด้วย WebContentsView)",
        year: "2026",
        imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" // รูปหน้าจอ UI/UX และการพัฒนาซอฟต์แวร์
    }
];

export default function page() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col p-4 md:p-8 bg-gray-50 animate-slide-in">
                <div className="max-w-6xl mx-auto pt-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
                            ผลงานและโครงการ (Projects)
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                            รวบรวมโครงการพัฒนาซอฟต์แวร์ นวัตกรรมดิจิทัล และระบบ IoT ที่เคยได้ลงมือทำ
                        </p>
                        <div className="mt-4 h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100"
                            >
                                {/* Image Section */}
                                <div className="relative h-48 w-full bg-gray-200">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        width={800}
                                        height={400}
                                    />
                                    <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        ปี {project.year}
                                    </span>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-4 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Role Detail */}
                                        <div className="mb-4 pt-4 border-t border-gray-100">
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                                                บทบาทหน้าที่
                                            </span>
                                            <p className="text-sm text-gray-700 font-medium">
                                                {project.role}
                                            </p>
                                        </div>

                                        {/* Tech Stack Tags */}
                                        <div>
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                                                Technologies
                                            </span>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-md font-medium border border-blue-100"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}