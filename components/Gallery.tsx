'use client';

import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export default function Gallery({
    images
}: {
    images: StaticImageData[];
}) {

    const [selectedImage, setSelectedImage] = useState<null | number>(null);

    return (
        <div className="w-full grid grid-cols-3 text-gray-600 gap-6 mb-2 p-2">
            {images.map((img, index) => (
                <div key={index} className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                        setSelectedImage(index);
                        setTimeout(() => {
                            const modal = document.getElementById('gallery-modal');
                            if (modal) {
                                modal.focus();
                            }
                        }, 0);
                    }}
                >
                    <Image
                        src={img}
                        alt={`Gallery Image ${index + 1}`}
                        width={400}
                        height={400}
                        className="object-cover w-auto h-full rounded-lg"
                    />
                </div>
            ))}
            {selectedImage !== null && (
                <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onDoubleClick={() => setSelectedImage(null)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                            setSelectedImage(null);
                        }
                    }}
                    id="gallery-modal"
                >
                    <div className="relative w-full max-w-3xl p-4">
                        <button
                            className="fixed top-4 right-4 text-white text-2xl font-bold"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <Image
                            src={images[selectedImage]}
                            alt={`Gallery Image ${selectedImage + 1}`}
                            width={2048}
                            height={2048}
                            className="object-contain w-full h-auto rounded-lg select-none"
                            onDoubleClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};