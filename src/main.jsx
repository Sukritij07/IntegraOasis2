import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Passchange from "./pages/Passchange.jsx";
import Otp from "./pages/Otp.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Buy from "./pages/Buy.jsx";
import Resell from "./pages/Resell.jsx";
import Clothing from "./pages/Clothing.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/in" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/passchange" element={<Passchange />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/resell" element={<Resell />}></Route>
        <Route path="/clothing" element={<Clothing />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
