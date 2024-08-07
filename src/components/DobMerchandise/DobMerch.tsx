"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import ImageCarousel from "../animata/carousel/image-carousel";
export default function DobMerch() {
  return (
<div className="min-h-screen font-digital bg-gradient-to-b from-neutral-900 to-sky-900 flex flex-col items-center justify-start relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
  <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16">
    <h2 className="relative  flex-col md:flex-row z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight max-w-4xl sm:max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-4 lg:gap-6">
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

  <div className="flex-grow flex items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-14">
    <ImageCarousel
      items={[
        {
          id: 1,
          image: '/merch/shirtOne.png',
          title: 'Item 1'
        },
        {
          id: 2,
          image: '/merch/shirtTwo.png',
          title: 'Item 2'
        },
        {
          id: 3,
          image: '/merch/shirtThree.png',
          title: 'Item 3'
        },
      ]}
    />
  </div>
</div>


  );
}
