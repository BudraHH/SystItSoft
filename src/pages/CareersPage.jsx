import CareersHeroSection from "../sections/careers-page-sections/CareersHeroSection.jsx";
import CareersReasonSection from "../sections/careers-page-sections/ReasonSection.jsx";
import CareersJobListSection from "../sections/careers-page-sections/JobListSection.jsx";
import {useRef} from "react";

const CareersPage = () => {
    const reasonsRef = useRef(null);
    const scrollToReasons = () => {
        reasonsRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    const jobListRef = useRef(null);
    const scrollToJobListing = () => {
        jobListRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className={`relative z-10 w-screen  flex flex-col items-center justify-center space-y-10 bg-gradient-to-r from-dark via-primary to-dark
            `} aria-label="CareersPage">
            <CareersHeroSection scrollToReasons={scrollToReasons} />
            <CareersReasonSection reasonsRef={reasonsRef} scrollToJobListing={scrollToJobListing} />
            <CareersJobListSection jobListRef={jobListRef} />

        </div>
    );
};

export default CareersPage;
