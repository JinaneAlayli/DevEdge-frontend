import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-[#27273D] text-white py-6 ">
      <div className=" px-[160px] container  flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-20 gap-6 md:gap-10">
        
        <div className="flex flex-col items-center md:items-start">
          <Image src="/logo.svg" alt="DEVEDGE Logo" width={250} height={60} />
          <div className="mt-2 text-center md:text-left">
            <p>It's more than a website.</p>
            <p>It's your future.</p>
          </div>
        </div>
 
        <div className="flex flex-col md:flex-row justify-start items-start flex-1 space-y-6 md:space-y-0 md:space-x-20">
        
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-xl mb-2">Headquarters</h2>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p>Beirut, Lebanon</p>
              <p>info@DevEdge.com</p>
              <p>LB: +961 xxx xxx</p>
            </div>
          </div>
 
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xl mb-2">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/#services" className="hover:text-gray-300">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-gray-300">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
 
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-xl mb-2">Social Media</h3>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
              <a href="#" aria-label="WhatsApp" className="hover:text-gray-300"><i className="fab fa-whatsapp"></i></a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;