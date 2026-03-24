import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeHero = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Add entrance animation for text based on existing GSAP usage
    gsap.from('.hero-elem', {
      y: 80,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[800px] flex flex-col items-center justify-center pt-[120px] px-6 gap-[40px] md:gap-[60px]"
    >
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: "url('/homePage/heroImg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 -z-10" />

      {/* Logo in Hero Section */}
      <div className="hero-elem flex items-center justify-center gap-4 mb-2">
        <img src="/navBar/logo.png" alt="PC" className="h-[60px] md:h-[80px] w-auto object-contain" />
        <div className="text-[32px] md:text-[48px] tracking-tight">
          <span className="text-white font-['Inter'] font-medium">Phidelis </span>
          <span className="text-[#3ba3eb] font-['Inter'] font-semibold">Capital</span>
        </div>
      </div>

      {/* Hero Content */}
      <h1 className="hero-elem text-white font-['Inter'] font-medium text-[40px] md:text-[64px] leading-snug md:leading-[66px] tracking-normal text-center w-full whitespace-nowrap">
        Trusted Wealth Stewardship
      </h1>
      
      <p className="hero-elem text-white font-['Inter'] font-light text-[24px] md:text-[32px] md:leading-[66px] tracking-normal text-center w-full max-w-[800px]">
        Built on Integrity and Insight
      </p>

      {/* Get Started Button shown in the design */}
      <div className="hero-elem mt-4">
        <button className="bg-white text-[#24346D] rounded-[32px] px-[32px] py-[16px] font-['Inter'] font-medium text-[16px] md:text-[18px] hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HomeHero;
