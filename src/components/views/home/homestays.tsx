import React from 'react'
import Link from 'next/link'
import Data from '@/pages/data/airbnb-data.json'
import Image from 'next/image'
import bed from '../../../../public/images/bed.svg'

export default function Homestays() {
  return (
    <div className='lg:w-10/12 mx-auto px-6 py-16'>
      <div className='flex lg:flex-row flex-col lg:items-center space-y-4 lg:space-y-0 items-start justify-between'>
        <h1 className='text-neutral-700 text-[34px] capitalize font-bold leading-[50px]'>
            explore our homestay facilities
        </h1>
        <Link href={'/airbnb'} className={'px-8 py-3 border bg-white rounded-full text-neutral-700 capitalize hover:text-white hover:bg-red-600 ease-in-out duration-500 font-medium'}>Browse All</Link>
      </div>
      <div className='mt-8 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 md:grid-cols-2 lg:max-w-none'>
          {
                                Data.map ((Item) => (

                    
                                  <div className=" mx-3 rounded-sm shadow-md overflow-hidden" key={Item.id}>
                                      <div className="flex-shrink-0 relative h-60">
                                          <Image src={Item.image} alt={Item.name} className="object-cover hover:scale-125 ease-in-out duration-500" fill/>
                                      </div>
                                      <div className="flex-1 bg-white p-6 flex flex-col justify-between rounded-b-lg">
                                          <div className="flex-1 space-y-2">
                                              <Link href={'/#'} className="capitalize font-bold text-neutral-700 tracking-wide text-lg hover:text-red-600 ease-in-out duration-500">
                                                      <h1>{Item.name}</h1>
                                              </Link>
                                              <p className="capitalize text-sm text-gray-600">{Item.description}</p>
                                          </div>
                                          <div className=" flex flex-row justify-between py-8">
                                              <p className="flex flex-row capitalize text-sm text-neutral-700 mb-2"> <span className="text-red-600 mr-2 text-sm">
                                                <svg fill="none" className='w-5 h-5' stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                                                  </svg>
                                                  </span>{Item.guests}</p>
                                              <p className="flex flex-row capitalize text-sm text-neutral-700 mb-2">
                                                  <span className="text-red-600 mr-2 text-sm">
                                                      <Image src={bed} alt={'bedrooms'} style={{width: "18px", height: "18px"}}/>
                                                  </span>{Item.bedrooms}</p>
                                          </div>
                                          <div className="mt-2 border-t w-full border-gray-600 pt-8 md:flex md:items-center md:justify-between"></div>
                                          <div className="flex-1 -mt-2">
                                              <div className="flex flex-row items-center justify-between">
                                                  <h4 className="pb-2 text-neutral-700 font-medium">
                                                      {Item.price}
                                                  </h4>
                                                  <button className="rounded-md px-4 py-2 bg-[#ff3f3f] hover:bg-red-600 ease-in-out duration-500 capitalize text-white">open</button>
                                              </div>
                                          </div>
                                      </div>  
                                  </div>
                                  ))
          }
      </div>
    </div>
  )
}
