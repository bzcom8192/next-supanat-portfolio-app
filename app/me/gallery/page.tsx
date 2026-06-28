import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Gallery from "@/components/Gallery";
import { Images } from "lucide-react";

// นำเข้ารูปภาพปกติ
import img1 from "@/assets/images/g1.png";
import img2 from "@/assets/images/g2.png";
import img3 from "@/assets/images/g3.png";
import img4 from "@/assets/images/g4.png";
import img5 from "@/assets/images/g5.png";
import img6 from "@/assets/images/g6.png";

const galleryImages = [img1, img2, img3, img4, img5, img6];

export default function Page() {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-800">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 lg:p-12 animate-slide-in max-w-6xl mx-auto w-full flex flex-col justify-between">
        <div>
          <div className="text-center mb-10">
            <h1 className="inline-flex items-center gap-2 text-2xl md:text-3xl font-black tracking-tight text-slate-900 bg-white border border-slate-200/80 px-6 py-2.5 rounded-full shadow-sm">
              <Images className="w-5 h-5 text-blue-600" />
              คลังภาพ (My Gallery)
            </h1>
            <p className="mt-3 text-slate-500 text-sm md:text-base">
              ภาพขณะเขียนโปรแกรม
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm">
            <Gallery images={galleryImages} />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}