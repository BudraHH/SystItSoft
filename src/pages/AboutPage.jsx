import { useRef, useCallback } from "react";
import AboutPageHeroSection from "../sections/about-page-sections/AboutPageHeroSection.jsx";
import DescriptionSection from "../sections/about-page-sections/DescriptionSection.jsx";
import OurValues from "../sections/about-page-sections/OurValues.jsx";
import ContactFormSection from "../sections/landing-page-sections/ContactFormSection.jsx";

const AboutPage = () => {
    const heroRef = useRef(null);
    const descriptionsRef = useRef(null);
    const valuesRef = useRef(null);
    const contactFormRef = useRef(null);

    // Memoize scroll functions to prevent unnecessary re-renders of child components
    const scrollToHero = useCallback(() => {
        heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [heroRef]);

    const scrollToDescriptions = useCallback(() => {
        descriptionsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [descriptionsRef]);

    const scrollToValues = useCallback(() => {
        valuesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [valuesRef]);

    const scrollToContactForm = useCallback(() => {
        contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [contactFormRef]);

    return (
        <div className="min-h-screen flex flex-col px-8 sm:px-10 md:px-16 lg:px-20" aria-label="About-Page">
            <AboutPageHeroSection heroRef={heroRef} scrollToDescriptions={scrollToDescriptions} />
            <DescriptionSection descriptionRef={descriptionsRef} scrollToHero={scrollToHero} scrollToNext={scrollToValues} />
            <OurValues valuesRef={valuesRef} />
            <ContactFormSection formRef={contactFormRef}/>
        </div>
    );
};

export default AboutPage;