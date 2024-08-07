"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import ImageCarousel from "../animata/carousel/image-carousel";
import Expandable from "../animata/carousel/expandable";
import Merch from "./MerchCards";

// Define the Card component
const Card = ({ url, title }: { url: string; title: string }) => {
    return (
        <div className="relative h-[300px] w-[300px] rounded-xl overflow-hidden shadow-lg">
            <img
                src={url}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-center p-4">
            </div>
        </div>
    );
};

export default function DobMerch() {
  return (
    <div className="min-h-screen font-digital bg-gradient-to-b from-neutral-900 to-sky-900 flex flex-col items-center justify-start relative w-full">
      <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16">
        <h2 className="relative flex-col md:flex-row z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight max-w-4xl sm:max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-4 lg:gap-6">
          <span>Dobs</span>
          <span className="text-white text-base sm:text-lg font-thin">x</span>
          <span>Merchandise</span>
        </h2>
        <p className="text-center pt-1 sm:pt-2 md:pt-3 lg:pt-3 xl:pt-3">Coming Soon!</p>
      </div>

      <ShootingStars 
        starColor="#ffffff" 
        trailColor="ffffff" 
        minDelay={500} 
        starHeight={2} 
        starWidth={20} 
      />
      
      <StarsBackground 
        starDensity={0.0009} 
        twinkleProbability={0.9} 
      />
      
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 max-w-full sm:max-w-3xl mx-auto text-center text-white px-4 sm:px-6">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Meet Dobs, the rebellious dog meme that has taken the Solana community by storm! Known for his unique and daring style, Dobs is more than just a meme—he’s a symbol of digital rebellion. Our upcoming merchandise collection celebrates Dobs with exclusive designs that capture his bold and fearless spirit. Stay tuned for a range of limited-edition apparel and accessories that will let you show off your love for Dobs in style. Be part of the revolution!
        </p>
      </div>

      {/* Merchandise Cards Section */}
      <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 max-w-full">
          <Merch></Merch>
      </div>
    </div>
  );
}
