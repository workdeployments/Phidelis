import React from 'react';

const HowWeCreateValue = () => {
  const cards = [
    {
      title: 'Solutions',
      description: 'Tailored strategies for every objective.',
      icon: '/icons/Vector.jpg'
    },
    {
      title: 'Company',
      description: 'Seasoned expertise, united by integrity.',
      icon: '/icons/Layer_1.jpg'
    },
    {
      title: 'Technology',
      description: 'Clarity and control through intelligent tools.',
      icon: '/icons/Isolation_Mode.jpg'
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-[60px] lg:px-[120px]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-[#24346D] font-['Inter'] font-semibold text-[36px] md:text-[48px] tracking-tight mb-12 md:mb-20">
          How We Create Value
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 items-start">
          
          {/* Text Columns */}
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col items-start gap-4">
              <div className="flex items-center justify-center p-2 mb-2">
                <img src={card.icon} alt={card.title} className="w-[64px] h-[64px] object-contain mix-blend-multiply" />
              </div>
              <h3 className="text-[#24346D] font-['Inter'] font-semibold text-[22px] md:text-[24px]">
                {card.title}
              </h3>
              <p className="text-[#24346D] font-['Inter'] font-medium text-[16px] leading-[26px] opacity-80 min-h-[52px]">
                {card.description}
              </p>
              <button 
                className="mt-6 w-[36px] h-[36px] bg-[#24346D] rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                aria-label={`Learn more about ${card.title}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px] text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          ))}

          {/* Image Column */}
          <div className="w-full h-[400px] lg:h-[480px] lg:col-span-1 border border-gray-100 rounded-[20px] overflow-hidden shadow-sm">
            <img 
              src="/homePage/hoeWeCreateValueImg.jpg" 
              alt="How We Create Value" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HowWeCreateValue;
