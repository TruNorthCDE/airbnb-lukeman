import React from 'react'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../../../../public/images/logo2.png'


export default function WebNav() {

    const [navbar, setNavbar] = useState (false);
    const router = useRouter ();

    const navigation = {
        links: [
            {
                id: 1,
                name: 'home',
                href: '/'
            },
            {
                id: 2,
                name: 'about',
                href: '/about'
            },
            {
                id: 3,
                name:'homestays',
                href: '/homestays'
            },
            {
                id: 4,
                name: 'airbnb',
                href: '/airbnb'
            },
            {
                id: 5,
                name: 'blog',
                href: '/blog'
            },
            {
                id: 6,
                name: 'contacts',
                href: '/contacts'
            }
        ],


    }

    const changeBackground = () => {
        if (window.scrollY >=200) {
            setNavbar (true)
        } else {
            setNavbar (false);
        }
    };

    // window.addEventListener ("scroll", changeBackground);
    useEffect (() => {window.addEventListener ("scroll", changeBackground)})

  return (
    <div className='bg-[#fefefe] rounded-b-xl shadow-md'>
        {/* <div className={navbar ? 'navbar active w-full hidden rounded-full lg:flex' : 'navbar w-full hidden rounded-full lg:flex'}> */}
        <div className='py-6 lg:flex justify-between items-center lg:w-10/12 px-6 mx-auto hidden'>
        <div className='items-center ml-[96px] overflow-hidden'>
                <Link href={'/'} className='flex flex-col items-center'>
                <div className='absolute -mt-[99px]'>
                    <Image src={Logo} alt='' className='relative' style={{height: "200px", width: "300px"}}/>
                </div>
                </Link>

            </div>
             
            <div>
                <nav className='flex items-center space-x-8 items-center'>
                    {navigation.links.map((item)=>(
                        <Link href={item.href} key={item.id} className={router.pathname == item.href ? "text-[#1d92ce] capitalize font-medium" : "hover:text-[#1d92ce] ease-in-out duration-300 text-[#07286f] capitalize font-medium"}>{item.name}</Link>
                    ))}
                </nav>
            </div>
        </div>
    </div>
  )
}