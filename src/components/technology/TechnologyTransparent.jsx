import React from 'react';

const TechnologyTransparent = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-[120px]">
      <div className="max-w-[1240px] mx-auto">

        {/* Title */}
        <h2 className="text-[#1A2552] font-['Inter'] font-semibold text-[32px] md:text-[40px] leading-tight mb-10 tracking-tight">
          Transparent, Digital, Calibrated
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[350px]">

          {/* Left Image Block */}
          {/* Using a placeholder gradient or placeholder image until Figma API restores access to the exact image node */}
          <div
            className="w-full lg:w-[65%] rounded-[12px] overflow-hidden min-h-[300px] shadow-sm relative bg-gray-200 bg-cover bg-center"
            style={{ backgroundImage: "url('/technology/technologytransparentsecton.jpg')" }}
          >
            {/* Visual cue that image is temporary */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
          </div>
          {/* Right Purple Box */}
          <div className="w-full lg:w-[35%] bg-[#7C2D84] rounded-[12px] p-10 md:p-14 flex items-center justify-center shadow-md">
            <p className="text-white font-['Inter'] font-semibold text-[20px] md:text-[24px] leading-[1.4] tracking-tight">
              Continuous monitoring and analytics provide control, foresight, and measurable transparency.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechnologyTransparent;
