import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import heart from "./heart-mini.png";

export default function App() {
  return (
    <div className="App">
      <Rating />
    </div>
  );
}

const getAnimateProps = (idx) => {
  let initialAnimate = {
    opacity: 0
  };

  let animateRes = {
    rotate: 0,
    y: [0, -30],
    opacity: [0.2, 1],
    scale: [1, 0.8, 0.4, 0.2, 0.05],
    transition: {
      scale: {
        delay: 0.15,
        duration: 0.5
      }
    }
  };

  if (idx === 0) {
    animateRes.rotate = ["10deg", "30deg"];
    animateRes.x = [10, 25];
  }
  if (idx === 2) {
    animateRes.rotate = ["-10deg", "-30deg"];
    animateRes.x = [-10, -25];
  }

  return {
    initial: initialAnimate,
    animate: animateRes
  };
};

const Rating = () => {
  const [currentRating, setCurrentRating] = React.useState(0);

  return (
    <div
      className="rating-btn"
      key={currentRating}
      onClick={() => setCurrentRating((r) => r + 1)}
    >
      <motion.div
        key={currentRating}
        animate={{
          // scale: [1, 2, 1],
          scale: [1, 2, 2, 1],
          rotate: [-10, 0, 10, 0],
          transition: {
            scale: {
              ease: "easeInOut",
              duration: 1
            },
            rotate: {
              duration: 2,
              delay: 1
            }
          }
        }}
      >
        <span role="img" aria-label="Rating">
          😍
        </span>
      </motion.div>
      <span className="rating-container">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <motion.img
              {...getAnimateProps(idx)}
              className="heart"
              src={heart}
            />
          ))}
      </span>
    </div>
  );
};
