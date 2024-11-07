"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-lighten absolute flex items-center justify-center"
        >
          <Image
            src="/Assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-cover rounded-full" // Ensures the image fits inside the circle
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]" // Match the image size
          fill="transparent"
          viewBox="0 0 500 500" // Adjusted viewBox to fit the size of the circle
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="248" // Radius exactly matches the container, stroke fills edge
            stroke="#00ff99"
            strokeWidth="4" // Stroke width that fits well with the size
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16, 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
