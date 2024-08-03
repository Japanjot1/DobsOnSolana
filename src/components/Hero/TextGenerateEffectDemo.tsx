"use client";
import  TextGenerateEffect  from "../ui/text-generate-effect";

const words = `Dobs is a legendary character within the digital world of Solana, known as the Guardian of Trust. He embodies integrity, transparency, and community protection, ensuring fairness in all transactions. Dobs' unwavering dedication fosters a harmonious environment where innovation thrives and conflicts are peacefully resolved, making him a revered figure in Solana's history.
`

import React from 'react';
import { ThreeDCardDemo } from "./ThreeDCardDemo";

export function TextGenerateEffectDemo() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 lg:gap-16">
      <div className="flex flex-col items-start justify-center space-y-4 md:order-2">
        <h2 className="text-3xl font-extrabold text-[#17252a] tracking-tighter sm:text-4xl md:text-5xl">Who is Dobs?</h2>
        <div className="text-muted-[#] md:text-lg">
          <TextGenerateEffect words={words}></TextGenerateEffect>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg  md:order-1">
      <ThreeDCardDemo altText="Dobs" imageUrl="/Dobs-2.jpg" height={500} width={500}></ThreeDCardDemo>
      </div>
    </div>
  </section>
  );
}

