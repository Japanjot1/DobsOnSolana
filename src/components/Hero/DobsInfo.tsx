import React from 'react';
import BoldCopy from '../animata/text/bold-copy';
import TiltedCover from '../animata/image/tilted-cover';

const DobsInfo = () => {
  return (
    <div className="font-digital min-h-screen bg-gradient-to-b from-green-200 to-sky-600 flex flex-col items-center p-4">
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6">
        <BoldCopy
          text="Who is Dobs"
          backgroundTextClassName="font-digital text-white/30"
          className="font-digital"
        />
      </div>
      <TiltedCover
        image={{
          alt: 'Statue of Liberty',
          src: '/DobsLogo.png',
        }}
      >
        <div className="p-8 md:p-12 lg:p-16">
          <p className="leading-relaxed text-xl sm:text-xl md:text-2xl lg-text-2xl text-white">
            DOBS is a <span className='text-sky-600'>Legendary</span> character within the Digital world of Solana <span className='font-sans'>,</span> known as the <span className='text-sky-600'>Guardian of Trust</span><span className='font-sans'>.</span> He embodies integrity<span className='font-sans'>,</span><span className='text-sky-600'> transparency<span className='font-sans'>,</span> and community </span> protection<span className='font-sans'>,</span> ensuring fairness in all transactions<span className='font-sans'>.</span> DOBs' unwavering <span className='text-sky-600'>dedication</span> thrives and conflicts are peacefully resolved<span className='font-sans'>,</span> making him a referred figure in <span className='text-sky-800'>Solana<span className='font-sans'>'</span>s history</span><span className='font-sans'>.</span>
          </p>
        </div>
      </TiltedCover>
    </div>
  );
};

export default DobsInfo;
