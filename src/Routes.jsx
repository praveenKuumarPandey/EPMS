import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
// import SocialCards from "./components/SocialCards/SocialCards";
import Dashboard from "./components/Dashboard/Dashboard";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import RequiredAuth from "./components/RequiredAuth";
import Unauthorized from "./components/Unauthorized";
import   CustomLayout    from "./components/CustomLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CustomLayout />}>
        {/*public route*/}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/*Private routes*/}
        <Route element={<RequiredAuth allowedRoles={['1000']} />}>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Route>

        <Route element={<RequiredAuth allowedRoles={['1001']} />}>
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Route>

      {/* catch all*/}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Route>
    </Routes>
  );
};


export default AppRoutes;
