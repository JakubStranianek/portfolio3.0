"use client";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export default function Particle() {
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);

  return (
    <>
         <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}        
            options={{
                fpsLimit: 60,                
                particles: {
                    color: {
                        value: "#ffffff",
                    },                  
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 500,
                        },
                        value: 15,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 1.5 },
                    },
                },
                detectRetina: true,
            }}
        />   
    </>
  )
}
