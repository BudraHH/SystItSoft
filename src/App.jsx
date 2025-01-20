import Main from "./componenets/Main";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./componenets/ContactUs";
import AboutUs from "./componenets/AboutUs";
import FAQs from "./componenets/FAQs";
import Capabilities from "./componenets/Capabilities";
import Solutions from "./componenets/Solutions";
import Insights from "./componenets/Insights";
import LandingPage from "./componenets/LandingPage";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-[100vw] overflow-x-hidden">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
