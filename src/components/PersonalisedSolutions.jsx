import React from 'react';

const PersonalisedSolutions = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-[60px] lg:px-[120px] overflow-hidden">
      {/* Complex Background Gradient */}
      <div className="absolute inset-0 bg-[#0A1325] -z-20"></div>
      
      {/* Top Right Magenta Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[80%] bg-[#7B2E7D] blur-[150px] rounded-full pointer-events-none -z-10 opacity-70"></div>
      
      {/* Bottom Left Blue Glow */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[70%] bg-[#12588F] blur-[140px] rounded-full pointer-events-none -z-10 opacity-80"></div>
      
      {/* Bottom Right Cyan/Teal Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-[#A5F1E9] blur-[120px] rounded-full pointer-events-none -z-10 opacity-50"></div>

      <div className="max-w-[1440px] mx-auto z-10 relative">
        <h2 className="text-white font-['Inter'] font-medium text-[36px] md:text-[48px] tracking-normal mb-12">
          Personalised Solutions
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* Left Column - Image */}
          <div className="w-full lg:w-[45%] h-[400px] lg:h-[560px] rounded-[16px] overflow-hidden flex-shrink-0 shadow-lg">
            <img 
              src="/homePage/presonalisedSolutions.jpg" 
              alt="Personalised Solutions" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text and Cards */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center h-full pt-2">
            <p className="text-white font-['Inter'] font-semibold text-[20px] md:text-[24px] leading-[34px] mb-10 w-full lg:w-[95%]">
              Solutions designed for you, and asset management that delivers disciplined performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Card 1 */}
              <div className="bg-[#FCFCFC] rounded-[12px] p-8 shadow-md">
                <h3 className="text-[#24346D] font-['Inter'] font-bold text-[20px] mb-4">
                  Wealth Solutions
                </h3>
                <p className="text-[#24346D] font-['Inter'] font-normal text-[15px] leading-[24px] opacity-80">
                  Independent discretionary and advisory portfolio solutions, aligned to client goals across every market cycle.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FCFCFC] rounded-[12px] p-8 shadow-md">
                <h3 className="text-[#24346D] font-['Inter'] font-bold text-[20px] mb-4">
                  Asset Management
                </h3>
                <p className="text-[#24346D] font-['Inter'] font-normal text-[15px] leading-[24px] opacity-80">
                  Research-led discretionary and allocation strategies with portfolio-as-a-service flexibility.
                </p>
              </div>
            </div>

            <button className="self-start bg-[#8B3A8B] text-white rounded-[32px] px-8 py-3 font-['Inter'] font-medium text-[16px] hover:bg-[#722A72] transition-colors shadow-md">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalisedSolutions;
