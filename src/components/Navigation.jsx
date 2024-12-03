import { motion } from "motion/react";
import React from "react";
import { GiSoccerBall } from "react-icons/gi";

const containerVarient = {
  hidden: {
    y: -250,
  },
  visible: {
    y: -10,
    transition: { delay: 0.2, type: "spring", stiffness: 120 },
  },
};

const logo = {
  visible: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const Navigation = () => {
  return (
    <div className="flex items-end px-16 py-4">
      <motion.div
        variants={logo}
        initial="hidden"
        animate="visible"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.7}
      >
        <GiSoccerBall className="size-20" />
      </motion.div>
      <motion.h1
        className=" mx-8  py-2 text-lg font-medium border-b-[1px] w-full border-b-white"
        variants={containerVarient}
        animate="visible"
      >
        Soccer Club
      </motion.h1>
    </div>
  );
};

export default Navigation;
