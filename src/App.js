import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./Dashboard";
import Login from "./components/pages/login&register/login";
import Register from "./components/pages/login&register/register";
import DarkMode from "./components/DarkMode";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import AboutUs from "./components/pages/AboutUs";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/consulting" element={<Consulting />} />
      </Routes>
      <DarkMode />
      <Footer />
    </Router>
  );
}

export default App;
