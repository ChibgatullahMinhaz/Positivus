import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main style={{ textAlign: "center", padding: "4rem" }}>
      <Helmet>
        <title>404 - Page Not Found | Positivus</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Navigate back to Positivus homepage."
        />
        <meta property="og:title" content="404 - Page Not Found | Positivus" />
        <meta
          property="og:description"
          content="The page you are looking for does not exist. Navigate back to Positivus homepage."
        />
        <link rel="canonical" href="https://positivus.com/404" />
      </Helmet>

      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          background: "#4CAF50",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
