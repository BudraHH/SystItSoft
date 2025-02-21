import { useRef, useEffect } from "react";
import {useLocation, } from "react-router-dom";
import LandingPageHeroSection from "../sections/landing-page-sections/LandingPageHeroSection.jsx";
import CapabilitiesSection from "../sections/landing-page-sections/CapabilitiesSection.jsx";
import LandingPageReasonsSection from "../sections/landing-page-sections/LandingPageReasonsSection.jsx";
import FAQsSection from "../sections/landing-page-sections/FAQsSection.jsx";

const LandingPage = () => {
    const heroRef = useRef(null);
    const capabilitiesRef = useRef(null);
    const reasonsRef = useRef(null);
    const faqsRef = useRef(null);
    const location = useLocation();


    useEffect(() => {
        const handleHashScroll = () => {
            if (location.hash === "#faqs" && faqsRef.current) {
                faqsRef.current.scrollIntoView({ behavior: "smooth" });
            }
        };

        // Delay the scroll to ensure the component is fully rendered
        const delay = setTimeout(handleHashScroll, 100); // Adjust delay as needed

        return () => clearTimeout(delay); // Cleanup
    }, [location]);

    const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToCapabilities = () => capabilitiesRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToReasons = () => reasonsRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToFaqs = () => faqsRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="flex flex-col px-8 sm:px-10 md:px-16 lg:px-20" aria-label="Landing-Page">
            <LandingPageHeroSection heroRef={heroRef} scrollToServices={scrollToCapabilities} />
            <CapabilitiesSection servicesRef={capabilitiesRef} scrollToCapabilities={scrollToReasons} scrollToHero={scrollToHero} />
            <LandingPageReasonsSection reasonsRef={reasonsRef} scrollToServices={scrollToCapabilities}  scrollToFaqs={scrollToFaqs} />
            <FAQsSection faqsRef={faqsRef} scrollToReasons={scrollToReasons} />


        </div>
    );
};

export default LandingPage;
