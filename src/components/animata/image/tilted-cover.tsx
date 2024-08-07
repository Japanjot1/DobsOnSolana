import Image from 'next/image'; // Import next/image for optimized images
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TiltedCoverProps extends React.HTMLAttributes<HTMLDivElement> {
    direction?: "left" | "right";

    /**
     * The content to be displayed on the cover
     */
    cover?: ReactNode;

    /**
     * Determines if the cover should tilt with the background
     */
    tiltCover?: boolean;

    /**
     * The content to be displayed on the background
     */
    children?: ReactNode;

    /**
     * The image to be displayed on the cover. Takes precedence over `children`.
     */
    image?: {
        src: string;
        alt: string;
        layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'; // Specify layout
        width?: number;
        height?: number;
    };
}

export default function TiltedCover({
    children,
    direction = "left",
    tiltCover = true,
    cover,
    image,
}: TiltedCoverProps) {
    const tiltLeft = direction === "left";
    const factor = tiltLeft ? 1 : -1;

    return (
        <div className="relative flex items-center justify-center overflow-hidden w-full py-5">
            <div className=" absolute inset-0 z-0 overflow-hidden">
                <div
                    className="text-white/10 absolute inset-0 flex flex-col items-center justify-center"
                >
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10xl] 2xl:text-[11xl]" style={{ whiteSpace: 'nowrap' }}>
                        {Array.from({ length: 20 }).map((_, index) => (
                            <span key={index} className="mr-4">DOBS</span>
                        ))}
                    </div>
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10xl] 2xl:text-[11xl]" style={{ whiteSpace: 'nowrap' }}>
                        {Array.from({ length: 20 }).map((_, index) => (
                            <span key={index} className="mr-4">DOBS</span>
                        ))}
                    </div>
                    <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10xl] 2xl:text-[11xl]" style={{ whiteSpace: 'nowrap' }}>
                        {Array.from({ length: 20 }).map((_, index) => (
                            <span key={index} className="mr-4">DOBS</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="group relative w-full max-w-[500px] h-[500px]">
                {/* Background content */}
                <div
                    className="border-box border-1 pointer-events-none relative h-full w-full overflow-hidden rounded-xl border transition-all duration-500 ease-slow group-hover:!transform-none"
                    style={{
                        transform: `perspective(600px) rotateY(${factor * 20}deg) scale(0.85) translateX(${-factor * 20}%)`,
                    }}
                >
                    {children}
                    <div className="absolute inset-0 h-full w-full transition-all bg-black/20 group-hover:bg-white/20" />
                </div>

                {/* Cover Content */}
                <div
                    className={cn(
                        "border-box pointer-events-none absolute inset-0 h-full w-full rounded-xl transition-all delay-75 duration-500 ease-slow group-hover:!transform-none group-hover:opacity-0",
                        {
                            "group-hover:left-[200%]": tiltLeft,
                            "group-hover:-left-[200%]": !tiltLeft,
                        },
                    )}
                    style={{
                        transform: tiltCover ? `perspective(600px) rotateY(${factor * 20}deg)` : undefined,
                    }}
                >
                    <div className="h-full w-full rounded-md object-cover">
                        {image ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500} // Default width
                                    height={500} // Default height
                                    className="rounded-md object-cover"
                                />
                            </div>
                        ) : (
                            cover
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
