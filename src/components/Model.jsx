import { delay } from "motion";
import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { Link } from "react-router";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const model = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: { y: "200px", opacity: 1, transition: { delay: 0.5 } },
};

const Model = ({ showModel, setShowModel }) => {
  return (
    <AnimatePresence>
      {showModel && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="model"
            variants={model}
            initial="hidden"
            animate="visible"
          >
            <p>Want to make another team? </p>
            <Link to={"/"}>
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Model;
