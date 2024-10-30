import App from "@/App";
import Search from "@/components/Popular/Search";
import AddItem from "@/pages/admin/adminPage/AddItem";
import AdminHome from "@/pages/admin/adminPage/AdminHome";
import AllUser from "@/pages/admin/adminPage/AllUser";
import Booking from "@/pages/admin/adminPage/Booking";
import ManageItem from "@/pages/admin/adminPage/ManageItem";
import AdminLayout from "@/pages/admin/layout/AdminLayout";
import UserBooking from "@/pages/admin/userPage/UserBooking";
import UserCart from "@/pages/admin/userPage/UserCart";
import UserHome from "@/pages/admin/userPage/UserHome";
import UserPaymentHistory from "@/pages/admin/userPage/UserPAymentHistory";
import UserLoginFrom from "@/pages/Auth/UserLoginFrom";
import Home from "@/pages/Home/Home";
import About from "@/pages/informations/About";
import Contact from "@/pages/informations/Contact";
import Profile from "@/pages/informations/Profile";
import UpdateProfile from "@/pages/informations/UpdateProfile";
import Shop from "@/pages/shop/Shop";
import CartView from "@/pages/view/CartView";
import Success from "@/pages/view/Success";
import DeatilsPage from "@/pages/view/DeatilsPage";
import { createBrowserRouter } from "react-router-dom";
import MenuTest from "@/components/Popular/Sheet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        path: "/login",
        element: <UserLoginFrom />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/cariview",
        element: <CartView />,
      },
      {
        path: "/deatils/:id",
        element: <DeatilsPage />,
      },
      {
        path: "success",
        element: <Success />,
      },
      {
        path: "fil",
        element: <MenuTest />,
      },
    ],
  },

  {
    path: "dashboard",
    element: <AdminLayout />,
    children:[
      {
        path:'',
        element:<AdminHome />
      },
      {
        path:'add-item',
        element:<AddItem /> 
      },
      {
        path:'booking-item/:id',
        element:<Booking />
      },
      {
        path:'manage-item',
        element:<ManageItem />
      },
      {
        path:'user',
        element:<AllUser />
      },
      {
        path:'user-home',
        element:<UserHome />
      },
      {
        path:'user-cart',
        element:<UserCart />
      },
      {
        path:'user-review',
        element:<UserBooking />
      },
      {
        path:'user-payment',
        element:<UserPaymentHistory />
      },
    ]
  },
]);
