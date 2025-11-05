import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home/Home";
import { Services } from "./screens/Services/Services";
import { About } from "./screens/About/About";
import { Contact } from "./screens/Contact/Contact";
import { Blog } from "./screens/Blog/Blog";
import { Pricing } from "./screens/Pricing/Pricing";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};