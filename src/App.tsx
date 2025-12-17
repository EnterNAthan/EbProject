import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Home } from "./screens/Home/Home";
import { Services } from "./screens/Services/Services";
import { About } from "./screens/About/About";
import { Contact } from "./screens/Contact/Contact";
import { Blog } from "./screens/Blog/Blog";
import { Pricing } from "./screens/Pricing/Pricing";

export const App = (): JSX.Element => {
  return (
    <LanguageProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};