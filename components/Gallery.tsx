'use client';

import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

export default function Gallery({ images }: { images: StaticImageData[] }) {
    const [selectedImage, setSelectedImage] = useState<null | number>(null);

    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedImage]);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="group relative aspect-video sm:aspect-square w-full bg-slate-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-slate-100"
                        onClick={() => setSelectedImage(index)}
                    >
                        <Image
                            src={img}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            sizes="(max-w-7xl) 33vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-xs font-semibold bg-white/90 text-slate-800 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                ขยายรูปภาพ
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') setSelectedImage(null);
                    }}
                    id="gallery-modal"
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white p-2.5 bg-slate-900/50 hover:bg-slate-800 rounded-full backdrop-blur-md transition-colors z-50 border border-white/10"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                        aria-label="Close Preview"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div
                        className="relative w-full max-w-4xl max-h-[85vh] flex items-center justify-center animate-scale-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={images[selectedImage]}
                            alt={`Expanded Gallery Image ${selectedImage + 1}`}
                            width={1920}
                            height={1080}
                            className="object-contain max-w-full max-h-[85vh] rounded-2xl shadow-2xl select-none"
                        />
                    </div>

                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-wider hidden sm:block">
                        กด ESC หรือคลิกพื้นที่ว่างเพื่อปิดหน้าต่าง
                    </p>
                </div>
            )}
        </>
    );
}