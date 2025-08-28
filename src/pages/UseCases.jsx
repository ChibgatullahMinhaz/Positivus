import React from "react";
import { Helmet } from "react-helmet";

export default function UseCases() {
  return (
    <main style={{ padding: "2rem" }}>
      <Helmet>
        <title>Use Cases | Positivus</title>
        <meta
          name="description"
          content="Explore how Positivus can be applied in different use cases for businesses and developers."
        />
        <meta property="og:title" content="Use Cases | Positivus" />
        <meta
          property="og:description"
          content="Explore how Positivus can be applied in different use cases for businesses and developers."
        />
        <link rel="canonical" href="https://positivus.com/use-cases" />
      </Helmet>

      <h1>Use Cases</h1>
      <p>See how our app helps improve SEO, accessibility, and performance in various projects.</p>
    </main>
  );
}
