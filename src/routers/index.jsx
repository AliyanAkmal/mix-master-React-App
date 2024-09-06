import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";

import Home from "../pages/Home/Home";
import About from "../pages/About";
import NewsLetter from "../pages/newsLetter";
import CardDetails from "../components/cardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:id", element: <CardDetails /> },
      { path: "/about", element: <About /> },
      { path: "/news", element: <NewsLetter /> },
    ],
  },
]);
export default router;
