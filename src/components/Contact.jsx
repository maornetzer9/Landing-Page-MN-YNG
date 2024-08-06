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
      <motion.div 
        initial="hidden" 
        animate="visible" 
        className="contact_form" 
        variants={formVariants}
      >
        <h1 style={{textAlign:'center'}}> יצירת קשר </h1>

        <label> שם: </label>
        <input type="text" placeholder='שם השולח'/>
        
        <label> אימייל: </label>
        <input type="email" placeholder='אימייל לחזרה'/>

        <label> הודעה: </label>
        <input type='text'  placeholder='הודעה'/>

        <button type="submit">Send</button>
      </motion.div>
    </Reveal>
  );
}
