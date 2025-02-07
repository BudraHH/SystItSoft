
import Hero from "../sections/landing-page-sections/Hero.jsx";
import Features from "../sections/landing-page-sections/Features.jsx";
import Reasons from "../sections/landing-page-sections/Reasons.jsx";
import Contact from "../sections/contact-page-sections/ContactFormSection.jsx";
import {useRef} from "react";

const LandingPage = () => {

    const featuresRef = useRef(null);
    const scrollToFeatures = () => {
        featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    }


    return (
        <div
            className={`relative z-10 w-screen  h-full flex flex-col items-center justify-center space-y-10 bg-gradient-to-r from-dark via-primary to-dark
            `}
            aria-label="Landing Page"
        >
            <Hero scrollToFeatures={scrollToFeatures} />
            {/* Uncomment Technologies if needed */}
            {/* <Technologies /> */}
            <Features featuresRef={featuresRef} />
            <Reasons />

        </div>
    );
};

export default LandingPage;
