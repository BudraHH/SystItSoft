"use client";
import { useRef, useEffect, useCallback } from "react";
import LandingPageHeroSection from "../sections/landing-page-sections/LandingPageHeroSection.jsx";
import CapabilitiesSection from "../sections/landing-page-sections/CapabilitiesSection.jsx";
import LandingPageReasonsSection from "../sections/landing-page-sections/LandingPageReasonsSection.jsx";
import FAQsSection from "../sections/landing-page-sections/FAQsSection.jsx";

const LandingPage = () => {
    const heroRef = useRef(null);
    const capabilitiesRef = useRef(null);
    const reasonsRef = useRef(null);
    const faqsRef = useRef(null);

    const scrollToHero = useCallback(() => heroRef.current?.scrollIntoView({ behavior: "smooth" }), [heroRef]);
    const scrollToCapabilities = useCallback(() => capabilitiesRef.current?.scrollIntoView({ behavior: "smooth" }), [capabilitiesRef]);
    const scrollToReasons = useCallback(() => reasonsRef.current?.scrollIntoView({ behavior: "smooth" }), [reasonsRef]);
    const scrollToFaqs = useCallback(() => faqsRef.current?.scrollIntoView({ behavior: "smooth" }), [faqsRef]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === faqsRef.current) {
                            scrollToFaqs();
                        } else if (entry.target === capabilitiesRef.current) {
                            scrollToCapabilities();
                        } else if (entry.target === reasonsRef.current) {
                            scrollToReasons();
                        } else if (entry.target === heroRef.current) {
                            scrollToHero();
                        }
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        // Observe only if the ref is currently set (not null)
        const observeIfSet = (ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        };

        observeIfSet(faqsRef);
        observeIfSet(capabilitiesRef);
        observeIfSet(reasonsRef);
        observeIfSet(heroRef);

        return () => {
            // Unobserve only if the ref was previously set
            const unobserveIfSet = (ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };

            unobserveIfSet(faqsRef);
            unobserveIfSet(capabilitiesRef);
            unobserveIfSet(reasonsRef);
            unobserveIfSet(heroRef);
        };
    }, [scrollToFaqs, scrollToCapabilities, scrollToReasons, scrollToHero]);

    useEffect(() => {
        if (location.hash === "#faqs" && faqsRef.current) {
            faqsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="flex flex-col px-8 sm:px-10 md:px-5 lg:px-20" aria-label="Landing-Page">
            <LandingPageHeroSection heroRef={heroRef} scrollToServices={scrollToCapabilities} />
            <CapabilitiesSection servicesRef={capabilitiesRef} scrollToCapabilities={scrollToReasons} scrollToHero={scrollToHero} />
            <LandingPageReasonsSection reasonsRef={reasonsRef} scrollToServices={scrollToCapabilities}  scrollToFaqs={scrollToFaqs} />
            <FAQsSection faqsRef={faqsRef} scrollToReasons={scrollToReasons} />
        </div>
    );
};

export default LandingPage;