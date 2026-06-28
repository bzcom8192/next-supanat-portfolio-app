'use client';

import Image from "next/image";
import Link from "next/link";
import { User, FolderOpen, Mail, LayoutDashboard, FolderClosed } from "lucide-react";
import ProfileImage from "@/assets/images/profile.jpeg";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <>
            <div className="hidden md:block w-64 flex-shrink-0" />

            <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 p-5 bg-white border-r border-slate-200/80 justify-between z-30 shadow-sm">
                <div className="w-full">
                    <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100 mb-6">
                        <div className="relative group mb-3">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image
                                src={ProfileImage}
                                alt="Supanat Chantrapat Profile"
                                className="relative w-20 h-20 rounded-full object-cover border-2 border-slate-100 shadow-md transition-transform duration-300 group-hover:scale-105"
                                width={80}
                                height={80}
                                priority
                            />
                        </div>
                        <h1 className="text-sm font-bold text-slate-900 tracking-tight">
                            Supanat Chantrapat
                        </h1>
                        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-0.5">
                            Full-Stack Developer
                        </p>
                    </div>

                    <nav className="w-full flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2 block">
                            Menu
                        </span>

                        <Link
                            href="/about"
                            className={`flex items-center gap-3 px-3 py-2.5 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-200 group text-sm font-medium ${pathname === "/about" ? "bg-slate-50 text-blue-600" : "text-slate-600"}`}
                        >
                            <User className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            <span>About Me</span>
                        </Link>

                        <Link
                            href="/me"
                            className={`flex items-center gap-3 px-3 py-2.5 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-200 group text-sm font-medium ${pathname.includes("/me") ? "bg-slate-50 text-blue-600" : "text-slate-600"}`}
                        >
                            {pathname.includes("/me") ? (
                                <FolderOpen className="w-4 h-4 text-blue-600 transition-colors" />
                            ) : (
                                <FolderClosed className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            )}
                            <span>Portfolio</span>
                        </Link>

                        <Link
                            href="/contact"
                            className={`flex items-center gap-3 px-3 py-2.5 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-200 group text-sm font-medium ${pathname === "/contact" ? "bg-slate-50 text-blue-600" : "text-slate-600"}`}
                        >
                            <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            <span>Contact</span>
                        </Link>
                    </nav>
                </div>

                <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium px-1">
                    <div className="flex items-center gap-1.5">
                        <LayoutDashboard className="w-3.5 h-3.5 text-slate-300" />
                        <span>DTI SAU</span>
                    </div>
                    <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-bold text-[9px]">
                        v1.0
                    </span>
                </div>

            </aside>
        </>
    );
}