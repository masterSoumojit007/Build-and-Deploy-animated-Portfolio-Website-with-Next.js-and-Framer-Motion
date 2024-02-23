// Importing necessary components and modules
import Encryption from "@/components/main/Encryption"; // Importing the Encryption component
import Hero from "@/components/main/Hero"; // Importing the Hero component
import Projects from "@/components/main/Project"; // Importing the Projects component
import Skills from "@/components/main/Skills"; // Importing the Skills component
import Image from "next/image"; // Importing the Image component from Next.js

// Default export for the Home component
export default function Home() {
  return (
    <main className="h-full w-full"> {/* Main container covering the entire viewport */}
      <div className="flex flex-col gap-20"> {/* Flex container with vertical direction and gap between children */}
        <Hero/> {/* Rendering the Hero component */}
        <Skills/> {/* Rendering the Skills component */}
        <Encryption/> {/* Rendering the Encryption component */}
        <Projects/> {/* Rendering the Projects component */}
      </div>
    </main>
  );
}
