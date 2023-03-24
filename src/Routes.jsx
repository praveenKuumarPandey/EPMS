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

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={getToken() ? <Dashboard /> : <Navigate to="/signin" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/about"
        element={getToken() ? <About /> : <Navigate to="/signin" />}
      />
      <Route
        path="/contact"
        element={getToken() ? <Contact /> : <Navigate to="/signin" />}
      />
      <Route
        path="/profile"
        element={getToken() ? <Profile /> : <Navigate to="/signin" />}
      />
      <Route path="*" element={<Navigate to="/signin" replace />} />
    </Routes>
  );
};


export default AppRoutes;
