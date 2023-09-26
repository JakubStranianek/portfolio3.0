"use client";

import {
	motion,
  useMotionValue,
	useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";


export default function Card({children}) {  
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {	
    const { left, top } = currentTarget.getBoundingClientRect();
		setMouseX(clientX - left);
		setMouseY(clientY - top);    
	}


  return (
    <>
    <div className="w-full h-full border border-zinc-600 rounded-xl" onMouseMove={onMouseMove}>
        <motion.div style={{background: `radial-gradient(200px at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.03), transparent)`}} className="w-full h-full rounded-xl">
          {children}
        </motion.div>
    </div>
    </>

  )
}
