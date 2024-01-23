import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard =({index , title ,icon})=>{
  return (
    <p>{title}</p>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
       variants={fadeIn("","",0.1,1)}
       className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"

      >
       at 2023 , i decided to learn web desgining
       so i started and practiced the whole summer that i loved
       to be relaxing , i started by Desgining Billie Eilish's
       site . now i did what i expected  myself at the end of
       this year...
      </motion.p>
     
      <div className="mt-20 flex flex-wrap gap-10">
       {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
       ))}
    </div>

    </>
  );
};

export default About;
