import React from "react";
import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <main style={{ padding: "2rem" }}>
      <Helmet>
        <title>Blog | Positivus</title>
        <meta
          name="description"
          content="Read the latest blog posts from Positivus about React, SEO, and web development best practices."
        />
        <meta property="og:title" content="Blog | Positivus" />
        <meta
          property="og:description"
          content="Read the latest blog posts from Positivus about React, SEO, and web development best practices."
        />
        <link rel="canonical" href="https://positivus.com/blog" />
      </Helmet>

      <h1>Blog</h1>
      <p>Stay updated with our articles on React development, SEO, and best practices.</p>
    </main>
  );
}
