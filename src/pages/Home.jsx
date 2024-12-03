import { easeInOut } from "motion";
import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router";
import Loader from "../components/Loader";

const buttonVarient = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    // transition: {
    //   duration: 0.5,
    //   repeat: Infinity,
    // },
  },
  tap: {
    scale: 0.95,
  },
};

const containerVarient = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Home = ({ pizza }) => {
  console.log(pizza);
  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-16"
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-5xl font-semibold">Welcome to Soccer Club</h1>
      <Link to={"/Team"}>
        <motion.button
          className=" text-4xl font-normal py-4 px-10 border-4 border-white rounded-full"
          variants={buttonVarient}
          whileHover="hover"
          whileTap="tap"
        >
          Create Your Team
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
