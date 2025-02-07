
import ContactHeroSection from "../sections/contact-page-sections/ContactHeroSection.jsx";
import ContactFormSection from "../sections/contact-page-sections/ContactFormSection.jsx";
import {useRef} from "react";

const ContactPage = () => {

    const formRef = useRef(null);
    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div>
            <ContactHeroSection scrollToForm={scrollToForm} />
            <ContactFormSection formRef={formRef} />
        </div>
    )
}

export default ContactPage