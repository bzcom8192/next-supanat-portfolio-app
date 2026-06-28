import Image from "next/image";

export default function SkillCard({
    src,
    alt,
    name,
    height = 128,
    width = 128,
    className = "inline-block mx-1 h-16 w-auto p-1",
}: {
    src: string;
    alt: string;
    name: string;
    height?: number;
    width?: number;
    className?: string;
}) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-32 px-2 py-1 bg-gradient-to-br from-gray-200 to-gray-300 rounded text-black">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
            />
            <p>{name}</p>
        </div>
    )
};
