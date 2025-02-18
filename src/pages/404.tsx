import React from "react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Error10: React.FC = () => {
    
    const router = useRouter();

    // Redirect to the home page after 5 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        router.push('/');
      }, 5000);
  
      return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
        <Head>
        <link rel="icon" href="/images/Logo/lukemanLogo.png" type="image/png" /> 
        </Head>
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <Image className="hidden lg:block" src="https://i.ibb.co/v30JLYr/Group-192-2.png" alt="" width={800} height={800}/>
                <Image className="hidden md:block lg:hidden" src="https://i.ibb.co/c1ggfn2/Group-193.png" alt="" width={800} height={800}/>
                <Image className="md:hidden" src="https://i.ibb.co/8gTVH2Y/Group-198.png" alt="" width={800} height={800}/>
            </div>
            <div className="w-full lg:w-1/2">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-neutral-700">Looks like you have found the doorway to the great nothing</h1>
                <p className="py-4 text-base text-neutral-800">The content you are looking for does not exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-base text-neutral-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-neutral-600 text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-opacity-50"> <Link href={'/'}>Go back to Homepage</Link></button>
            </div>
        </div>
        </>
    );
};

export default Error10;
