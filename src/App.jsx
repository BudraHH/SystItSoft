import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useEffect} from "react";

import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";
import FAQs from "./pages/FAQs.jsx";
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
        <div className="relative overflow-hidden w-screen">
            {!isApplyPage && <Header/>}

            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about-us" element={<About/>}/>
                <Route path="/faqs" element={<FAQs/>}/>
                <Route path="/careers" element={<Careers/>}/>
                <Route path="/careers/apply/:jobId" element={<ApplyPage/>}/>
                <Route path="/contact-us" element={<Contact/>}/>

            </Routes>

            {!isApplyPage && <Footer/>}
        </div>
    );
}

export default App;
