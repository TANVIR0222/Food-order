import App from "@/App";
import Home from "@/pages/Home/Home";
import About from "@/pages/informations/About";
import Contact from "@/pages/informations/Contact";
import Shop from "@/pages/shop/Shop";
import DeatilsPage from "@/pages/view/DeatilsPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: 
    [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/deatils/:id",
      element: <DeatilsPage />,
      // loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
    },
  ],
  },
]);
