"use client";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useEffect} from "react";

import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";


function App() {
    const location = useLocation();
    const isApplyPage = /^\/careers\/apply(\/|$)/.test(location.pathname);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);  // This ensures it scrolls to top on route change




    return (
        <div className="relative  overflow-hidden w-[100vw] bg-gradient-to-r from-dark via-primary to-dark">
            {!isApplyPage && <Header />}

            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about-us" element={<AboutPage/>}/>
                <Route path="/careers" element={<CareersPage/>}/>
                <Route path="/careers/apply/:jobId" element={<ApplyPage/>}/>



            </Routes>

            {!isApplyPage && <Footer/>}


        </div>
    );
}

export default App;
