"use client"; // Ensure this component is used on the client side

import React from "react"; // Import React library
import { motion } from "framer-motion"; // Import motion from Framer Motion library
import { slideInFromTop } from "@/utils/motion"; // Import animation function
import Image from "next/image"; // Import Image component from Next.js

const Encryption = () => {
    return (
        <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full"> {/* Flex container for positioning content */}
            <div className="absolute w-auto h-auto top-0 z-[5]"> {/* Absolute positioned container for title */}
                <motion.div
                    variants={slideInFromTop} // Applying animation
                    className="text-[40px] font-medium text-center text-gray-200" // Title styles
                >
                    Performance
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        &{" "}
                    </span>
                    Security
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto"> {/* Container for lock images */}
                <div className="flex flex-col items-center group cursor-pointer w-auto h-auto"> {/* Container for lock images */}
                    <Image
                        src="/LockTop.png" // Source of the top lock image
                        alt="Lock top" // Alt text for accessibility
                        width={50} // Width of the image
                        height={50} // Height of the image
                        className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11" // Image styles
                    />
                    <Image
                        src="/LockMain.png" // Source of the main lock image
                        alt="Lock Main" // Alt text for accessibility
                        width={70} // Width of the image
                        height={70} // Height of the image
                        className=" z-10" // Image styles
                    />
                </div>

                <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]"> {/* Container for encryption title */}
                    <h1 className="Welcome-text text-[12px]">Encryption</h1> {/* Title text */}
                </div>
            </div>
            <div className="absolute z-[20] bottom-[10px] px-[5px]"> {/* Container for description */}
                <div className="cursive text-[20px] font-medium text-center text-gray-300"> {/* Description text styles */}
                    Secure your data with end-to-end encryption
                </div>
            </div>

            <div className="w-full flex items-start justify-center absolute"> {/* Container for video */}
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto" // Video styles
                    src="/encryption.webm/" // Source of the video
                />
            </div>
        </div>
    );
};

export default Encryption; // Exporting the Encryption component
