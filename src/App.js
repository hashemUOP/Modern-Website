import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Collections from "./pages/Collections";
import Page404 from "./pages/404";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Shop from "./pages/shop";
import Signup from "./pages/Signup";
import FindStore from "./pages/FindStore";
import AboutUs from "./pages/AboutUs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/product-details" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/check-out" element={<CheckOut/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/shop" element={<Shop/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/findstore" element={<FindStore/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
         {/* direct-all non existant routes for 404 */}
         <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

//app.js is reponsible for pages routing in react project