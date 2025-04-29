import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Profile from "../Pages/Profile/Profile";
import MyBookings from "../Pages/MyBookings/MyBookings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    loader: async () => {
      const [doctors, blogs] = await Promise.all([
        fetch("/data/doctorsData.json").then((res) => res.json()),
        fetch("/data/blogs.json").then((res) => res.json()),
      ]);
      return { doctors, blogs };
    },
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/doctor-info/:id",
        Component: Profile,
      },
      {
        path: "/my-bookings",
        Component: MyBookings,
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);