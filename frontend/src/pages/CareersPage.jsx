import CareersHeroSection from "../sections/careers-page-sections/CareersHeroSection.jsx";
import PerksAndBenefits from "../sections/careers-page-sections/PerksAndBenefits.jsx";
import {useRef} from "react";
import ImageGridSection from "../sections/careers-page-sections/ImageGridSection.jsx";
import CurrentOpening from "../sections/careers-page-sections/CurrentOpening.jsx";
import CompanyCulture from "../sections/careers-page-sections/CompanyCulture.jsx";

const CareersPage = () => {
    const heroRef = useRef(null);
    const imageGridRef = useRef(null);
    const cultureRef = useRef(null);
    const perksAndBenifitsRef = useRef(null);
    const currentOpeningsRef = useRef(null);

    const scrollToHero = () => {
        heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToImageGrid = () => {
        imageGridRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToCultures = () => {
        cultureRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToPerksAndBenifits = () => {
        perksAndBenifitsRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const scrollToCurrentOpenings= () => {
        currentOpeningsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className={`flex flex-col px-8 sm:px-10 md:px-16 lg:px-22 `}
             aria-label="CareersPage">
            <CareersHeroSection heroRef={heroRef} scrollToImageGrid={scrollToImageGrid} scrollToCurrentOpenings={scrollToCurrentOpenings} />
            <ImageGridSection imageGridRef={imageGridRef} />
            <CompanyCulture cultureRef={cultureRef} />
            <PerksAndBenefits perksAndBenifitsRef={perksAndBenifitsRef} scrollToCurrentOpennings={scrollToCurrentOpenings} />
            <CurrentOpening currentOpeningsRef={currentOpeningsRef} />

        </div>
    );
};

export default CareersPage;
