import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-20 px-6 md:px-[60px] lg:px-[120px] bg-linear-to-r from-[#4A2D5C] via-[#1E305C] to-[#1F546D]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-12 text-white font-['Inter']">
        
        {/* Logo Column */}
        <div className="shrink-0 md:w-1/4">
          <div className="flex items-center gap-3">
            <img src="/navBar/logo.png" alt="Phidelis Capital Logo" className="h-[40px] w-auto object-contain" />
            <div className="text-[20px] md:text-[24px] tracking-tight">
              <span className="font-medium">Phidelis </span>
              <span className="text-[#3ba3eb] font-semibold">Capital</span>
            </div>
          </div>
        </div>

        {/* Address & Contact */}
        <div className="flex flex-col gap-10 md:w-1/4">
          <div className="font-medium text-[16px] leading-[30px]">
            <p>12 Marina View,</p>
            <p>#11-21, Asia Square 2,</p>
            <p>Singapore, 018961</p>
          </div>
          
          <div className="font-medium text-[14px] leading-[30px] opacity-90">
            <p>management@phideliscapital.com</p>
            <p>careers@phideliscapital.com</p>
            <p className="font-semibold text-[15px] mt-4">+65 12345678</p>
          </div>
        </div>

        {/* Links Column */}
        <div className="flex flex-col justify-start md:w-1/5">
          <ul className="flex flex-col gap-[16px] font-medium text-[14px] opacity-90">
            <li><a href="#technology" className="hover:text-gray-300 transition-colors">Technology</a></li>
            <li><a href="#solutions" className="hover:text-gray-300 transition-colors">Solutions</a></li>
            <li><a href="#company" className="hover:text-gray-300 transition-colors">Company</a></li>
            <li><a href="#get-in-touch" className="hover:text-gray-300 transition-colors">Get in Touch</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Copyright and Arrow Column */}
        <div className="flex flex-col justify-between items-end md:w-1/4 shrink-0">
          <button 
            onClick={scrollToTop}
            className="w-[48px] h-[48px] rounded-full bg-[#8B3A8B] flex items-center justify-center hover:bg-[#722A72] transition-colors shadow-sm"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[20px] h-[20px] text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          </button>
          
          <div className="font-normal text-[13px] opacity-70 mt-12 md:mt-0 pb-1">
            © Phidelis Capital Singapore
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
