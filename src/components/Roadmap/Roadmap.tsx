"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
    return (
        <div>
            <HorizontalScrollCarousel />
            <div className="flex h-20 items-center justify-center">
                <span className="font-semibold uppercase text-neutral-500">
                    Keep Scrolling There's more
                </span>
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className=" font-digital relative h-[300vh] bg-gradient-to-b from-sky-900 to-neutral-900">
            <div className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    DobsMap
                </h1>
            </div>
            <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: { card: CardType }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[500px] w-[500px] rounded-xl overflow-hidden"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            >
                {/* Overlay with opacity */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="absolute inset-0 z-10 grid place-content-end">
                <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl uppercase text-white p-4">
                    {card.title}
                </p>
            </div>
        </div>
    );
};
export default Example;

type CardType = {
    url: string;
    title: string;
    id: number;
};

const cards: CardType[] = [
    {
        url: "/Dobs-1.jpg",
        title: "Phase 1 Launch",
        id: 1,
    },
    {
        url: "/Dobs-6.png",
        title: "Phase 2 Expansion",
        id: 2,
    },
    {
        url: "/Dobs-5.jpg",
        title: "Phase 3 Evolution",
        id: 3,
    },
    {
        url: "/Dobs-7.jpg",
        title: "Phase 4 Integration",
        id: 4,
    },
];