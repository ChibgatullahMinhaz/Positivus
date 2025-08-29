import React from "react";
import Hero from "../Components/Hero";
import Company from "../Components/Company";
import Service from "./Service";
import Proposal from "../Components/Proposal";
import CaseStudies from "../Components/CaseStudies";
import WorkingProgress from "../Components/workingProgress";
import Team from "../Components/Team";
import Testimonials from "../Components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <Service />
      <Proposal />
      <CaseStudies />
      <WorkingProgress />
      <Team />
      <Testimonials />
    </>
  );
}
