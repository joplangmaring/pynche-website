"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from '../../public/Logo.png';
import Link from "next/link";


import { toast, Toaster } from "react-hot-toast";

import Loading from "./Loading";



const Footer = () => {

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true)
      try {
          const res = await fetch('/api/send-email', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
          });

          const data = await res.json();
          if (data.success) {
              toast.success("Email submitted successfully!");
          } else {
              toast.error('Error submitting email. Please try again.');
          }
          setIsLoading(false)
      } catch (error) {
          console.error('Error submitting email:', error);
          toast.error('Error submitting email. Please try again.');
          setIsLoading(false)
      }
  };

  if(isLoading) return <Loading />
  
  return (
    <footer className="bg-white py-8 px-4 md:py-16 md:px-8">
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="px-5">
          <h2 className="text-xl md:text-2xl font-extrabold text-green-900">
            
          </h2>
          <ul className="mt-4 py-6 md:py-12 font-bold space-y-2 text-green-900">
            <li className="lg:text-base text-sm"><Link href='/about'>About Us</Link></li>
            {/* <li className="lg:text-base text-sm">Our Mission</li> */}
            <li className="lg:text-base text-sm"><Link href='/events'>Past Events</Link></li>
            <li className="lg:text-base text-sm"><Link href='/events'>Upcoming Events</Link></li>
            <li className="lg:text-base text-sm"><Link href='/contact'>Contact Us</Link></li>
            {/* <li className="lg:text-base text-sm">FAQ</li> */}
          </ul>
          <ul className="mt-4 space-y-2 font-bold text-green-900">
            <li className="lg:text-base text-sm">Privacy Policy</li>
            <li className="lg:text-base text-sm">Terms & Conditions</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start px-5 mt-5">
          <h2 className="text-2xl text-center lg:text-2xl font-semibold text-green-900">
            Ready to subscribe to our Newsletter?
          </h2>
          <div className="mt-8 md:mt-16 flex flex-col md:flex-row items-center md:items-start justify-center gap-4 w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-green-900 focus:outline-none active:outline-none text-xs py-2 w-full md:w-auto"
            />
            <button onClick={handleSubmit} className="bg-white border border-black rounded-2xl font-semibold text-black h-10 px-6 py-2 cursor-pointer mt-4 md:mt-0">
              Sign up
            </button>
          </div>
          <ul className="mt-8 flex lg:flex-col flex-row items-center justify-center lg:items-start gap-4 md:mt-20 text-sm md:text-base font-bold text-green-900">
            <li className=""><Link href='https://www.instagram.com/pyn__che' target="_blank" rel="noreferrer noopener">Instagram</Link></li>
            <li className="">X</li>
            <li className="">Facebook</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <Image
            src={Logo}
            alt="Logo"
            className="w-16 h-16 mt-8 md:mt-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
