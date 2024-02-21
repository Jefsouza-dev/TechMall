import { createBrowserRouter } from "react-router-dom";

import Home from "./src/pages/Home/index";
import Cart from "./src/pages/Cart";
import Details from "./src/pages/DetailsProduct";
import ThankYouPage from "./src/pages/ThankYouPage";

import Layout from "./src/components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/carrinho",
        element: <Cart />,
      },
      {
        path: "/produto/:id",
        element: <Details />,
      },
      {
        path: "/thanks",
        element: <ThankYouPage />,
      },
    ],
  },
]);

export default router;
