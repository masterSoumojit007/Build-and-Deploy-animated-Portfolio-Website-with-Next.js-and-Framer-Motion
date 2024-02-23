"use client"
import React from 'react' // Importing React
import { motion } from 'framer-motion' // Importing motion from framer-motion for animations
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion' // Importing animation variants from custom motion utility
import { SparklesIcon } from '@heroicons/react/24/solid' // Importing SparklesIcon from Heroicons

// SkillText component
const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            {/* Animation for the first text box */}
            <motion.div
                variants={slideInFromTop} // Variant for animation: slide in from top
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]" // Styling for the text box
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> {/* Sparkles icon */}
                <h1 className="Welcome-text text-[13px]">
                    Think better with Next js 13 {/* Text content */}
                </h1>
            </motion.div>

            {/* Animation for the second text box */}
            <motion.div
                variants={slideInFromLeft(0.5)} // Variant for animation: slide in from left
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]' // Styling for the text box
            >
                Making apps with modern technologies {/* Text content */}
            </motion.div>

            {/* Animation for the third text box */}
            <motion.div
                variants={slideInFromRight(0.5)} // Variant for animation: slide in from right
                className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center' // Styling for the text box
            >
                Never miss a task, deadline or idea {/* Text content */}
            </motion.div>
        </div>
    )
}

export default SkillText // Exporting the SkillText component
