import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section",
        // markers: true,
        start: "-100vh 45%",
        end: "80% 75%",
        scrub: 1,
      },
    });

    tl.to("#secTitles > span:nth-child(1)", {
      width: "100%",
    });

    tl.to("#secTitles > span:nth-child(2)", {
      width: "100%",
      delay: -0.4,
    });
  });

  return (
    <>
      <div id="section" className="flex flex-col w-full h-auto mt-5 mb-5 group">
        <div className="text-xl text-zinc-400 font-opensans font-medium underline transition-all">
          (01) Features
        </div>
        <div className="relative">
          <h2 className="max-w-[13em] mb-8 text-7xl text-left font-merriweather font-semibold leading-snug text-slate-300">
            <span className="block w-full">Key Features to Enhance</span>
            <span className="block w-full">Your Dating Experience</span>
          </h2>
          <h2
            id="secTitles"
            className="absolute top-0 left-0 mb-8 text-7xl text-left font-merriweather font-semibold leading-snug"
          >
            <span className="block w-0 whitespace-nowrap overflow-hidden">
              Key Features to Enhance
            </span>
            <span className="block w-0 whitespace-nowrap overflow-hidden">
              Your Dating Experience
            </span>
          </h2>
        </div>

        <div className="self-end flex justify-end items-center gap-4">
          <div className="flex flex-col gap-2 bg-white w-[22%] h-auto min-h-[22.5em] p-5 border-2 border-white rounded-3xl transition-all hover:border-[#E91E63] hover:text-[#E91E63] hover:-translate-y-8">
            <i className="ri-heart-fill text-2xl text-[#E91E63]"></i>
            <h3 className="text-xl font-semibold font-merriweather">
              Matching
            </h3>
            <p className="text-base">
              Our advanced matching algorithm ensures you find compatible
              partners, enhancing the likelihood of meaningful connections. By
              analyzing interests, values and lifestyle choices, we match you
              with individuals who share your vision for the future. Start your
              journey towards finding a compatible life partner today.
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-white w-[22%] h-auto min-h-[22.5em] p-5 border-2 rounded-3xl transition-all border-[#007BFF] text-[#007BFF] -translate-y-8">
            <i className="ri-message-3-fill text-2xl text-[#007BFF]"></i>
            <h3 className="text-xl font-semibold font-merriweather">
              Chatting
            </h3>
            <p className="text-base">
              Our secure and user-friendly chat feature allows you to
              communicate freely and get to know potential matches in a safe
              environment. With real-time messaging and intuitive design, our
              chat system makes it easy to connect and build rapport Enjoy
              meaningful conversations that can lead to lasting relationships.
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-white w-[22%] h-auto min-h-[22.5em] p-5 border-2 border-white rounded-3xl transition-all hover:border-[#4CAF50] hover:text-[#4CAF50] hover:-translate-y-8">
            <i className="ri-shield-check-fill text-2xl text-[#4CAF50]"></i>
            <h3 className="text-xl font-semibold font-merriweather">Safety</h3>
            <p className="text-base">
              We prioritize your safety with robust verification processes and
              privacy settings, ensuring your personal information remains
              protected. Our team works tirelessly to create a safe space where
              you can interact confidently. <br></br>Trust Parinay.com to
              safeguard your journey towards finding true love.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
