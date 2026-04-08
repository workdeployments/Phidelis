import React from 'react';

const CompanyIntro = () => {
  return (
    <section className="w-full bg-white py-16 md:py-[100px] px-6 lg:px-[120px]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row overflow-hidden rounded-[16px] shadow-sm">
        
        {/* Left Side - Gradient and Text */}
        <div className="w-full md:w-[45%] lg:w-[42%] bg-gradient-to-br from-[#1C69A2] via-[#2D317D] to-[#3D1453] p-10 md:p-14 lg:p-[72px] flex flex-col justify-center">
          <h2 className="text-white font-['Inter'] font-semibold text-[22px] md:text-[26px] lg:text-[28px] leading-[1.4] tracking-tight mb-8">
            At Phidelis Capital, every decision is crafted towards your objectives.
          </h2>
          <p className="text-white font-['Inter'] font-medium text-[16px] md:text-[18px] lg:text-[19px] leading-[1.5] tracking-tight">
            Guided by research-led insights and technology-supported intelligence, delivered with clarity and purpose.
          </p>
        </div>
        
        {/* Right Side - Image */}
        <div 
          className="w-full md:w-[55%] lg:w-[58%] min-h-[350px] md:min-h-[480px] bg-cover bg-center"
          style={{ backgroundImage: "url('/company/intro-image.jpg')" }}
        >
        </div>
        
      </div>
    </section>
  );
};

export default CompanyIntro;

