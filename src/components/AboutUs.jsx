import React from "react";
import { motion } from "framer-motion";
import '../layout/about-us.css'
import Reveal from "./Reveal";


export default function AboutUs() {
    return (
        <Reveal>
            <h1 style={{textAlign:'center'}}> ?מה אנחנו מציעים </h1>
            <motion.div className="about-us-form">
                <motion.div className="about-us-inner-form">

                    <span>
                    אנו מציעים מומחיות מוכחת בבניית דפי נחיתה ואתרי אינטרנט. אנו מתאימים את העבודה שלנו באופן אישי לצרכי העסק שלכם, עם עיצוב מודרני ומושך עין. כל דף נחיתה שאנו בונים מאופטם לקידום אורגני בגוגל, עם ביצועים מהירים ותאימות לכל המכשירים.
                    </span>
                </motion.div>
            </motion.div>
        </Reveal>
    );
}
