import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io5";
import { slideAnimation } from '../utilities/motion';
import { motion } from 'framer-motion'
import '../layout/floating-button.css'

export default function FloatingButton() {
  return (
    <motion.div 
        {...slideAnimation('right')} 
        className="floating-button-container"
    >
      <button 
        className="floating-button"
      >
        <IoLogoWhatsapp />
      </button>
    </motion.div>
  );
}
