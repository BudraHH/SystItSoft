import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useEffect} from "react";

import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CareersPage from "./pages/CareersPage.jsx";
import FAQsPage from "./pages/FAQsPage.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";

function App() {
    const location = useLocation();




    const isApplyPage = location.pathname.startsWith("/careers/apply");
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);  // A small timeout with 0 ms delay can help
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);



    return (
        <div className="relative overflow-hidden w-[100vw] bg-gradient-to-r from-dark via-primary to-dark">
            {!isApplyPage && <Header/>}

            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about-us" element={<AboutPage/>}/>
                <Route path="/faqs" element={<FAQsPage/>}/>
                <Route path="/careers" element={<CareersPage/>}/>
                <Route path="/careers/apply/:jobId" element={<ApplyPage/>}/>
                <Route path="/contact-us" element={<ContactPage/>}/>



            </Routes>

            {/*{!isApplyPage && <Footer/>}*/}
        </div>
    );
}

export default App;
