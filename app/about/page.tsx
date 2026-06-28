// แสดงข้อมูลเกี่ยวกับตนเอง (ข้อมูลจริง)
// ประกอบด้วย
// ประวัติส่วนตัว
// ประวัติการศึกษา
// Career Objective
// จุดแข็ง
// ความสนใจ
// งานอดิเรก

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar"
import { BookOpenText, CodeXml, Cpu, Gamepad, HeartPlus, Lightbulb, ShieldPlus, UserRound, Users } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex justify-center min-h-screen">
            <Sidebar />
            <div className="w-full p-1 md:p-4 animate-slide-in">
                <h1 className="text-base md:text-3xl text-slate-800 font-bold text-center rounded-full w-max mx-auto px-4 py-2 bg-gradient-to-b from-gray-200 to-gray-300">เกี่ยวกับฉัน</h1>
                <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 my-4 text-base md:text-lg p-1 md:p-8 text-left gap-8">
                    <div className="flex flex-col text-gray-600 mb-2 p-2">
                        <h2 className="flex items-center font-bold gap-2"><UserRound className="inline-block w-6 h-6 ml-2" /> ประวัติส่วนตัว</h2>
                        <p className="text-gray-600 mt-2">
                            สวัสดีครับ! ผมชื่อศุภณัฐ จันทราภาสน์ อายุ 23 ปี เกิดเมื่อวันที่ 27 มีนาคม พ.ศ. 2546 ที่จังหวัดนครปฐม <br /> ผมเป็นคนที่มีความสนใจในการพัฒนาซอฟต์แวร์และเทคโนโลยีใหม่ ๆ
                        </p>
                    </div>

                    <div className="flex flex-col text-gray-600 mb-2 p-2">
                        <h2 className="flex items-center font-bold gap-2"><BookOpenText className="inline-block w-6 h-6 ml-2" /> ประวัติการศึกษา</h2>
                        <p className="text-gray-600 mt-2">
                            ผมสำเร็จการศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาเทคโนโลยีธุรกิจดิจิทัล จากวิทยาลัยการอาชีพบางแก้วฟ้า (หลวงพ่อเปิ่นอุปถัมถ์) จังหวัดนครปฐม ในปี พ.ศ. 2567 และกำลังศึกษาต่อในระดับปริญญาตรี สาขาเทคโนโลยีจิดิทัลและนวัตกรรม มหาวิทยาลัยเอเชียอาคเนย์
                        </p>
                    </div>

                    <div className="flex flex-col text-gray-600 mb-2 p-2">
                        <h2 className="flex items-center font-bold gap-2"><Lightbulb className="inline-block w-6 h-6 ml-2" /> Career Objective</h2>
                        <p className="text-gray-600 mt-2">
                            ผมมีประสบการณ์ในการทำงานกับเทคโนโลยีต่าง ๆ เช่น
                            <Image
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTZII6ROmMqUHF1rVDhtKSZybJDBj38bFxCGb2Vqn7g&s"}
                                alt="React"
                                width={32}
                                height={32}
                                className="inline-block mx-1 p-1"
                            />React,
                            <Image
                                src={"https://nodejs.org/static/images/favicons/favicon.png"}
                                alt="Node.js"
                                width={32}
                                height={32}
                                className="inline-block mx-1 p-1"
                            />Node.js,
                            <Image
                                src={"https://nextjs.org/_next/static/immutable/media/vercel-dark.1f3cgy23m5_jy.svg"}
                                alt="Next.js"
                                width={32}
                                height={32}
                                className="inline-block mx-1 bg-black p-1"
                            />Next.js, <br />
                            <Image
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnj7kXvYIJk8_GmJmdKceG-4NZeVRehHZKvZ8qGJympu7I0hT3MRtJVuQ&s=10"}
                                alt="Django"
                                width={64}
                                height={64}
                                className="inline-block mx-1 p-1 h-8 w-auto"
                            />,
                            <Image
                                src={"https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg"}
                                alt="Linux"
                                width={32}
                                height={32}
                                className="inline-block mx-1 p-1"
                            />Embedded Linux, และ Cloud Linux System และผมพร้อมที่จะเรียนรู้และพัฒนาตัวเองต่อไปในสายงานนี้
                        </p>
                    </div>

                    <div className="flex flex-col text-gray-600 mb-2 p-2">
                        <h2 className="flex items-center font-bold gap-2"><ShieldPlus className="inline-block w-6 h-6 ml-2" /> จุดแข็ง</h2>
                        <p className="text-gray-600 mt-2">
                            จุดแข็งของผมคือความสามารถในการแก้ไขปัญหาและการทำงานเป็นทีม ผมมีความสนใจในการเรียนรู้เทคโนโลยีใหม่ ๆ และพัฒนาทักษะของตัวเองอย่างต่อเนื่อง
                        </p>
                    </div>

                    <div className="flex flex-col text-gray-600 mb-2">
                        <h2 className="flex items-center font-bold gap-2"><CodeXml className="inline-block w-6 h-6 ml-2" /> งานอดิเรก</h2>
                        <div className="mt-2">
                            <div className="flex justify-center gap-2 [&>span]:hover:bg-gray-300 [&>span]:transition-colors [&>span]:duration-300 overflow-x-auto">
                                <span className="flex flex-col items-center justify-center w-full h-32 px-2 py-1 bg-gray-200 rounded bg-gradient-to-r from-gray-400 to-gray-600 text-white">
                                    <CodeXml className="w-12 min-w-12 h-12 inline-block mr-1" />
                                    <p>การเขียนโปรแกรม</p>
                                </span>
                                <span className="flex flex-col items-center justify-center w-full h-32 px-2 py-1 bg-gray-200 rounded bg-gradient-to-r from-green-400 to-blue-400 text-white">
                                    <Gamepad className="w-12 min-w-12 h-12 inline-block mr-1" />
                                    <p>การเล่นเกม</p>
                                </span>
                                <span className="flex flex-col items-center justify-center w-full h-32 px-2 py-1 bg-gray-200 rounded bg-gradient-to-r from-blue-400 to-purple-400 text-white">
                                    <Cpu className="w-12 min-w-12 h-12 inline-block mr-1" />
                                    <p>การเรียนรู้เทคโนโลยีใหม่ ๆ</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col text-gray-600 mb-2">
                        <h2 className="flex items-center font-bold gap-2"><HeartPlus className="inline-block w-6 h-6 ml-2" /> ความสนใจ</h2>
                        <div className="mt-2">
                            <div className="flex justify-center gap-2 [&>span]:hover:bg-gray-300 [&>span]:transition-colors [&>span]:duration-300">
                                <span className="flex flex-col items-center justify-center w-full h-32 px-2 py-1 bg-gray-200 rounded bg-gradient-to-r from-red-300 to-yellow-300 text-white">
                                    <CodeXml className="w-12 h-12 inline-block mr-1" />
                                    <p>การพัฒนาเว็บแอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย</p>
                                </span>
                                <span className="flex flex-col items-center justify-center w-full h-32 px-2 py-1 bg-gray-200 rounded bg-gradient-to-r from-yellow-300 to-green-300 text-white">
                                    <Lightbulb className="w-12 h-12 inline-block mr-1" />
                                    <p>การเรียนรู้เทคโนโลยีใหม่ ๆ และพัฒนาทักษะของตัวเอง</p>
                                </span>
                                <span className="flex flex-col items-center justify-center w-full h-32 px-2 py-1 bg-gray-200 rounded bg-gradient-to-r from-green-300 to-blue-300 text-white">
                                    <Users className="w-12 h-12 inline-block mr-1" />
                                    <p>การทำงานร่วมกับทีมและการแก้ไขปัญหาอย่างสร้างสรรค์</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}