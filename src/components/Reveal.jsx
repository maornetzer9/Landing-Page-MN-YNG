import React from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { slideAnimation } from '../utilities/motion';

const Reveal = ({ children, threshold = 0.1, direction = "right" }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold });
  const animation = slideAnimation(direction);

  return (
    <motion.div
      ref={ref}
      exit="exit"
      initial="initial"
      variants={animation}
      animate={isIntersecting ? "animate" : "initial"}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
