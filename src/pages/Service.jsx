import React from "react";
import Card from "../Components/UI/Card";

const cardData = [
  {
    image: "/sdfdf",
    title: "title",
    icon: "icon",
    btnText: "btn-text",
    bgColor: "bg-yellow-500",
  },
  {
    image: "/sdfdf",
    title: "title",
    icon: "icon",
    btnText: "btn-text",
    bgColor: "bg-yellow-500",
  },
  {
    image: "/sdfdf",
    title: "title",
    icon: "icon",
    btnText: "btn-text",
    bgColor: "bg-yellow-500",
  },
  {
    image: "/sdfdf",
    title: "title",
    icon: "icon",
    btnText: "btn-text",
    bgColor: "bg-yellow-500",
  },
  {
    image: "/sdfdf",
    title: "title",
    icon: "icon",
    btnText: "btn-text",
    bgColor: "bg-yellow-500",
  },
  {
    image: "/sdfdf",
    title: "title",
    icon: "icon",
    btnText: "btn-text",
    bgColor: "bg-yellow-500",
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
      <section className="grid grid-cols-1 md:grid-cols-2 max-w-lg mx-auto gap-3">
        {cardData.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </section>
    </section>
  );
};

export default Service;
