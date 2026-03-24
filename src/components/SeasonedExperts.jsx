import React from 'react';

const SeasonedExperts = () => {
  const teamMembers = [
    '/people/p1.png',
    '/people/p2.png',
    '/people/p3.png',
    '/people/p4.png',
    '/people/p5.png',
    '/people/p6.png',
  ];

  return (
    <section className="w-full bg-[#2A3A6A] py-24 px-6 md:px-[60px] lg:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-white font-['Inter'] font-medium text-[36px] md:text-[42px] lg:text-[46px] tracking-normal mb-16 lg:mb-20">
          Seasoned Experts, Trusted Advisors
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column - Team Avatars */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 max-w-[500px]">
              {teamMembers.map((img, idx) => (
                <div key={idx} className="flex justify-center">
                  <div className="w-[110px] h-[110px] md:w-[135px] md:h-[135px] rounded-full bg-white overflow-hidden shadow-sm flex items-center justify-center">
                    <img 
                      src={img} 
                      alt={`Team Member ${idx + 1}`} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text Block */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-2 lg:pt-6">
            <div className="w-full h-px bg-white/30 mb-10"></div>
            <p className="text-white font-['Inter'] font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[36px] tracking-normal mb-12 max-w-[600px]">
              With decades of experience in private banking, investments, and wealth stewardship, we are a team united by integrity, diligence, and proven global expertise.
            </p>
            <button className="self-start bg-white text-[#2A3A6A] rounded-[32px] px-8 py-3 font-['Inter'] font-medium text-[16px] hover:bg-gray-100 transition-colors shadow-sm">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonedExperts;
