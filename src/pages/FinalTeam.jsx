import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const containerVarient = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      dumping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
    exit: {
      x: "-100vw",
      transition: { ease: "easeInOut" },
    },
  },
};

const childtVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const FinalTeam = ({ pizza, setShowModel }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModel(true);
    }, 5000);
  }, [setShowModel]);

  return (
    <motion.div
      className="flex flex-col "
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="step1">Thank you for your team :-</h1>
      <motion.p className="text-center text-lg" variants={childtVarient}>
        your Team is {pizza.base} with :{" "}
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div
          className="text-center"
          key={topping}
          variants={childtVarient}
        >
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FinalTeam;
