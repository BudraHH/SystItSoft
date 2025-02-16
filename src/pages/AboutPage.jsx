import { useRef } from "react";
import AboutPageHeroSection from "../sections/about-page-sections/AboutPageHeroSection.jsx";
import DescriptionSection from "../sections/about-page-sections/DescriptionSection.jsx";
import Next from "../sections/about-page-sections/Next.jsx";


const AboutPage = () => {
    const heroRef = useRef(null);
    const descriptionsRef = useRef(null);
    const nextRef = useRef(null);

    const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToDescriptions = () => descriptionsRef.current?.scrollIntoView({ behavior: "smooth" });
    const scrollToNext = () => nextRef.current?.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="min-h-screen flex flex-col px-8 sm:px-10 md:px-16 lg:px-20" aria-label="About-Page">
            <AboutPageHeroSection heroRef={heroRef} scrollToDescriptions={scrollToDescriptions} />
            <DescriptionSection descriptionRef={descriptionsRef} scrollToHero={scrollToHero} scrollToNext={scrollToNext} />
            <Next nextRef={nextRef}  />
        </div>
    );
};

export default AboutPage;
