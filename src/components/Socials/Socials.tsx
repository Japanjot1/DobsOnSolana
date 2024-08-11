// components/JoinMADMovement.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTelegram, FaDiscord, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const animateParticle = (particle: HTMLDivElement) => {
  gsap.to(particle, {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    duration: Math.random() * 10 + 5,
    ease: "none",
    onComplete: () => animateParticle(particle),
  });
};

const Socials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);

  const socialLinks = [
    { name: 'Telegram', icon: FaTelegram, url: 'https://t.me/+rWCW2H49ZH0xNzNh' },
    { name: 'Discord', icon: FaDiscord, url: 'https://discord.gg/TeJu6zJM' },
    { name: 'Twitter', icon: FaXTwitter, url: 'https://x.com/dobs_solana' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const socialButtons = socialRef.current?.children;

    if (container && title && description && socialButtons) {
      gsap.set([title, description, socialButtons], { autoAlpha: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(title, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" })
        .to(description, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
        .to(socialButtons, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.5");

      // Particle effect
      const particleCount = 50;
      const particles: HTMLDivElement[] = [];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('absolute', 'w-2.5', 'h-2.5', 'bg-white', 'rounded-full', 'pointer-events-none');
        container.appendChild(particle);
        particles.push(particle);

        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        });

        animateParticle(particle);
      }

      return () => {
        if (tl) tl.kill();
        particles.forEach(particle => particle.remove());
      };
    }
  }, []);

  return (
    <div className="font-digital relative min-h-screen bg-cover bg-top bg-fixed overflow-hidden flex items-center justify-center" style={{ backgroundImage: "url('/tweet/tweet-5.png')" }} ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-sky-600 to-neutral-900 opacity-60"></div>
      <div className="relative bg-white/10 bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 text-center max-w-3xl w-11/12 shadow-lg border-opacity-20">
        <h1 ref={titleRef} className="text-4xl text-white font-extrabold mb-4 uppercaset animate-float">
          Join the <span className=" font-sans">$</span>DOBS Meme Club
        </h1>
        <p ref={descriptionRef} className="text-white text-lg mb-8 leading-relaxed">
          The resistance needs you comrade!
        </p>
        <div ref={socialRef} className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 rounded-full p-4 transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:rotate-12 hover:bg-opacity-40 hover:shadow-lg"
            >
              <social.icon className="w-7 h-7 text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
