import { Helmet } from "react-helmet";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="max-w-[95%] mx-auto">
      <Helmet>
        <title>Positivus - Home Page</title>
        <meta
          name="description"
          content="Positivus is a single-page React app optimized for SEO."
        />
        <meta property="og:title" content="Positivus" />
        <meta
          property="og:description"
          content="Positivus is a single-page React app optimized for SEO."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://positivus.com/" />
      </Helmet>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
