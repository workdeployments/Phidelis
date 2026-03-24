import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#24346D] py-[22px] px-6 lg:px-[120px] fixed top-0 left-0 right-0 z-50 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img src="/navBar/logo.png" alt="PC" className="h-[40px] w-auto object-contain" />
        <div className="text-xl md:text-[22px] tracking-tight">
          <span className="text-white font-['Inter'] font-medium">Phidelis </span>
          <span className="text-[#3ba3eb] font-['Inter'] font-semibold">Capital</span>
        </div>
      </div>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-10">
        {['Solutions', 'Company', 'Technology'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item.toLowerCase()}`} 
              className="text-white font-['Inter'] font-normal text-[16px] leading-[100%] tracking-normal hover:text-gray-300 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <div className="hidden md:block">
        <button className="text-white border border-white rounded-[32px] px-[28px] py-[12px] font-['Inter'] font-normal text-[16px] leading-[100%] hover:bg-white hover:text-[#24346D] transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
