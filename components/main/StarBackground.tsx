"use client";

import React, { useState, useRef, Suspense } from "react"; // Importing necessary modules from React
import { Canvas, useFrame } from "@react-three/fiber"; // Importing necessary modules from react-three-fiber
import { Points, PointMaterial, Preload } from "@react-three/drei"; // Importing necessary modules from react-three-drei
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm"; // Importing random number generator from maath

// StarBackground component
const StarBackground = (props: any) => {
    const ref: any = useRef(); // Creating a reference for the Points object
    // Generating star positions randomly within a sphere
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    // Rotating the star background using useFrame hook
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    // Returning the Points component with PointMaterial for rendering stars
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="$fff"
                    size={0.002}
                    sizeAttenuation={true}
                    dethWrite={false}
                />
            </Points>
        </group>
    );
};

// StarsCanvas component
const StarsCanvas = () => (
    // Creating a canvas to render the star background
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            {/* Using Suspense for fallback while loading */}
            <Suspense fallback={null}>
                {/* Rendering the StarBackground component */}
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas; // Exporting the StarsCanvas component
