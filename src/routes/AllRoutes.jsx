import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHomePage from "../admin/components/Home/AdminHomePage";
import Homepage from "pages/Homepage";
import MensPage from "pages/Mens";
import WomenPage from "pages/Womens";
import KidsPage from "pages/Kids";
import Navbar from "components/Navbar";
import SingleProductPage from "pages/singleProductPage";
import SignIn from "pages/Auth/Signup";
import LoginPage from "pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import CartPage from "pages/cartPage";
import Checkout from "pages/checkoutPage";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/admin/*" element={<AdminHomePage />}></Route>
        <Route path="/signup" element={<SignIn />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route
          path="/cartpage"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
