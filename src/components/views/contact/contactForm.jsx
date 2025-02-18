import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { ScaleLoader } from "react-spinners";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useRouter } from 'next/router';


export default function ContactForm() {

    const Links = {
        social: [
            {
                id:1,
                name: 'Facebook',
                href: '#',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                id:2,
                name: 'Twitter',
                href: '#',
                icon: (props) => (
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50" fill="currentColor" {...props}>
                    <path fill="currentColor" d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                    </svg>
                ),
            },
            {
                id:3,
                name: 'Youtube',
                href: '#',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                id:4,
                name: 'Instagram',
                href: '#',
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
        ]
    }

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSuccess, setIsSuccess] = useState(false);
      const [errorMessage, setErrorMessage] = useState('');
      const router = useRouter();
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            setIsSubmitting(true); //show submitting state
            const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      
            if (response.status === 200) {
              setIsSuccess(true);
              setErrorMessage('');
              setIsSubmitting(false);
              setFormData({
                full_name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
              });
            } else {
              const data = await response.json();
              setErrorMessage('An error occurred while sending the message.');
              setIsSubmitting(false);
            }
          } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred while sending the message.');
            setIsSubmitting(false);
          }
        };
    
        const handleChange = (e) => {
            if (e.target) {
              // For regular input fields
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            } else {
              // For PhoneInput component
              setFormData({
                ...formData,
                phone: e, // e is the phone number value
              });
            }
          };

          if (isSuccess) {
            // Redirect to the success page
            router.push('/successAlert1');
          
            // Return null to prevent rendering the form
            return null;
          }

  return (
    <div className='py-16'>
    <div className='xl:w-10/12 mx-auto px-6 xl:px-0 py-8'>

<div className="container mx-auto">
            <div className="lg:flex">
                <div className="xl:w-2/5 lg:w-2/5 bg-white py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none ">
                    <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-neutral-700 font-bold">Get in Touch</h1>
                        <p className="text-[17px] text-neutral-600 pb-8 leading-relaxed font-normal lg:pr-4">Have questions or need assistance? Our dedicated team is here to help. Reach out to us via the contact form, and we will get back to you promptly. You can also find our contact details and location information for additional inquiries and support.</p>
                        <div className="flex items-center pb-4">
                            <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20"  height="20" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path fill="#07286f" d="M546.704 91.89C486.526 31.584 406.482-1.582 321.229-1.582 145.609-1.583 2.67 141.368 2.67 317.118c0 56.139 14.705 111.05 42.567 159.297L.001 641.595l168.959-44.34c46.595 25.382 99.013 38.835 152.222 38.835h.13C496.944 636.09 640 493.14 640 317.401c0-85.182-33.166-165.179-93.344-225.463l.047-.047zM321.323 582.315c-47.599 0-94.218-12.827-134.895-36.957l-9.697-5.788-100.265 26.257 26.776-97.726-6.272-10.04C70.312 415.965 56.4 367.244 56.4 317.13c0-146.082 118.832-264.96 265.066-264.96 70.713 0 137.328 27.65 187.302 77.622 49.996 50.127 77.493 116.588 77.493 187.42-.118 146.187-118.95 265.066-264.96 265.066l.024.036zM466.541 383.85c-7.913-4.028-47.115-23.233-54.39-25.89-7.276-2.658-12.58-4.028-17.977 4.027-5.268 7.914-20.587 25.89-25.252 31.265-4.666 5.28-9.284 6.035-17.197 2.008-7.914-4.028-33.674-12.426-64.064-39.568-23.634-21.095-39.662-47.221-44.328-55.134-4.665-7.914-.52-12.308 3.532-16.193 3.661-3.544 7.925-9.284 11.941-13.95 4.028-4.665 5.28-7.925 7.925-13.31 2.658-5.28 1.359-9.946-.637-13.95-2.008-4.015-17.977-43.217-24.485-59.185-6.39-15.603-13.063-13.43-17.965-13.701-4.665-.237-9.945-.237-15.2-.237-5.257 0-13.95 1.996-21.225 9.933-7.276 7.914-27.898 27.26-27.898 66.45 0 39.201 28.512 77.009 32.516 82.407 4.027 5.267 56.162 85.784 136.029 120.238 18.98 8.161 33.803 13.063 45.355 16.854 19.098 6.024 36.425 5.15 50.126 3.13 15.32-2.256 47.115-19.229 53.788-37.831 6.662-18.615 6.662-34.536 4.666-37.831-1.89-3.544-7.158-5.504-15.201-9.58l-.06.048z"/></svg>
                            </div>
                            {/* <p className="pl-4 text-neutral-600 text-base">abcd@gmail.com</p> */}
                            <Link href="https://wa.me/+254719548363" className="pl-4 leading-6 text-neutral-700 ">+254 719 548 363</Link>
                        </div>
                        <div className="flex pb-4 items-center"> 
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#07286f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                            </div>
                            <Link href={"tel://+254115600233"}  className="pl-4 text-neutral-600 text-base">+254 115 600 233</Link>
                        </div>
                        <div className="flex items-center pb-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#07286f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <Link href={"mailto:info@lukemanbnb.com"} className="pl-4 text-neutral-600 text-base">info@lukemanbnb.com</Link>
                        </div>


                        <div className='space-y-2 pb-8'>
                            <h5 className={'capitalize font-semibold text-neutral-600 text-lg'}>opening hours</h5>
                            <p className='text-neutral-600 text-base'> We operate around the clock, <br /> 24 hours a day, 7 days a week. </p>
                            {/* <p className='text-neutral-600 text-base'><strong>Time:</strong> 08:00 - 19:00</p> */}
                        </div>
                        <div className={'flex items-center space-x-4'}>
                            {Links.social.map((item) => (
                                <Link href={item.href} target={'_blank'} key={item.id} className={'h-10 w-10 bg-white rounded-full text-[#07286f] flex items-center justify-center hover:bg-[#07286f] hover:text-white ease-in-out duration-300'}>
                                    <item.icon className={'h-8 w-8'} aria-hidden={'true'}/>
                            </Link>
                            ))}
                        </div>

                       
                    </div>
                </div>
                <div className="xl:w-3/5 lg:w-3/5 bg-white h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                <div className='py-24  justify-center text-center items-center'>
                    <form onSubmit={handleSubmit} id="contact" className="bg-white border py-6 px-8 rounded-lg">
                        <h1 className="text-2xl text-neutral-600 font-bold mb-6">Leave your Message</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="full_name" value={formData.full_name} onChange={handleChange} name="full_name" type="text" className="focus:outline-none focus:border focus:border-[#0067DA] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="focus:outline-none focus:border focus:border-[#0067DA] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <PhoneInput className='items-center h-10' name="visitor_phone" inputProps={{required: true, autoFocus: true, className: "focus:outline-none focus:border focus:border-[#0067DA] font-normal w-64 h-10 flex items-center pl-12  text-sm border-neutral-300 rounded border"}} value={formData.phone} onChange={handleChange} defaultCountry='ke'/>
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label htmlFor="subject" className="text-neutral-600 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Subject
                                    </label>
                                    <input required id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} className="focus:outline-none focus:border focus:border-[#0067DA] font-normal w-64 h-10 flex items-center pl-3 text-sm border-neutral-300 rounded border" placeholder/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col pb-4">
                                <label className="text-sm font-semibold text-neutral-600 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea placeholder  name="message" value={formData.message} onChange={handleChange} className="border-neutral-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-[#0067DA]" rows={8} id="message" defaultValue={""} />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="focus:outline-none border-2 border-stone-500 text-stone-500 hover:bg-white ease-in-out duration-300 hover:text-[#07286f] hover:border-[#07286f] rounded px-8 py-3 text-sm leading-6">
                                 {isSubmitting ? (    <div className="flex items-center space-x-3 justify-center"> <span className='text-[#07286f]'>Sending</span>  <ScaleLoader height={10} color="#07286f"  /></div>) : 'Send a Message'}
                            </button>
                            <div className='w-full mx-auto items-center text-center py-4 text-red-500 font-bold'>{errorMessage}</div>
                        </div>
                        
                    </form>
                    
                </div>
                </div>
            </div>
        </div>
        {/* <div className='py-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.8229255644073!2d38.56330905231441!3d-3.393365649918491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18392960cce3241d%3A0xa382038230ab70e2!2sMAWENI%20PLAZA!5e0!3m2!1sen!2ske!4v1696249597424!5m2!1sen!2ske" width="100%" height="500" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
    </div>
    </div>
  )
}