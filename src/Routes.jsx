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
import ProductSpecification from "./pages/ProductSpecification/ProductSpecification";
import ProductInProgress from "./pages/ProductInProgress/ProductInProgress";
import AllProduct from "./pages/AllProduct/AllProduct";
import MerchNewProd from "./pages/MerchNewProd/MerchNewProd";
import MerchProdInProgress from "./pages/MerchProdInProgress/MerchProdInProgress";
import MerchAllProduct from "./pages/MerchAllProduct/MerchAllProduct";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<RequiredAuth allowedRoles={[1000,1001,1002,100]} />}>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/profile"
        element={<Profile />}
      />
      </Route>

      <Route element={<RequiredAuth allowedRoles={[1000,1001]} />}>
        <Route
          path="/about"
          element={<About />}
        />
        <Route
        path="/productSpec"
        element={<ProductSpecification />}
      />
      <Route
        path="/prodinprogress"
        element={<ProductInProgress />}
      />
        
      <Route
        path="/allproduct"
        element={<AllProduct />}
      />
      </Route>
      <Route element={<RequiredAuth allowedRoles={[1000,1002]} />}>
      <Route
          path="/contact"
          element={<Contact />}
        />
      <Route
          path="/merch-new-prod"
          element={<MerchNewProd />}
        />
      <Route
          path="/prod-in-progress"
          element={<MerchProdInProgress />}
        />
      <Route
          path="/merch-all-product"
          element={<MerchAllProduct />}
        />
      </Route>

    
      <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
  )
};

export default AppRoutes;