import Image from "next/image";
import ProfileImage from "@/assets/images/profile.jpeg";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="hidden md:flex flex-col h-screen items-center w-48 p-2 bg-white border-r border-gray-300">
            <Image
                src={ProfileImage}
                alt="Profile"
                className="w-24 rounded-full mb-2 drop-shadow-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                width={128}
                height={128}
            />
            <div className="flex flex-col items-center">
                <h1 className="text-base font-bold">Supanat Chantrapat</h1>
                <p className="text-gray-600 text-sm">Full-Stack Developer</p>
            </div>
            <div className="w-full flex flex-col mt-4">
                <Link href={"/about"} className="px-4 py-2 text-gray-700 hover:bg-gray-300 rounded transition-colors duration-300">
                    About Me
                </Link>
                <Link href={"/me"} className="px-4 py-2 text-gray-700 hover:bg-gray-300 rounded transition-colors duration-300">
                    Portfolio
                </Link>
                <Link href={"/contact"} className="px-4 py-2 text-gray-700 hover:bg-gray-300 rounded transition-colors duration-300">
                    Contact
                </Link>
            </div>
        </div>
    );
};