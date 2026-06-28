import Image from "next/image";
import ProfileImage from "@/assets/images/profile.jpeg";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { ContactRound, FolderOpen } from "lucide-react";
import Link from "next/link";

const TypingText = dynamic(() => import("@/components/TypingText"), {
  ssr: true,
});

const inter = Inter({ subsets: ["latin"] });

export default function Page() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 animate-slide-in">
      {/* Profile */}
      <div className="flex flex-col items-center mb-4 gap-2">
        <Link href={"/about"}>
          <Image
            src={ProfileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-2 drop-shadow-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            width={128}
            height={128}
          />
        </Link>
        <h1 className="text-2xl font-bold">Supanat Chantrapat</h1>
        <p className="text-gray-600">Full-Stack Developer</p>
      </div>

      {/* Introduction */}
      <div className="max-w-md text-center mb-4">
        <TypingText
          text="สวัสดีครับ! ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความสนใจในการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย ผมมีประสบการณ์ในการทำงานกับเทคโนโลยีต่าง ๆ เช่น React, Node.js และ Next.js และผมพร้อมที่จะเรียนรู้และพัฒนาตัวเองต่อไปในสายงานนี้"
          speed={50}
        />
      </div>

      {/* Buttons */}
      <div className={`flex space-x-4 [&>a]:transition-[colors_300ms_ease_in_out,transform_300ms_ease_in_out] ${inter.className} [&>a]:hover:scale-105`}>
        <Link href={"/me"} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <FolderOpen className="inline-block mr-2" />
          Portfolio {"->"}
        </Link>
        <Link href={"/contact"} className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          <ContactRound className="inline-block mr-2" />
          Contact {"->"}
        </Link>
      </div>
    </div>
  );
}