import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Shop from "./pages/Shop";
import CustomerSupport from "./pages/CustomerSupport";
import OrderDetails from "./pages/OrderDetails";

const AppLayout=()=> {
    return(
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "orderdetails",
                element: <OrderDetails/>,
            },
            {
                path: "customersupport",
                element: <CustomerSupport/>,
            },
            {
                path: "shop",
                element: <Shop/>,
            },
        ]
    }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);