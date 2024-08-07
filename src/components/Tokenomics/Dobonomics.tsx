"use client";
import React from "react";
import RingChart from "../animata/graphs/ring-chart";

function Dobonomics() {
    return (
        <div className='min-h-screen font-digital bg-gradient-to-b from-sky-900 to-neutral-900 flex flex-col items-center justify-center relative p-4'>
            {/* Heading at the top */}
            <div className='w-full max-w-4xl mb-12'>
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center tracking-tight font-medium bg-clip-text">
                    Dobonomics
                </h2>
            </div>

            {/* Centered Ring Chart */}
            <div className="flex justify-center items-center mb-12 flex-grow">
                <RingChart
                    rings={[
                        {
                            progress: 60,
                            progressClassName: 'text-sky-600',
                            trackClassName: 'text-sky-600/10'
                        },
                        {
                            progress: 20,
                            progressClassName: 'text-emerald-500',
                            trackClassName: 'text-lime-500/20'
                        },
                        {
                            progress: 10,
                            progressClassName: 'text-teal-400',
                            trackClassName: 'text-teal-400/30'
                        },
                        {
                            progress: 10,
                            progressClassName: 'text-yellow-200',
                            trackClassName: 'text-teal-400/30'
                        }
                    ]}
                />
            </div>

            {/* Quadrants below the ring chart */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-4xl">
                <div className="flex justify-center items-center bg-transparent border-2 text-emerald-500 border-emerald-500 rounded-xl text-xl p-4">
                    Airdrops AND STAKERS
                </div>
                <div className="flex justify-center items-center bg-transparent border-2 border-sky-500 text-sky-500 rounded-xl text-xl p-4">
                    Liquidity Pool
                </div>
                <div className="flex justify-center items-center bg-transparent border-2 border-yellow-500 text-yellow-200 rounded-xl text-xl p-4">
                    Market Makers
                </div>
                <div className="flex justify-center items-center bg-transparent border-2 border-teal-500 text-teal-400 rounded-xl text-xl p-4">
                    Exchanges
                </div>
            </div>
        </div>
    );
}

export default Dobonomics;
