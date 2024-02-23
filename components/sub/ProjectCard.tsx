import Image from "next/image"; // Importing Image component from next/image
import React from "react"; // Importing React

// Defining the Props interface to type-check the props passed to the component
interface Props {
  src: string; // Source of the project image
  title: string; // Title of the project
  description: string; // Description of the project
}

// Functional component ProjectCard receiving props of type Props
const ProjectCard = ({ src, title, description }: Props) => {
  return (
    // Outer container for the project card with styling classes
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {/* Image component displaying the project image */}
      <Image
        src={src} // Source of the image
        alt={title} // Alt text for accessibility
        width={1000} // Width of the image
        height={1000} // Height of the image
        className="w-full object-contain" // Styling for the image
      />

      {/* Container for the project information */}
      <div className="relative p-4">
        {/* Title of the project */}
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        {/* Description of the project */}
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

// Exporting the ProjectCard component
export default ProjectCard;
