import React from "react";
import Hero from "../Components/Hero";
import Company from "../Components/Company";
import Service from "./Service";
import Proposal from "../Components/Proposal";

export default function Home() {
  return (
    <>
      <Hero />
      <Company />
      <Service />
      <Proposal />
    </>
  );
}
