import React from "react";
import proposal from "../assets/Illustration.png";
const Proposal = () => {
  return (
    <section className="my-8 flex justify-between items-center flex-col md:flex-row bg-[#F3F3F3] p-4 rounded-lg">
      <div className="space-y-4 max-w-lg">
        <h1 className="text-2xl font-bold">Let’s make things happen</h1>
        <p>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="bg-[#191A23] hover:bg-white hover:text-black border transition-all duration-500 text-white rounded-2xl p-3 cursor-pointer">
          Get your free proposal
        </button>
      </div>
      <div className="max-w-lg mt-4 sm:mt- ">
        <img src={proposal} alt="proposal image" className="max-w-[250px] lg:max-w-md" />
      </div>
    </section>
  );
};

export default Proposal;
