import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";

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

const Player = ({ addTopping, pizza }) => {
  const player = ["messi", "cr7", "neymar"];
  console.log(pizza);
  return (
    <motion.div
      className="flex flex-col "
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col">
        <h1 className="step">Step:2 Choose Your Player</h1>
        <ul>
          {player.map((item) => {
            // let spanClass = pizza.base === 'active' : '';
            return (
              <motion.li
                className="list"
                key={item}
                onClick={() => addTopping(item)}
                whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.li>
            );
          })}
        </ul>

        <motion.div variants={nextVarient}>
          <Link to={"/FinalTeam"}>
            <motion.button
              className="btn"
              variants={buttonVarient}
              whileHover="hover"
            >
              next
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Player;
