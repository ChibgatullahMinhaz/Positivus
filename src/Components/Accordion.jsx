import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: "Continual Improvement",
      content:
        "We believe in ongoing refinement. Our strategies are consistently analyzed and improved to ensure your digital presence stays ahead of the competition.",
    },
    {
      title: "Reporting and Communication",
      content:
        "Transparency is key. We provide regular performance reports and maintain open communication to keep you updated on progress and results.",
    },
    {
      title: "Monitoring and Optimization",
      content:
        "Our team closely monitors campaigns and optimizes them in real-time to maximize effectiveness, ROI, and customer engagement.",
    },
    {
      title: "Implementation",
      content:
        "From strategy to execution, we implement tailored solutions designed to achieve your business goals efficiently.",
    },
    {
      title: "Research and Strategy Development",
      content:
        "We conduct in-depth market and competitor research to create data-driven strategies that give your business a competitive edge.",
    },
    {
      title: "Consultation",
      content:
        "Our experts provide guidance and strategic advice to help you make informed decisions and build long-term success.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-10">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          {/* Header */}
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center py-4 px-6 text-left rounded-t-2xl font-semibold text-lg transition-colors 
              ${activeIndex === index ? "bg-yellow-300" : "hover:bg-gray-100"}`}
          >
            {item.title}
            <span className="text-xl">
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* Content */}
          <div
            className={`px-6 overflow-hidden transition-all duration-500 bg-[#b9ff66] rounded-b-2xl ease-in-out ${
              activeIndex === index ? "max-h-40 py-2" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 ">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
