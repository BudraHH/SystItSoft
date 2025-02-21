"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconPlayerSkipBack, IconPlayerSkipForward } from "@tabler/icons-react";

const Carousel = ({ children }) => {
    const carouselRef = useRef(null);
    const [scrollState, setScrollState] = useState({ left: false, right: true });

    // Check if scrolling is possible
    const checkScrollability = useCallback(() => {
        if (!carouselRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        setScrollState({
            left: scrollLeft > 0,
            right: scrollLeft < scrollWidth - clientWidth,
        });
    }, []);

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => checkScrollability();
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener("scroll", handleScroll);
            return () => carousel.removeEventListener("scroll", handleScroll);
        }
    }, [checkScrollability]);

    // Scroll handler
    const scroll = (direction) => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    };

    // Scroll to start or end
    const scrollTo = (position) => {
        if (!carouselRef.current) return;
        carouselRef.current.scrollTo({ left: position === "start" ? 0 : carouselRef.current.scrollWidth, behavior: "smooth" });
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
            {/* Navigation Buttons (Forward & Back) */}
            <div className="flex justify-between mb-2 px-4">
                <button
                    className="h-10 px-4 bg-gray-200 dark:bg-gray-700 shadow-md rounded-md flex items-center justify-center disabled:opacity-50"
                    onClick={() => scrollTo("start")}
                    disabled={!scrollState.left}
                >
                    <IconPlayerSkipBack className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                    <span className="ml-2 text-sm font-medium">Back</span>
                </button>
                <button
                    className="h-10 px-4 bg-gray-200 dark:bg-gray-700 shadow-md rounded-md flex items-center justify-center disabled:opacity-50"
                    onClick={() => scrollTo("end")}
                    disabled={!scrollState.right}
                >
                    <span className="mr-2 text-sm font-medium">Forward</span>
                    <IconPlayerSkipForward className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </button>
            </div>

            {/* Scrollable Carousel Container */}
            <div
                ref={carouselRef}
                className="flex overflow-x-auto gap-4 py-6 px-4 scroll-smooth no-scrollbar"
            >
                {React.Children.map(children, (child, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index } }}
                        className="shrink-0"
                    >
                        {child}
                    </motion.div>
                ))}
            </div>

            {/* Navigation Buttons (Next & Prev) */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                <button
                    className="h-10 w-10 bg-white shadow-lg rounded-full flex items-center justify-center disabled:opacity-50"
                    onClick={() => scroll(-1)}
                    disabled={!scrollState.left}
                >
                    <IconArrowLeft className="h-5 w-5 text-gray-500" />
                </button>
                <button
                    className="h-10 w-10 bg-white shadow-lg rounded-full flex items-center justify-center disabled:opacity-50"
                    onClick={() => scroll(1)}
                    disabled={!scrollState.right}
                >
                    <IconArrowRight className="h-5 w-5 text-gray-500" />
                </button>
            </div>
        </div>
    );
};

// Example Card Component
const Card = ({ title, content }) => (
    <div className="w-64 h-40 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
    </div>
);

// Example Usage
export default function CarouselExample() {
    const cards = [
        { title: "Card 1", content: "This is the first card" },
        { title: "Card 2", content: "This is the second card" },
        { title: "Card 3", content: "This is the third card" },
        { title: "Card 4", content: "This is the fourth card" },
        { title: "Card 5", content: "This is the fifth card" },
    ];

    return (
        <Carousel>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} />
            ))}
        </Carousel>
    );
}
