import React from "react";
import amazon from "../assets/company Logo/amazon.png";
import company from "../assets/company Logo/Company.png";
import hubspot from "../assets/company Logo/hubspot.png";
import netflix from "../assets/company Logo/netflix.png";
import notion from "../assets/company Logo/notion.png";
import zoom from "../assets/company Logo/zoom.png";
const Company = () => {
  return (
    <section className="flex flex-wrap my-6 justify-around">
      <img src={amazon} alt="amazon company logo image" />
      <img src={company} alt="amazon company logo image" />
      <img src={hubspot} alt="amazon company logo image" />
      <img src={netflix} alt="amazon company logo image" />
      <img src={notion} alt="amazon company logo image" />
      <img src={zoom} alt="amazon company logo image" />
    </section>
  );
};

export default Company;
