import React from "react";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <main style={{ padding: "2rem" }}>
      <Helmet>
        <title>Services | Positivus</title>
        <meta
          name="description"
          content="Discover the services offered by Positivus, including SEO optimization, React app development, and more."
        />
        <meta property="og:title" content="Services | Positivus" />
        <meta
          property="og:description"
          content="Discover the services offered by Positivus, including SEO optimization, React app development, and more."
        />
        <link rel="canonical" href="https://positivus.com/services" />
      </Helmet>

      <h1>Our Services</h1>
      <p>We provide SEO-friendly React development, accessibility consulting, and performance optimization.</p>
    </main>
  );
}
