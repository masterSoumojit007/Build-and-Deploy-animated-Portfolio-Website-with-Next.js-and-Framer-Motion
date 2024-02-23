// Importing necessary modules and styles
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Importing global styles
import StarsCanvas from "@/components/main/StarBackground"; // Importing the StarsCanvas component
import Navbar from "@/components/main/Navbar"; // Importing the Navbar component
import Footer from "@/components/main/Footer"; // Importing the Footer component

// Initializing the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the page
export const metadata: Metadata = {
  title: "Space Portfolio", // Title of the page
  description: "This is my portfolio", // Description of the page
};

// RootLayout component
export default function RootLayout({
  children, // Children components passed to the RootLayout
}: {
  children: React.ReactNode; // Type definition for the children prop
}) {
  return (
    <html lang="en"> {/* Setting the language of the document */}
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`} // Setting body styles with Inter font and background color
      >
        <StarsCanvas /> {/* Rendering the StarsCanvas component for background effect */}
        <Navbar /> {/* Rendering the Navbar component */}
        {children} {/* Rendering the children components */}
        <Footer /> {/* Rendering the Footer component */}
      </body>
    </html>
  );
}
