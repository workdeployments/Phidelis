import React from 'react';

const strategies = [
  {
    title: 'Equity\nStrategies',
    desc: 'Capturing growth opportunities across global developed and emerging markets.'
  },
  {
    title: 'Fixed Income\nStrategies',
    desc: 'Providing stability, diversification, and steady income streams.'
  },
  {
    title: 'Alternative\nStrategies',
    desc: 'Enhancing portfolio diversification through alternative assets.'
  }
];

const SolutionsAssetManagement = () => {
  return (
    <section className="w-full bg-[#24346D] py-20 px-6 lg:px-[120px] pb-32">
      <div className="max-w-[1240px] mx-auto">

        {/* Header Section */}
        <div className="mb-14">
          <h2 className="text-white font-['Inter'] font-semibold text-[32px] md:text-[40px] leading-tight mb-6 tracking-tight">
            Asset Management That Delivers Disciplined Performance
          </h2>
          <p className="text-white font-['Inter'] font-medium text-[16px] md:text-[18px] leading-[1.6] max-w-4xl">
            Phidelis Capital applies a disciplined, research-driven approach to bespoke family office asset management — building portfolios with prudence, resilience, and long-term value creation.
          </p>
        </div>

        {/* 4-Column Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

          {/* 3 Strategy Cards */}
          {strategies.map((strategy, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] rounded-[16px] p-8 md:p-10 flex flex-col justify-start shadow-md hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-[#1A2552] font-['Inter'] font-semibold text-[22px] md:text-[24px] leading-[1.3] mb-6 tracking-tight whitespace-pre-line">
                {strategy.title}
              </h3>
              <p className="text-[#3b4b8f] font-['Inter'] font-medium text-[15px] leading-[1.6]">
                {strategy.desc}
              </p>
            </div>
          ))}

          {/* 4th Column Image */}
          <div className="rounded-[16px] overflow-hidden max-h-[250px] xl:min-h-full shadow-md bg-white">
            <img
              src="/solutions/solutionsassetmanagement.jpg"
              alt="Singapore Cityscape"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default SolutionsAssetManagement;
