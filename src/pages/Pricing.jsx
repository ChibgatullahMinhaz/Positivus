import React from "react";
import { Helmet } from "react-helmet";

export default function Pricing() {
  return (
    <main style={{ padding: "2rem" }}>
      <Helmet>
        <title>Pricing | Positivus</title>
        <meta
          name="description"
          content="Check out the pricing plans of Positivus for SEO-friendly React app solutions."
        />
        <meta property="og:title" content="Pricing | Positivus" />
        <meta
          property="og:description"
          content="Check out the pricing plans of Positivus for SEO-friendly React app solutions."
        />
        <link rel="canonical" href="https://positivus.com/pricing" />
      </Helmet>

      <h1>Pricing</h1>
      <p>Choose the plan that suits your needs for SEO-optimized React apps.</p>
    </main>
  );
}
