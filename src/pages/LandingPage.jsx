
import Hero from "../sections/landing-page-sections/Hero.jsx";
import Features from "../sections/landing-page-sections/Features.jsx";
import Reasons from "../sections/landing-page-sections/Reasons.jsx";

const LandingPage = () => {

    return (
        <main
            className={`w-screen h-full flex flex-col items-center justify-center bg-gradient-to-r from-dark via-primary to-dark
            `}
            aria-label="Landing Page"
        >
            <Hero />
            {/* Uncomment Technologies if needed */}
            {/* <Technologies /> */}
            <Features />
            <Reasons />

        </main>
    );
};

export default LandingPage;
