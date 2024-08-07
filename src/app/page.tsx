
import TiltedCover from "@/components/animata/image/tilted-cover";
import BoldCopy from "@/components/animata/text/bold-copy";
import HowToBuy from "@/components/Buy/HowToBuy";
import DobsInfo from "@/components/Hero/DobsInfo";
import { InfiniteDobTicker } from "@/components/Hero/InfiniteDobTicker";
import { InitialLoader } from "@/components/Hero/Loader";
import { ThreeDCardDemo } from "@/components/Hero/ThreeDCardDemo";
import Navbar from "@/components/Navbar/Navbar";
import Example from "@/components/Roadmap/Roadmap";
import DobMerch from "@/components/DobMerchandise/DobMerch";
import Dobonomics from "@/components/DobMerchandise/DobMerch";
import { FlipWords } from "@/components/ui/flip-words";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import dynamic from "next/dynamic";
const ComponentC = dynamic(() => import('../components/Hero/DobsInfo'), { ssr: false })
export default function Home() {
  return (
    <main>
      <InitialLoader></InitialLoader>
      <ShootingStars starColor="#ffffff" trailColor="ffffff" minDelay={500} starHeight={2} starWidth={20}></ShootingStars>
      <StarsBackground starDensity={0.0009} twinkleProbability={0.9}></StarsBackground>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-t from-green-200 to-sky-600">
        {/* Main Content */}
        <div className="flex-grow flex font-digital flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 xl:px-32">
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-6 lg:pr-12 order-2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-8xl lg:text-7xl text-white">
                <p>Solana<span className=" font-sans">'</span>s</p>
                <p>Rebel</p>
                <p>Dog</p>
                <FlipWords
                  duration={3000}
                  words={["MEME", "DOBS"]}
                  className="min-h-10"
                />
              </h1>
            </div>
          </div>

          {/* Image and Card Component */}
          <div className="md:w-1/2 md:pl-6 lg:pl-12 order-1 mt-8 md:mt-0">
            <ThreeDCardDemo
              imageUrl="/Dobs-1.jpg"
              altText="Dobs"
              height={800}
              width={800}
            />
          </div>
        </div>
        <InfiniteDobTicker />
      </div>

      <DobsInfo></DobsInfo>
      
      <HowToBuy></HowToBuy>
      <Example></Example>
      <DobMerch></DobMerch>
      {/* <TextGenerateEffectDemo></TextGenerateEffectDemo>
      <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      <AboutCards></AboutCards>
      <ShootingStarsAndStarsBackgroundDemo></ShootingStarsAndStarsBackgroundDemo> */}
    </main>
  );
}
