import { createBrowserRouter } from "react-router";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Services from "./pages/Services";
import UseCases from "./pages/UseCases";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/use-cases",
        element: <UseCases />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
