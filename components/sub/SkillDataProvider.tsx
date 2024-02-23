"use client"

import React from 'react' // Importing React
import { motion } from 'framer-motion' // Importing motion from framer-motion for animations
import { useInView } from 'react-intersection-observer' // Importing useInView for detecting when the component comes into view
import Image from 'next/image'; // Importing Image component from next/image for displaying images

// Interface defining the props expected by SkillDataProvider component
interface Props {
    src: string; // Source of the skill image
    width: number; // Width of the skill image
    height: number; // Height of the skill image
    index: number; // Index of the skill in the list
}

// SkillDataProvider component receiving props of type Props
const SkillDataProvider = ({ src, width, height, index }: Props) => {
    // Hook for detecting when the component comes into view
    const { ref, inView } = useInView({
        triggerOnce: true // Ensures that the animation triggers only once
    })

    // Variants for animation
    const imageVariants = {
        hidden: { opacity: 0 }, // Hidden state with opacity 0
        visible: { opacity: 1 } // Visible state with opacity 1
    }

    // Animation delay for each skill
    const animationDelay = 0.3

    return (
        <motion.div
            ref={ref} // Reference for the intersection observer
            initial="hidden" // Initial animation state
            variants={imageVariants} // Variants for animation
            animate={inView ? "visible" : "hidden"} // Animation triggered based on whether the component is in view
            custom={index} // Custom animation properties
            transition={{ delay: index * animationDelay }} // Transition with delay based on index
        >
            {/* Image component displaying the skill image */}
            <Image
                src={src} // Source of the image
                width={width} // Width of the image
                height={height} // Height of the image
                alt='skill image' // Alt text for accessibility
            />
        </motion.div>
    )
}

// Exporting the SkillDataProvider component
export default SkillDataProvider
