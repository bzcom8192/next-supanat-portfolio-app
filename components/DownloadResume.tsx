"use client";

export default function DownloadResume() {
    return (
        <button
            onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "resume.pdf";
                link.click();
            }}
            className="w-full p-4 text-center bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-full"
        >
            Download Resume
        </button>
    )
}
