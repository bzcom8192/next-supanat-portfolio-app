// 6. Contact
// ประกอบด้วย  (ข้อมูลจริง)
// Email
// เบอร์โทรศัพท์
// GitHub
// พร้อมปุ่ม
// Download Resume



import DownloadResume from "@/components/DownloadResume";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function Page() {
    return (
        <div className="flex justify-center min-h-screen">
            <Sidebar />
            <div className="w-full h-full flex flex-col p-1 md:p-4 animate-slide-in">
                <h1 className="text-base md:text-3xl text-slate-800 font-bold text-center rounded-full w-max mx-auto px-4 py-2 bg-gradient-to-b from-gray-200 to-gray-300">ติดต่อฉัน</h1>
                <div className="w-full h-full">
                    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 my-4 text-base md:text-lg p-1 md:p-8 text-left gap-8">
                        <div className="flex flex-col text-gray-600 mb-2 p-2">
                            <h2 className="flex items-center font-bold gap-2">Email</h2>
                            <a
                                href="mailto:s6852d10006@sau.ac.th"
                                className="text-gray-600 mt-2 hover:text-blue-600 transition-colors duration-300"
                            >
                                s6852d10006@sau.ac.th
                            </a>
                        </div>
                        <div className="flex flex-col text-gray-600 mb-2 p-2">
                            <h2 className="flex items-center font-bold gap-2">เบอร์โทรศัพท์</h2>
                            <a
                                href="tel:+66963563354"
                                className="text-gray-600 mt-2 hover:text-blue-600 transition-colors duration-300"
                            >
                                +66963563354
                            </a>
                        </div>
                        <div className="flex flex-col text-gray-600 mb-2 p-2">
                            <h2 className="flex items-center font-bold gap-2">GitHub</h2>
                            <a
                                href="https://github.com/bzcom8192"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 mt-2 hover:text-blue-600 transition-colors duration-300"
                            >
                                bzcom8192
                            </a>
                        </div>
                        <div className="flex flex-col text-gray-600 mb-2 p-2">
                            <DownloadResume />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}