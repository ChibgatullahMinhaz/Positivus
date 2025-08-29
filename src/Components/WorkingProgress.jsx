import React from "react";
import SectionHeading from "./SectionHeading";

const WorkingProgress = () => {
  const title = "Our Working Process ";
  const des = "Step-by-Step Guide to Achieving Your Business Goals";
  return (
    <section>
      <SectionHeading title={title} des={des} />
    </section>
  );
};

export default WorkingProgress;
