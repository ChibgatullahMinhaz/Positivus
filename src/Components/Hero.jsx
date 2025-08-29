import React from "react";
import heroImage from "../assets/hero.png";
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between">
      {/* text section */}
      <section className="my-7">
        <div className="text-center">
          <div className="md:max-w-md max-w-full flex flex-col justify-start text-left md:items-start items-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Navigating the digital landscape for success
            </h1>
            <section className="md:max-w-md max-w-full block sm:hidden">
              <img src={heroImage} alt="hero illustration" />
            </section>
            <p className="py-6">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <button className="bg-[#191A23] hover:bg-white hover:text-black border transition-all duration-500 text-white rounded-2xl p-3 cursor-pointer">
              Book a consultation
            </button>
          </div>
        </div>
      </section>

      {/* illustration section */}
      <section className="md:max-w-md max-w-full hidden sm:block">
        <img src={heroImage} alt="hero illustration" />
      </section>
    </section>
  );
};

export default Hero;
