import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const KanitSans = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kanit-sans",
});

export const metadata: Metadata = {
  title: "My Portfolio - Supanat Chantrapat",
  description: "ยินดีต้อนรับสู่พอร์ตโฟลิโอของผม! ผมเป็นนักพัฒนาซอฟต์แวร์ที่มีความสนใจในการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย",
  authors: [{ name: "Supanat Chantrapat", url: "https://github.com/bzcom8192" }],
  keywords: [
    "Full-Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${KanitSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">{children}</body>
    </html>
  );
}
