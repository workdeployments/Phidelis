import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const DailyMarketInsight = () => {
  const containerRef = useRef(null);

  const teamMembers = ["/people/p1.png", "/people/p2.png", "/people/p3.png"];

  useGSAP(
    () => {
      // Title
      gsap.from(".se-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Avatars grid staggering
      gsap.from(".se-avatar", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out", // Removed back.out to keep it professional and consistent
        scrollTrigger: {
          trigger: ".se-avatars-grid",
          start: "top 80%",
        },
      });

      // Text block sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".se-text-block",
          start: "top 80%",
        },
      });

      tl.from(".se-line", {
        width: 0,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".se-desc",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".se-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#2A3A6A] py-24 px-6 md:px-[20px] lg:px-20 overflow-hidden"
    >
      <div className=" relative max-w-[1440px] mx-auto bg-[#2A4781] border border-0 rounded-3xl p-10 md:p-16 lg:p-20 grid-cols-2 grid max-w-[1200px] mx-auto se-text-block">
        <div className="flex flex-col items-start">
          <div className="se-title text-white font-['Inter'] font-medium text-[36px] md:text-[42px] lg:text-[40px] tracking-normal mb-6 lg:mb-10">
            Daily Market Insights, Delivered
          </div>
          <div className="se-desc text-white font-['Inter'] font-normal text-[15px] md:text-[16px] leading-[28px] opacity-90 max-w-[540px] mb-12">
            Stay ahead with Phidelis Capital’s daily reports on markets, trends,
            and opportunities.
          </div>
          <button className="se-btn self-start bg-white text-[#2A3A6A] rounded-[32px] px-8 py-3 font-['Inter'] font-medium text-[16px] hover:bg-gray-100 transition-colors shadow-sm">
            Follow Us on Linkedin
          </button>
        </div>
        <div className="w-[30%] absolute top-[-5rem] right-20">
          <img src="/homePage/dailyMarketInsights.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default DailyMarketInsight;
