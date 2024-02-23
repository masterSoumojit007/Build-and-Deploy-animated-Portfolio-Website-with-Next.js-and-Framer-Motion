import { Socials } from "@/constants"; // Importing social media data from constants file
import Image from "next/image"; // Importing Image component from Next.js
import React from "react"; // Importing React library

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10"> {/* Container for the navbar */}
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]"> {/* Flex container for navbar content */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        > {/* Logo and website name */}
          <Image
            src="/NavLogo.png" // Source of the logo image
            alt="logo" // Alt text for the logo
            width={70} // Width of the logo
            height={70} // Height of the logo
            className="cursor-pointer hover:animate-slowspin" // Additional styling for the logo
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300"> {/* Website name */}
            Soumojit.
          </span>
        </a>

        {/* Navigation links */}
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200"> {/* Container for navigation links */}
            <a href="#about-me" className="cursor-pointer"> {/* About me link */}
              About me
            </a>
            <a href="#skills" className="cursor-pointer"> {/* Skills link */}
              Skills
            </a>
            <a href="#projects" className="cursor-pointer"> {/* Projects link */}
              Projects
            </a>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => ( // Mapping over social media data to render icons
            <Image
              src={social.src} // Source of the social media icon
              alt={social.name} // Alt text for the icon
              key={social.name} // Unique key for each icon
              width={24} // Width of the icon
              height={24} // Height of the icon
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar; // Exporting the Navbar component
