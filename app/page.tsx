import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IBM_Plex_Mono } from "next/font/google";
import { ContactRound, FolderOpen, ArrowRight } from "lucide-react";
import ProfileImage from "@/assets/images/profile.jpeg";

const TypingText = dynamic(() => import("@/components/TypingText"), {
  ssr: true,
});

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Page() {
  return (
    <main className={`relative flex flex-col items-center justify-center min-h-screen p-6 bg-slate-50 text-slate-800 overflow-hidden ${ibmPlexMono.className}`}>

      {/* Background Decorative Ambient Glows (ปรับสีให้จางและซอฟต์ลงสำหรับ Light Mode) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container Card (White Glassmorphism) */}
      <div className="relative z-10 w-full max-w-xl p-8 rounded-3xl bg-white/70 border border-white backdrop-blur-xl shadow-xl shadow-slate-200/50 animate-slide-in">

        {/* Profile Section */}
        <section className="flex flex-col items-center text-center">
          <Link href="/about" aria-label="Go to about page" className="group block relative mb-5">
            {/* Outer Soft Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Profile Frame */}
            <div className="relative p-1 bg-gradient-to-b from-slate-200 to-slate-100 rounded-full shadow-inner">
              <Image
                src={ProfileImage}
                alt="Supanat Chantrapat Profile"
                className="w-32 h-32 rounded-full object-cover transition-transform duration-500 group-hover:scale-102"
                width={128}
                height={128}
                priority
              />
            </div>
          </Link>

          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Supanat Chantrapat
          </h1>
          <p className="text-xs font-bold tracking-wider text-blue-600 uppercase mt-2 bg-blue-50 px-2.5 py-1 rounded-full">
            Full-Stack Developer
          </p>
        </section>

        {/* Introduction Section */}
        <section className="mt-6 text-center text-slate-600 text-sm leading-relaxed min-h-[84px] bg-slate-50/80 border border-slate-100 p-4 rounded-2xl">
          <TypingText
            text="สวัสดีครับ! ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความสนใจในการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย ผมมีประสบการณ์ในการทำงานกับเทคโนโลยีต่าง ๆ เช่น React, Node.js และ Next.js และผมพร้อมที่จะเรียนรู้และพัฒนาตัวเองต่อไปในสายงานนี้"
            speed={50}
          />
        </section>

        {/* Action Buttons (Redesigned Grid Layout for Light Mode) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

          {/* Portfolio Button (Primary CTA) */}
          <Link
            href="/me"
            className="group relative flex items-center justify-between p-4 rounded-xl bg-blue-600 text-white font-medium shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-blue-500 transition-all duration-300 active:scale-[0.98]"
          >
            <div className="flex items-center">
              <div className="p-2 bg-blue-700/30 rounded-lg mr-3">
                <FolderOpen className="w-5 h-5 text-blue-50" />
              </div>
              <span className="text-sm tracking-wide">View Portfolio</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Contact Button (Secondary CTA) */}
          <Link
            href="/contact"
            className="group relative flex items-center justify-between p-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-medium border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm active:scale-[0.98]"
          >
            <div className="flex items-center">
              <div className="p-2 bg-slate-100 rounded-lg mr-3 group-hover:bg-emerald-50 transition-colors">
                <ContactRound className="w-5 h-5 text-slate-500 group-hover:text-emerald-600 transition-colors" />
              </div>
              <span className="text-sm tracking-wide text-slate-800">Get in Touch</span>
            </div>
            <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </Link>

        </div>

      </div>
    </main>
  );
}