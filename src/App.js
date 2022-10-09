import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import NoPage from "./pages/NoPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
  );
}

export default App;