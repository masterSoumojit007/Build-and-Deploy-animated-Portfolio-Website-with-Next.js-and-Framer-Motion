import React from "react"; // Importing React library
import HeroContent from "../sub/HeroContent"; // Importing HeroContent component

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me"> {/* Container for the hero section */}
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover" // Styling for the video element
            >
                <source src="/blackhole.webm" type="video/webm" /> {/* Source of the video */}
            </video>
            <HeroContent /> {/* Rendering the HeroContent component */}
        </div>
    );
};

export default Hero; // Exporting the Hero component
