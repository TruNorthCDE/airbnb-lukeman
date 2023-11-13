import React from 'react'
import Link from 'next/link'

export default function Banner() {
  return (
    <div>
            <div className="w-full homeBanner2 bg-cover bg-center">
                <div className="bannerOverlay h-96 flex flex-col justify-center text-white">
                    <div className="lg:w-10/12 mx-auto px-6 justify-center max-w-3xl w-full">
                        <div className="xl:text-5xl pt-12 md:text-3xl flex flex-col space-y-12 text-2xl text-center">
                            <h1 className="font-medium capitalize leading-12"> Recharge energy in our unique kenyan retreat in Kenya&apos;s Natural Beauty.</h1>
                            <p className="lg:text-md text-base ">  Rediscover tranquility in the heart of Kenya&apos;s stunning landscapes. Our accommodation facilities are carefully nestled in the beauty of Kenya, offering you a peaceful escape. </p>
                            <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-y-0 justify-center md:space-x-8'>
                            
                                <Link className='bg-[#07286f] py-4 px-8 capitalize rounded-full text-white text-base font-semibold hover:bg-[#1d92ce] ease-in-out duration-500 hover:text-white' href={'/airbnb'}>explore airbnb</Link>
                            
                                <Link className='bg-white capitalize rounded-full py-4 px-8 text-neutral-600 text-base font-semibold hover:bg-[#07286f] ease-in-out duration-500 hover:text-white' href={'/homestays'}>explore homestays</Link>
                        </div>
                        </div>
                    </div>

                </div>
                
            </div>
    </div>
  )
}
