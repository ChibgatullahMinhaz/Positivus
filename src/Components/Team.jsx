import React from "react";
import SectionHeading from "./SectionHeading";

const Team = () => {
  const title = "Team";
  const des =
    "Meet the skilled and experienced team behind our successful digital marketing strategies";
  return (
    <section>
      <SectionHeading title={title} des={des} />
    </section>
  );
};

export default Team;
