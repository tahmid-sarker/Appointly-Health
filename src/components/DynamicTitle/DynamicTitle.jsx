import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { DataContext } from "../../Pages/Root/Root";

const DynamicTitle = () => {
  const location = useLocation();
  // console.log(location)
  // console.log(location.pathname)
  const { doctors } = useContext(DataContext);
  // console.log(doctors)
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const currentPath = location.pathname;
    let newTitle = "Appontly Health";

    if (currentPath === "/") {
      newTitle = "Home - Appointly Health";
    } else if (currentPath === "/blogs") {
      newTitle = "Blogs - Appointly Health";
    } else if (currentPath === "/my-bookings") {
      newTitle = "My Bookings - Appointly Health";
    } else if (currentPath === `/doctor-info/${id}`) {
      const singleDoctor = doctors.find((doctor) => doctor.id === parseInt(id));
      if (singleDoctor) {
        newTitle = `${singleDoctor.name} | Appointly Health`;
      } else {
        newTitle = "Doctor Not Found | Appointly Health";
      }
    } else {
      newTitle = "Page Not Found - Appointly Health";
    }

    document.title = newTitle;
  }, [location.pathname, doctors, id]);

  return null;
};

export default DynamicTitle;