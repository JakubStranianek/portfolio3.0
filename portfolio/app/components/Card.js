"use client";

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { useState } from "react";

export default function Card() {
    
  return (
    <>
    <div className="w-80 h-80 border-2 border-red-500 hover:bg-blue-400" onMouseMove={(currentTarget) => {getPoints(currentTarget)}}>
        Card
    </div>
    </>

  )
}
