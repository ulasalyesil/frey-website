import React from "react";
import { motion } from "framer-motion";

export default function HeroTitle({ text, image }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: i * 0.04 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "4.5rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.h1
          className="font-medium text-4xl text-center leading-tight sm:p-0 mr-2 md:text-7xl md:mr-4"
          variants={child}
          key={index}
        >
          {image}
          {word}
        </motion.h1>
      ))}
    </motion.div>
  );
}
