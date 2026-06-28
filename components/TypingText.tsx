"use client";

import { useEffect, useRef } from "react";

export default function TypingText({ text, speed = 50 }: { text: string; speed?: number }) {
    const blinkRef = useRef<boolean>(true);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            blinkRef.current = !blinkRef.current;
        }, 500);

        return () => clearInterval(blinkInterval);
    }, []);

    useEffect(() => {
        const introductionElement = document.getElementById("introduction");
        let index = 0;

        const typingEffect = () => {
            if (introductionElement) {
                if (index < text.length) {
                    introductionElement.textContent += text.charAt(index);
                    introductionElement.textContent = introductionElement.textContent.replaceAll("|", "");
                    if (blinkRef.current) {
                        introductionElement.textContent += "|";
                    }
                    index++;
                    setTimeout(typingEffect, speed);
                } else {
                    setInterval(() => {
                        if (introductionElement) {
                            if (blinkRef.current) {
                                introductionElement.textContent = text + "|";
                            } else {
                                introductionElement.textContent = text;
                            }
                        }
                    }, 500);
                }
            }
        };

        typingEffect();
    }, [text, speed]);

    return (
        <p id="introduction" className="text-gray-700">
            {/* The text will be typed here */}
        </p>
    );
}