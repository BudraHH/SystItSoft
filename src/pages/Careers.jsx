import CareersIntro from "../sections/careers-page-sections/CareersIntro.jsx";
import WhyHere from "../sections/careers-page-sections/WhyHere.jsx";
import JobListings from "../sections/landing-page-sections/JobListings.jsx";

const Careers = () => {
    return (
        <div className={`w-screen h-full flex flex-col items-center justify-center bg-gradient-to-r from-dark via-primary to-dark
            `}
             aria-label="Landing Page">
            <CareersIntro  />
            <WhyHere  />
            <JobListings   />

        </div>
    );
};

export default Careers;
