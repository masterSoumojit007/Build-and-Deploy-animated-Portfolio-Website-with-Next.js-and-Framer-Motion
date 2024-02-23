"use client";

import React from 'react';
import { motion } from 'framer-motion'; // Importing motion components from framer-motion
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'; // Importing animation variants
import { SparklesIcon } from '@heroicons/react/24/outline'; // Importing SparklesIcon from Heroicons
import Image from 'next/image'; // Importing Image component from next/image

const HeroContent = () => {
    return (
        // Using motion.div to apply animations
        <motion.div
            initial="Hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                {/* Animated welcome box */}
                <motion.div
                    variants={slideInFromTop} // Applying slideInFromTop animation variant
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> {/* SparklesIcon */}
                    <h1 className="Welcome-text text-[13px]">
                        Fullstack Developer Portfolio
                    </h1>
                </motion.div>

                {/* Animated heading */}
                <motion.div
                    variants={slideInFromLeft(0.5)} // Applying slideInFromLeft animation variant
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            the best{" "}
                        </span>
                        project experience
                    </span>
                </motion.div>

                {/* Animated paragraph */}
                <motion.p
                    variants={slideInFromLeft(0.8)} // Applying slideInFromLeft animation variant
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a Full Stack Software Engineer with experience in Website,
                    Mobile, and Software development. Check out my projects and skills.
                </motion.p>

                {/* Animated Learn More button */}
                <motion.a
                    variants={slideInFromLeft(1)} // Applying slideInFromLeft animation variant
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn More!
                </motion.a>
            </div>

            {/* Animated image */}
            <motion.div
                variants={slideInFromRight(0.8)} // Applying slideInFromRight animation variant
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/mainIconsdark.svg" // Image source
                    alt="work icons" // Alt text
                    height={650} // Height
                    width={650} // Width
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent;
