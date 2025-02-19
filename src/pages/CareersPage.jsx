import CareersHeroSection from "../sections/careers-page-sections/CareersHeroSection.jsx";
import PerksAndBenefits from "../sections/careers-page-sections/PerksAndBenefits.jsx";
import {useRef} from "react";
import ImageGridSection from "../sections/careers-page-sections/ImageGridSection.jsx";
import CurrentOpening from "../sections/careers-page-sections/CurrentOpening.jsx";
import CompanyCulture from "../sections/careers-page-sections/CompanyCulture.jsx";

const CareersPage = () => {
    const heroRef = useRef(null);
    const cultureRef = useRef(null);
    const reasonsRef = useRef(null);

    const scrollToCultures = () => {
        cultureRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    const scrollToReasons = () => {
        reasonsRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const jobListRef = useRef(null);
    const scrollToJobListing = () => {
        jobListRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className={`flex flex-col px-8 sm:px-10 md:px-16 lg:px-22 `}
             aria-label="CareersPage">
            <CareersHeroSection heroRef={heroRef} scrollToCultures={scrollToCultures} />
            <ImageGridSection/>
            <CompanyCulture cultureRef={cultureRef} />
            <PerksAndBenefits reasonsRef={reasonsRef} scrollToJobListing={scrollToJobListing} />
            {/*<CareersJobListSection jobListRef={jobListRef} />*/}
            <CurrentOpening/>

        </div>
    );
};

export default CareersPage;
