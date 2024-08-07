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
        <section ref={targetRef} className="font-digital relative h-[300vh] bg-gradient-to-b from-sky-900 to-neutral-900">
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
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 z-10 p-4 flex flex-col justify-end items-end">
                <div className="text-right">
                    <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl uppercase text-white">
                        {card.title}
                    </p>
                    <p className="text-xs font-sans sm:text-xs md:text-sm lg:text-sm xl:text-md text-white mt-2">
                        {card.description}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Example;

type CardType = {
    url: string;
    title: string;
    description: string; // Added description
    id: number;
};

const cards: CardType[] = [
    {
        url: "/Dobs-1.jpg",
        title: "Phase 1 Launch",
        description: "Launch the $DOBS token by initiating the token sale and listing it. Engage the community through social media campaigns, contests, and giveaways to build a strong, active following. Maintain transparency and build trust with regular updates and AMAs from the development team. Incentivize holding $DOBS by announcing benefits like exclusive access to upcoming projects and events. Our goals are to build a strong, engaged community and establish trust and transparency",
        id: 1,
    },
    {
        url: "/Dobs-6.png",
        title: "Phase 2 Expansion",
        description: "Regular Community Challenges: We will host a series of interactive and engaging community challenges. These events will not only reward participants with tokens and NFTs but also foster a strong sense of community and collaboration.",
        id: 2,
    },
    {
        url: "/Dobs-5.jpg",
        title: "Phase 3 Evolution",
        description: "We're enhancing $DOBS by introducing a burn mechanism to reduce supply and increase value through transaction fees, burn events, and community milestones. New utility features like staking rewards, governance voting, and exclusive access to partner projects will offer more engagement opportunities. Additionally, an exclusive NFT collection purchasable with $DOBS will further boost its utility and value for all holders.",
        id: 3,
    },
    {
        url: "/Dobs-7.jpg",
        title: "Phase 4 Integration",
        description: "To expand the Dobs ecosystem, we will launch new memecoins and NFT projects, each providing unique value and utility for $DOBS holders. We will involve the community in the development of these projects through voting and feedback mechanisms, ensuring growth benefits everyone. Our focus on sustainable growth includes ongoing marketing efforts, community events, and strategic burns to support long-term success. These initiatives aim to continuously engage our community and drive the expansion of the Dobs ecosystem.",
        id: 4,
    },
];
