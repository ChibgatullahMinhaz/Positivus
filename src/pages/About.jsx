import React from "react";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <main style={{ padding: "2rem" }}>
      <Helmet>
        <title>About Us | Positivus</title>
        <meta
          name="description"
          content="Learn about Positivus, our mission, team, and vision for providing SEO-friendly React apps."
        />
        <meta property="og:title" content="About Us | Positivus" />
        <meta
          property="og:description"
          content="Learn about Positivus, our mission, team, and vision for providing SEO-friendly React apps."
        />
        <link rel="canonical" href="https://positivus.com/about" />
      </Helmet>

      <h1>About Us</h1>
      <p>Positivus is a single-page React app focused on SEO, accessibility, and performance.</p>
    </main>
  );
}
