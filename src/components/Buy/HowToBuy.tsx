"use client"
import React from 'react'
import BuyContent from './BuyContent'
import { CardHoverEffectDemo } from './test'

function HowToBuy() {
    return (
      <div className='min-h-screen font-digital bg-gradient-to-b from-sky-600 to bg-sky-900'>
      <div className='flex justify-center items-center' >
          <div className="space-y-4 pt-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">How to Unlock Financial Freedom<span className="font-sans">?</span></h2>
            <p className='text-center text-md sm:text-xl md:text-2xl'>Few Clicks To Make IT</p>
          </div>
      </div>
          <CardHoverEffectDemo></CardHoverEffectDemo>
      </div>
    )
}
export default HowToBuy