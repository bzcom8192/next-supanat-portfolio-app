import Sidebar from "@/components/Sidebar";
import { CodeXml, GalleryVerticalEnd, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-800">
            <Sidebar />

            <div className="flex-1 flex flex-col justify-center p-6 md:p-12">
                <div className="max-w-4xl w-full mx-auto animate-slide-in">

                    <div className="mb-10 text-left">
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Portfolio</span>
                        </h1>
                        <p className="mt-2 text-slate-500 text-lg">
                            เลือกเมนูที่ต้องการเพื่อเข้าถึงข้อมูลทักษะ ผลงาน และรูปภาพกิจกรรม
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <Link href="/me/skills" className="group relative flex flex-col justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="mb-4">
                                <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <CodeXml className="h-6 w-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">My Skills</h3>
                                <p className="text-sm text-slate-500 mt-1">ทักษะทางเทคนิค ความเชี่ยวชาญ และเครื่องมือที่ใช้</p>
                            </div>
                            <div className="mt-4 text-xs font-semibold text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                เข้าชมหน้านี้ &rarr;
                            </div>
                        </Link>

                        <Link href="/me/projects" className="group relative flex flex-col justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="mb-4">
                                <div className="inline-flex p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                    <GalleryVerticalEnd className="h-6 w-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">My Projects</h3>
                                <p className="text-sm text-slate-500 mt-1">คลังผลงาน นวัตกรรม และโปรเจกต์ Full-Stack / IoT</p>
                            </div>
                            <div className="mt-4 text-xs font-semibold text-indigo-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                เข้าชมหน้านี้ &rarr;
                            </div>
                        </Link>

                        <Link href="/me/gallery" className="group relative flex flex-col justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-purple-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                            <div className="mb-4">
                                <div className="inline-flex p-3 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                    <ImageIcon className="h-6 w-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors">My Gallery</h3>
                                <p className="text-sm text-slate-500 mt-1">ภาพกิจกรรม ภาพถ่าย และความประทับใจต่างๆ</p>
                            </div>
                            <div className="mt-4 text-xs font-semibold text-purple-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                เข้าชมหน้านี้ &rarr;
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}