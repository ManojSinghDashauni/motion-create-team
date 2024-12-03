import { spring } from "motion";
import { motion } from "motion/react";
import React from "react";
import { BiRepeat } from "react-icons/bi";
import { Link } from "react-router";

const buttonVarient = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
    },
  },
};

const containerVarient = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const nextVarient = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Team = ({ addBase, pizza }) => {
  console.log(pizza);
  const team = ["Real Madrid", "Barcelona", "Manchester City"];
  return (
    <motion.div
      className="flex flex-col "
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="step">Step 1 : Choose Your Team</h1>
      <ul>
        {team.map((item) => {
          // let spanClass = pizza.base === 'active' : '';
          return (
            <motion.li
              className="list"
              key={item}
              onClick={() => addBase(item)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item}
            </motion.li>
          );
        })}
      </ul>
      {pizza.base && (
        <motion.div variants={nextVarient}>
          <Link to={"/Player"}>
            <motion.button
              className="btn"
              variants={buttonVarient}
              whileHover="hover"
            >
              next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Team;
