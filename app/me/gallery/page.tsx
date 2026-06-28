import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

import img1 from "@/assets/images/g1.png";
import img2 from "@/assets/images/g2.png";
import img3 from "@/assets/images/g3.png";
import img4 from "@/assets/images/g4.png";
import img5 from "@/assets/images/g5.png";
import img6 from "@/assets/images/g6.png";
import Gallery from "@/components/Gallery";

const galleryImages = [img1, img2, img3, img4, img5, img6];

export default function Page() {
    return (
        <div className="flex justify-center min-h-screen">
            <Sidebar />
            <div className="w-full flex flex-col p-1 md:p-4 animate-slide-in">
                <div className="w-full">
                    <h1 className="text-base md:text-3xl text-slate-800 font-bold text-center rounded-full w-max mx-auto px-4 py-2 bg-gradient-to-b from-gray-200 to-gray-300">My Gallery</h1>
                    <Gallery images={galleryImages} />
                </div>
                <Footer />
            </div>
        </div>
    );
}