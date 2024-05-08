import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import Technologies from './components/Technologies';
import About from './components/About';
import Contact from './components/Contact';
import TestimonialSlider from './components/TestimonialSlider';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import TechPage from './components/TechPage';
import LandingPage from './components/LandingPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/technologies" element={<TechPage />} />
                    <Route path="/aboutus" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<UserProfile />} />
                    {/* Adding extra routes if needed */}
                    <Route path="/testimonials" element={<TestimonialSlider />} />
                    <Route path="/faq" element={<FAQ />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
