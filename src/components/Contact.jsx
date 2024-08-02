import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import '../layout/contact.css'; 

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact() {
  return (
    <Reveal direction="up">
      <motion.div className="contact_form" initial="hidden" animate="visible" variants={formVariants}>
        <h1 style={{textAlign:'center'}}> Contact Us </h1>
        <label> Name: </label>
        <input type="text" />
        <label> Email: </label>
        <input type="email" />
        <label> Message: </label>
        <textarea />

        <button type="submit">Send</button>
      </motion.div>
    </Reveal>
  );
}
