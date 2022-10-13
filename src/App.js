import React, {lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import("./pages/Home.js"));
const AboutUs = lazy(() => import('./pages/AboutUs.js'));
const ContactUs = lazy(() => import('./pages/ContactUs.js'));
const NoPage = lazy(() => import('./pages/NoPage.js'));
const Login = lazy(() => import('./pages/Login.js'));
const Signup = lazy(() => import('./pages/Signup.js'));
const Services = lazy(() => import('./pages/Services.js'));

function App() {
  return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
        </Suspense>
      </Router>
  );
}

export default App;