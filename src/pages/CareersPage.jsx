import CareersHeroSection from "../sections/careers-page-sections/CareersHeroSection.jsx";
import CareersReasonSection from "../sections/careers-page-sections/CareersReasonSection.jsx";
import CareersJobListSection from "../sections/careers-page-sections/JobListSection.jsx";
import {useRef} from "react";
import CareersImageGridSection from "../sections/careers-page-sections/CareersImageGridSection.jsx";
import CareerPageCurrentOpeningSection from "../sections/careers-page-sections/CareerPageCurrentOpeningSection.jsx";

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
        <div className={`flex flex-col px-8 sm:px-10 md:px-16 lg:px-22 `}
             aria-label="CareersPage">
            <CareersHeroSection scrollToReasons={scrollToReasons} />
            <CareersImageGridSection/>
            <CareersReasonSection reasonsRef={reasonsRef} scrollToJobListing={scrollToJobListing} />
            {/*<CareersJobListSection jobListRef={jobListRef} />*/}
            <CareerPageCurrentOpeningSection/>

        </div>
    );
};

export default CareersPage;
