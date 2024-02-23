import React from "react"; // Importing React library
import ProjectCard from "../sub/ProjectCard"; // Importing ProjectCard component

const Projects = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20" id="projects"> {/* Container for the projects section */}
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"> {/* Title of the projects section */}
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10"> {/* Container for project cards */}
                {/* Project Cards */}
                <ProjectCard
                    src="/NextWebsite.png" // Source of the project image
                    title="Modern Next.js Portfolio" // Title of the project
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." // Description of the project
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Interactive Website Cards"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Space Themed Website"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
        </div>
    );
};

export default Projects; // Exporting the Projects component
