import React from 'react'
import { ShootingStars } from '../ui/shooting-stars'
import { StarsBackground } from '../ui/stars-background'
import TrailingImage from '../animata/image/trailing-image'

function MemeTrail() {
    return (
        <div className='min-h-screen overflow-hidden flex items-center justify-center relative'>
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
      <TrailingImage></TrailingImage>
        </div>
    )
}

export default MemeTrail