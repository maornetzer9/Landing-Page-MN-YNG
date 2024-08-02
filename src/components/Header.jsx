import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { headContentAnimation } from "../utilities/motion";
import Reveal from "./Reveal";
import Spaceship from "../UI/SpaceshipModel";
import "../layout/header.css";

export default function Header() {
    // const containerRef = useRef(null);

    // const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    // const opacity = useTransform(scrollYProgress, [0, 1], [2, 0]);
    // const scale = useTransform(scrollYProgress, [0, 2.5], [1, 1.5]);
    // const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "0%"]);

    return (
    <Reveal>
        <motion.div className="header_form">

            <motion.div id="spaceship"> 
                <Spaceship /> 
            </motion.div>

            <motion.div
                {...headContentAnimation}
                className="header_content_form"
            >
                <h1>עיצוב ופיתוח דפי נחיתה ואתרי אינטרנט מקצועיים</h1>
                <span>
                    מומחים בבניית דפי נחיתה ואתרים לעסקים ולחברות
                </span>
                <span>
                    השירות כולל תמיכה טכנית מלאה, אפיון, עיצוב, פיתוח וקידום אתרים
                </span>
            </motion.div>
        </motion.div>
    </Reveal>
    );
}
