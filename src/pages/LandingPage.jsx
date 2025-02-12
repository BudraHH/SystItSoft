import { useRef } from "react";
import LandingPageHero from "../sections/landing-page-sections/LandingPageHero.jsx";
import LandingPageServicesSection from "../sections/landing-page-sections/LandingPageServicesSection.jsx";
import LandingPageReasonsSection from "../sections/landing-page-sections/LandingPageReasonsSection.jsx";

const LandingPage = () => {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const reasonsRef = useRef(null);

    const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToServices = () => servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToReasons = () => reasonsRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="flex flex-col px-8 sm:px-10 md:px-16 lg:px-20" aria-label="Landing-Page">
            <LandingPageHero heroRef={heroRef} scrollToServices={scrollToServices} />
            <LandingPageServicesSection servicesRef={servicesRef} scrollToReasons={scrollToReasons} scrollToHero={scrollToHero} />
            <LandingPageReasonsSection reasonsRef={reasonsRef} scrollToReasons={scrollToReasons} />
            {/*<Ultimate3DPaperDepthEntry/>*/}
        </div>
    );
};

export default LandingPage;
