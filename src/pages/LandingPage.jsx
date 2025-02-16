import { useRef } from "react";
import LandingPageHeroSection from "../sections/landing-page-sections/LandingPageHeroSection.jsx";
import LandingPageServicesSection from "../sections/landing-page-sections/LandingPageServicesSection.jsx";
import LandingPageReasonsSection from "../sections/landing-page-sections/LandingPageReasonsSection.jsx";
import FAQsSection from "../sections/landing-page-sections/FAQsSection.jsx";
import ContactFormSection from "../sections/landing-page-sections/ContactFormSection.jsx";


const LandingPage = () => {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const reasonsRef = useRef(null);
    const faqsRef = useRef(null);


    const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToServices = () => servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToReasons = () => reasonsRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToFaqs = () => faqsRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="flex flex-col px-8 sm:px-10 md:px-16 lg:px-20" aria-label="Landing-Page">
            <LandingPageHeroSection heroRef={heroRef} scrollToServices={scrollToServices} />
            <LandingPageServicesSection servicesRef={servicesRef} scrollToReasons={scrollToReasons} scrollToHero={scrollToHero} />
            <LandingPageReasonsSection reasonsRef={reasonsRef} scrollToServices={scrollToServices}  scrollToFaqs={scrollToFaqs} />
            <FAQsSection faqsRef={faqsRef} scrollToReasons={scrollToReasons} />
            <ContactFormSection/>

        </div>
    );
};

export default LandingPage;
