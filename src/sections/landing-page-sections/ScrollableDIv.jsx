import React, { useRef, useEffect } from 'react';

const ScrollableDiv = ({dummyref}) => {
    const sectionRef = dummyref || useRef(null);
    const div2Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current && div2Ref.current) {
                const scrollTop = sectionRef.current.scrollTop;
                div2Ref.current.scrollLeft = scrollTop;
            }
        };

        if (sectionRef.current) {
            sectionRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (sectionRef.current) {
                sectionRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="h-screen bg-red-700 overflow-y-auto relative"
        >
            <div className={`h-[100px] bg-gray-700`}>div1</div> {/* div1 remains static */}
            <div
                ref={div2Ref}
                className="w-[200vw] h-[400px] bg-gray-200" // Make div2 scrollable horizontally
            >
                {/* Content of div2 - make sure it's wide enough to scroll */}
                <p className="p-4">
                    Content for div2. This should be long enough to demonstrate horizontal
                    scrolling.  This is some content inside the div. It's long enough to
                    demonstrate horizontal scrolling. This is some content inside the div.
                    It's long enough to demonstrate horizontal scrolling. This is some
                    content inside the div. It's long enough to demonstrate horizontal
                    scrolling. This is some content inside the div. It's long enough to
                    demonstrate horizontal scrolling. This is some content inside the div.
                    It's long enough to demonstrate horizontal scrolling. This is some
                    content inside the div. It's long enough to demonstrate horizontal
                    scrolling.
                </p>
            </div>
        </section>
    );
};

export default ScrollableDiv;