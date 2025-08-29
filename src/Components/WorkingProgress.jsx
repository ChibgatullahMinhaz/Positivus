import React from "react";
import SectionHeading from "./SectionHeading";
import Accordion from "./Accordion";

const WorkingProgress = () => {
  const title = "Our Working Process ";
  const des = "Step-by-Step Guide to Achieving Your Business Goals";
  return (
    <section>
      <SectionHeading title={title} des={des} />
      <Accordion />
    </section>
  );
};

export default WorkingProgress;
