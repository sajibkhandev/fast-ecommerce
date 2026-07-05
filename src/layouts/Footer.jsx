import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Image from '../components/Image'
import Logo from '../assets/footerlogo.png'
import { FiSearch } from 'react-icons/fi'
import ListItem from '../components/ListItem'

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans pt-20 pb-6 px-6 md:px-16 lg:px-24 select-none">
      {/* Main Footer Links Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start mb-16">
        
        {/* Column 1: Exclusive / Subscribe */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-wider">Exclusive</h2>
          <h3 className="text-xl font-medium">Subscribe</h3>
          <p className="text-gray-300 text-sm">Get 10% off your first order</p>
          <div className="relative max-w-[220px]">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-black text-gray-400 placeholder-gray-600 border border-white rounded px-4 py-2 pr-10 text-sm focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-white/40 focus:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition-all duration-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 hover:scale-110 transition-all duration-300">
              {/* Inline Send Icon */}
              <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Support</h2>
          <address className="not-italic text-gray-300 text-sm leading-relaxed max-w-[200px]">
            111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.
          </address>
          <p className="text-gray-300 text-sm">
            <a href="mailto:exclusive@gmail.com" className="hover:text-gray-400 hover:underline transition-all duration-300">
              exclusive@gmail.com
            </a>
          </p>
          <p className="text-gray-300 text-sm">
            <a href="tel:+88015888889999" className="hover:text-gray-400 hover:underline transition-all duration-300">
              +88015-88888-9999
            </a>
          </p>
        </div>

        {/* Column 3: Account */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Account</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#account" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">My Account</a></li>
            <li><a href="#login" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Login / Register</a></li>
            <li><a href="#cart" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Cart</a></li>
            <li><a href="#wishlist" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Wishlist</a></li>
            <li><a href="#shop" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Shop</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Quick Link</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#privacy" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Privacy Policy</a></li>
            <li><a href="#terms" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Terms Of Use</a></li>
            <li><a href="#faq" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">FAQ</a></li>
            <li><a href="#contact" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Column 5: Download App */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Download App</h2>
          <p className="text-gray-400 text-xs font-medium">Save $3 with App New User Only</p>
          
          {/* QR Code and App Badges Layout */}
          <div className="flex items-center gap-3">
            {/* Fake QR Code Visual */}
            <div className="bg-white p-1.5 rounded-sm w-20 h-20 flex items-center justify-center shrink-0 shadow-md hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
                <path d="M2 2h6v6H2V2zm1 1v4h4V3H3zm13-1h6v6h-6V2zm1 1v4h4V3h-4zM2 16h6v6H2v-6zm1 1v4h4v-4H3zm15-4h2v2h-2v-2zm-3 2h2v2h-2v-2zm3 2h2v2h-2v-2zm-6 2h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-9-4h2v2H9v-2zm3 2h2v2h-2v-2zm-3 2h2v2H9v-2zm6-6h2v2h-2v-2zm-3 2h2v2h-2v-2zm3 2h2v2h-2v-2zM5 5h0v0H5V5zm14 0h0v0h0V5zM5 19h0v0H5v0z" />
              </svg>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex flex-col gap-2">
              <a href="#google-play" className="block border border-zinc-700 rounded bg-black px-2 py-1 hover:border-white hover:bg-zinc-900 transition-all duration-300 max-w-[110px]">
                <div className="text-[8px] text-gray-400 uppercase leading-none">Get it on</div>
                <div className="text-xs font-bold text-white leading-tight">Google Play</div>
              </a>
              <a href="#app-store" className="block border border-zinc-700 rounded bg-black px-2 py-1 hover:border-white hover:bg-zinc-900 transition-all duration-300 max-w-[110px]">
                <div className="text-[8px] text-gray-400 leading-none">Download on the</div>
                <div className="text-xs font-bold text-white leading-tight">App Store</div>
              </a>
            </div>
          </div>

          {/* Social Icons (Built-in SVG format) */}
          <div className="flex items-center gap-6 pt-2 text-white">
            {/* Facebook */}
            <a href="#facebook" className="hover:text-blue-500 hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            
            {/* Twitter */}
            <a href="#twitter" className="hover:text-sky-400 hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#instagram" className="hover:text-pink-500 hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            
            {/* Linkedin */}
            <a href="#linkedin" className="hover:text-blue-400 hover:-translate-y-1 transition-all duration-300">
              <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-zinc-900 pt-6 text-center">
        <p className="text-zinc-600 text-sm">
          &copy; Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}

  

export default Footer