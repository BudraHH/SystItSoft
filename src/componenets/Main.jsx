import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";

import { BiMessageSquareDetail } from "react-icons/bi";
import ContactUs from "./ContactUs";
import Capabilities from "./Capabilities";
import FAQs from "./FAQs";
import Insights from "./Insights";
const Main = ({ className }) => {
  return (
    <main className="">
      <LandingPage isDarkMode={true}/>
      <AboutUs />
      <Capabilities />
      <Insights />
      <FAQs />
      <ContactUs />
      <div
        className="fixed z-20 right-5 bottom-5 backdrop-brightness-50 bg-dark text-white rounded-full cursor-pointer
      h-10 w-10 text-[16px]
      md:h-12 md:w-12 md:text-[20px]  lg:h-12 lg:w-12 lg:text-[22px] xl:h-14 xl:w-14 xl:text-[24px] flex justify-center items-center"
      >
        <BiMessageSquareDetail />
      </div>
    </main>
  );
};

export default Main;
