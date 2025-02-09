import { useRef, useEffect, useState } from "react";
import LandingPageHero from "../sections/landing-page-sections/LandingPageHero.jsx";
import LandingPageServicesSection from "../sections/landing-page-sections/LandingPageServicesSection.jsx";
import LandingPageReasonsSection from "../sections/landing-page-sections/LandingPageReasonsSection.jsx";

const LandingPage = () => {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const reasonsRef = useRef(null);

    const [isServicesVisible, setIsServicesVisible] = useState(false);

    const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToServices = () => servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToReasons = () => reasonsRef.current?.scrollIntoView({ behavior: "smooth" });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsServicesVisible(entry.isIntersecting);
            },
            { threshold: 0.6 } // Adjust this value to control when it triggers (0.6 = 60% visible)
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    // Disable/Enable scrolling dynamically based on isServicesVisible
    useEffect(() => {
        if (isServicesVisible) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling
        }
    }, [isServicesVisible]);

    return (
        <div className="flex flex-col px-8 sm:px-10 md:px-16 lg:px-22" aria-label="Landing-Page">
            <LandingPageHero heroRef={heroRef} scrollToServices={scrollToServices} />
            <LandingPageServicesSection servicesRef={servicesRef} scrollToReasons={scrollToReasons} scrollToHero={scrollToHero} />
            <LandingPageReasonsSection reasonsRef={reasonsRef} />
        </div>
    );
};

export default LandingPage;
