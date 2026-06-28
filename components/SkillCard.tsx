import Image from "next/image";

interface SkillCardProps {
    src: string;
    name: string;
    alt?: string;
    width?: number;
    height?: number;
}

export default function SkillCard({
    src,
    name,
    alt,
    width = 48,
    height = 48,
}: SkillCardProps) {
    return (
        <div className="group flex flex-col items-center justify-center p-4 bg-slate-50/60 border border-slate-100 rounded-2xl transition-all duration-300 hover:bg-white hover:border-blue-500/20 hover:shadow-md hover:shadow-blue-500/5 hover:-translate-y-0.5">
            <div className="relative w-12 h-12 flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-105">
                <Image
                    src={src}
                    alt={alt || name}
                    width={width}
                    height={height}
                    className="w-full h-full object-contain p-0.5 filter drop-shadow-sm"
                />
            </div>

            <p className="text-xs md:text-sm font-semibold text-slate-700 tracking-wide group-hover:text-blue-600 transition-colors">
                {name}
            </p>
        </div>
    );
}