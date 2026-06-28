import DownloadResume from "@/components/DownloadResume";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { Mail, Phone, Send } from "lucide-react";

export default function Page() {
    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-800">
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 p-4 md:p-8 lg:p-12 animate-slide-in max-w-4xl mx-auto w-full flex flex-col justify-between">
                <div>
                    {/* Header Title */}
                    <div className="text-center mb-10">
                        <h1 className="inline-flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tight text-slate-900 bg-white border border-slate-200/80 px-6 py-2.5 rounded-full shadow-sm">
                            <Send className="w-5 h-5 text-blue-600 animate-pulse" />
                            ติดต่อฉัน (Contact Me)
                        </h1>
                        <p className="mt-3 text-slate-500 text-sm md:text-base">
                            ยินดีร่วมงานและแลกเปลี่ยนความรู้ สามารถติดต่อผมได้ผ่านช่องทางด้านล่างนี้ครับ
                        </p>
                    </div>

                    {/* Contact Grid Card (Glassmorphic Wrap) */}
                    <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                            {/* 1. Email Card */}
                            <a
                                href="mailto:s6852d10006@sau.ac.th"
                                className="group flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-500/30 hover:bg-blue-50/30 transition-all duration-300 shadow-sm"
                            >
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mr-4">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">Email</span>
                                    <span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-blue-600 transition-colors break-all">
                                        s6852d10006@sau.ac.th
                                    </span>
                                </div>
                            </a>

                            {/* 2. Phone Card */}
                            <a
                                href="tel:+66963563354"
                                className="group flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-500/30 hover:bg-emerald-50/30 transition-all duration-300 shadow-sm"
                            >
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 mr-4">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">เบอร์โทรศัพท์</span>
                                    <span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-emerald-600 transition-colors">
                                        +66 96 356 3354
                                    </span>
                                </div>
                            </a>

                            {/* 3. GitHub Card */}
                            <a
                                href="https://github.com/bzcom8192"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-900/30 hover:bg-slate-100/60 transition-all duration-300 shadow-sm md:col-span-2"
                            >
                                <div className="p-3 bg-slate-200 text-slate-800 rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 mr-4">
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                        <path d="M9 18c-4.51 2-5-2-7-2" />
                                    </svg>
                                </div>
                                <div className="flex-1 flex justify-between items-center">
                                    <div>
                                        <span className="text-xs font-semibold text-slate-400 block uppercase tracking-wider">GitHub Profiles</span>
                                        <span className="text-sm md:text-base font-semibold text-slate-800">
                                            github.com/bzcom8192
                                        </span>
                                    </div>
                                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors mr-2 hidden sm:inline">
                                        เปิดหน้าต่างใหม่ &rarr;
                                    </span>
                                </div>
                            </a>

                            {/* 4. Download Resume Section */}
                            <div className="md:col-span-2 mt-4 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50 p-4 rounded-2xl">
                                <div className="text-center sm:text-left">
                                    <h3 className="text-sm font-bold text-slate-900">ต้องการเอกสารสมัครงานเพิ่มเติม?</h3>
                                    <p className="text-xs text-slate-500 mt-0.5">คุณสามารถดาวน์โหลดใบประวัติย่อ (Resume) ฉบับสมบูรณ์ได้ทันที</p>
                                </div>
                                <div className="w-full sm:w-auto flex justify-center [&>button]:w-full sm:[&>button]:w-auto">
                                    <DownloadResume />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
}