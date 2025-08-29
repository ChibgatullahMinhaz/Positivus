import React from "react";
import Card from "../Components/UI/Card";
import seo from "../assets/service/seo.png";
import payperclick from "../assets/service/Illustration.png";
import socail from "../assets/service/social.png";
import email from "../assets/service/email.png";
import content from "../assets/service/content.png";
import analytics from "../assets/service/traking.png";

import arrow from "../assets/Icon/Arrow.png";
const cardData = [
  {
    image: seo,
    title: "Search engine",
    titl2: "optimization",
    icon: arrow,
    btnText: "Learn more",
    bgColor: "bg-[#F3F3F3]",
  },
  {
    image: payperclick,
    titl2: "advertising",
    title: "Pay-per-click",
    icon: arrow,
    btnText: "Learn More",
    bgColor: "bg-[#B9FF66]",
  },
  {
    image: socail,
    title: "Social Media",
    titl2: "Marketing",
    icon: arrow,
    btnText: "Learn More",
    bgColor: "bg-[#191A23]",
  },
  {
    image: email,
    title: "Email",
    titl2: "Marketing",
    icon: arrow,
    btnText: "Learn More",
    bgColor: "bg-[#F3F3F3]",
  },
  {
    image: content,
    title: "Content",
    titl2: "Creation",
    icon: arrow,
    btnText: "Learn More",
    bgColor: "bg-[#B9FF66]",
  },
  {
    image: analytics,
    title: "Analytics and ",
    titl2: "Tracking",
    icon: arrow,
    btnText: "Learn More",
    bgColor: "bg-[#191A23]",
  },
];
const Service = () => {
  return (
    <section className="my-6">
      <div className="flex flex-col md:flex-row  space-x-7 items-center my-4">
        <h1 className="bg-yellow-200 rounded-lg text-black font-bold p-2">
          Services
        </h1>
        <p className="max-w-md my-4 sm:my-0">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      {/* cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-3 my-6">
        {cardData.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </section>
    </section>
  );
};

export default Service;
