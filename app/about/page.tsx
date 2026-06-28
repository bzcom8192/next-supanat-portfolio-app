import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import {
  BookOpenText,
  CodeXml,
  Cpu,
  Gamepad,
  HeartPlus,
  Lightbulb,
  ShieldPlus,
  UserRound,
  Users,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";

// ข้อมูลโลโก้เทคโนโลยีที่ใช้ใน Career Objective
const techLogos = [
  { name: "React", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTZII6ROmMqUHF1rVDhtKSZybJDBj38bFxCGb2Vqn7g&s" },
  { name: "Node.js", src: "https://nodejs.org/static/images/favicons/favicon.png" },
  { name: "Next.js", src: "https://nextjs.org/_next/static/immutable/media/vercel-dark.1f3cgy23m5_jy.svg", darkBg: true },
  { name: "Django", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnj7kXvYIJk8_GmJmdKceG-4NZeVRehHZKvZ8qGJympu7I0hT3MRtJVuQ&s=10" },
  { name: "Linux", src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg" }
];

export default function Page() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 animate-slide-in max-w-7xl mx-auto w-full flex flex-col justify-between">
        <div>
          {/* Header Title */}
          <div className="text-center mb-10">
            <h1 className="inline-flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tight text-slate-900 bg-white border border-slate-200/80 px-6 py-2.5 rounded-full shadow-sm">
              <Sparkles className="w-5 h-5 text-blue-600" />
              เกี่ยวกับฉัน (About Me)
            </h1>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

            {/* 1. ประวัติส่วนตัว (6 Cols) */}
            <section className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h2 className="flex items-center font-bold text-lg text-slate-900 gap-2.5 mb-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl"><UserRound className="w-5 h-5" /></div>
                  ประวัติส่วนตัว
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  สวัสดีครับ! ผมชื่อ <span className="font-semibold text-slate-900">ศุภณัฐ จันทราภาสน์</span> อายุ 23 ปี เกิดเมื่อวันที่ 27 มีนาคม พ.ศ. 2546 ที่จังหวัดนครปฐม ผมเป็นคนที่มีความหลงใหลลึกซึ้งในการพัฒนาซอฟต์แวร์และการสร้างสรรค์เทคโนโลยีใหม่ๆ เพื่อตอบโจทย์การทำงานจริง
                </p>
              </div>
            </section>

            {/* 2. ประวัติการศึกษา (6 Cols) */}
            <section className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h2 className="flex items-center font-bold text-lg text-slate-900 gap-2.5 mb-3">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><BookOpenText className="w-5 h-5" /></div>
                  ประวัติการศึกษา
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  สำเร็จการศึกษาระดับ <span className="font-semibold text-slate-900">ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาเทคโนโลยีธุรกิจดิจิทัล</span> จากวิทยาลัยการอาชีพบางแก้วฟ้า (หลวงพ่อเปิ่นอุปถัมถ์) จ.นครปฐม (พ.ศ. 2567) และปัจจุบันกำลังศึกษาต่อระดับปริญญาตรี <span className="font-semibold text-slate-900">สาขาเทคโนโลยีดิจิทัลและนวัตกรรม มหาวิทยาลัยเอเชียอาคเนย์</span>
                </p>
              </div>
            </section>

            {/* 3. Career Objective (8 Cols) */}
            <section className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="flex items-center font-bold text-lg text-slate-900 gap-2.5 mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl"><Lightbulb className="w-5 h-5" /></div>
                Career Objective & Technical Stack
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                มีความตั้งใจในการพัฒนาและออกแบบระบบที่มีประสิทธิภาพและขยายระบบได้ง่าย (Scalability) มีประสบการณ์และความเชี่ยวชาญในการประยุกต์ใช้งานเทคโนโลยีร่วมกับระบบฝังตัวและระบบคลาวด์ พร้อมเรียนรู้สิ่งใหม่เพื่อสร้างสรรค์นวัตกรรมดิจิทัลในองค์กร
              </p>

              {/* แผงโลโก้ที่จัดเรียงใหม่อย่างสวยงาม */}
              <div className="flex flex-wrap gap-2.5 items-center">
                {techLogos.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl shadow-sm text-xs font-semibold text-slate-700">
                    <div className={`relative w-5 h-5 rounded overflow-hidden flex items-center justify-center ${tech.darkBg ? 'bg-black p-0.5' : ''}`}>
                      <img src={tech.src} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    {tech.name}
                  </div>
                ))}
                <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 font-bold px-3 py-1.5 rounded-xl">
                  Embedded Linux & Cloud Systems
                </span>
              </div>
            </section>

            {/* 4. จุดแข็ง (4 Cols) */}
            <section className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h2 className="flex items-center font-bold text-lg text-slate-900 gap-2.5 mb-3">
                  <div className="p-2 bg-amber-50 text-amber-600 rounded-xl"><ShieldPlus className="w-5 h-5" /></div>
                  จุดแข็ง (Strengths)
                </h2>
                <ul className="text-slate-600 text-sm md:text-base space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>การคิดวิเคราะห์และแก้ปัญหาหน้างานอย่างเป็นระบบ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>ปรับตัวและเรียนรู้เทคโนโลยีใหม่ได้อย่างรวดเร็ว</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>การสื่อสารและการทำงานร่วมกับทีมแบบ Cross-functional</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 5. งานอดิเรก (6 Cols) */}
            <section className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
              <h2 className="flex items-center font-bold text-lg text-slate-900 gap-2.5 mb-4">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-xl"><CodeXml className="w-5 h-5" /></div>
                งานอดิเรก (Hobbies)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-sm hover:scale-[1.02] transition-transform text-center h-28">
                  <CodeXml className="w-8 h-8 mb-1.5 text-purple-400" />
                  <p className="text-xs font-bold">Coding & Open-Source</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl shadow-sm hover:scale-[1.02] transition-transform text-center h-28">
                  <Gamepad className="w-8 h-8 mb-1.5 text-blue-200" />
                  <p className="text-xs font-bold">Gaming & Strategy</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl shadow-sm hover:scale-[1.02] transition-transform text-center h-28">
                  <Cpu className="w-8 h-8 mb-1.5 text-emerald-200" />
                  <p className="text-xs font-bold">Gadget & Hardware</p>
                </div>
              </div>
            </section>

            {/* 6. ความสนใจ (6 Cols) */}
            <section className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
              <h2 className="flex items-center font-bold text-lg text-slate-900 gap-2.5 mb-4">
                <div className="p-2 bg-rose-50 text-rose-600 rounded-xl"><HeartPlus className="w-5 h-5" /></div>
                ความสนใจพิเศษ (Interests)
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-rose-50/40 border border-rose-100 rounded-2xl">
                  <div className="p-2 bg-rose-500 text-white rounded-xl shadow-sm"><CodeXml className="w-4 h-4" /></div>
                  <p className="text-xs md:text-sm font-medium text-slate-700">การพัฒนาเว็บแอปพลิเคชันที่มีประสิทธิภาพสูงและ UX/UI ใช้งานง่าย</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-50/40 border border-amber-100 rounded-2xl">
                  <div className="p-2 bg-amber-500 text-white rounded-xl shadow-sm"><Lightbulb className="w-4 h-4" /></div>
                  <p className="text-xs md:text-sm font-medium text-slate-700">การวิจัยระบบ Embedded Linux, เทคโนโลยี IoT และโซลูชันนวัตกรรม</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50/40 border border-blue-100 rounded-2xl">
                  <div className="p-2 bg-blue-500 text-white rounded-xl shadow-sm"><Users className="w-4 h-4" /></div>
                  <p className="text-xs md:text-sm font-medium text-slate-700">การประสานงานในองค์กรและการแก้ปัญหาระบบเซิร์ฟเวอร์แบบ Agile</p>
                </div>
              </div>
            </section>

          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}