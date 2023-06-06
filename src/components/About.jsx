import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer and I am passionate about 
        creating AI applications that solve real world issues. I am currently
        studying Computer Science at the University of Central Florida with 
        a 4.0 major GPA. I'm drawn to the field of computer science because it 
        constantly pushes me to learn new skills and technologies. Having over a decade
        of experience in Competitve sports and years of experience in professional golf 
        coaching, I am equipped with valuable skills that make me a great colleague to any team!
        
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
