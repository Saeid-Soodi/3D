import { motion } from "framer-motion"
import { SectionWrapper } from '../hoc';
import { useState, useRef } from "react";
import Emailjs from "@emailjs/browser";
import { styles } from "../styles";
import {EarthCanvas} from './canvas'
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const[form ,setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const[loading ,setLoading] = useState(false);

  const handleChange =(e)=>{} 

  const handleSubmit = (e)=>{} 
   return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left',"tween",0.2,1)}
      className="flex[0.75] bg-black-200 rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col ">
          <span className="text-white mb-4 font-medium">Your Name</span>
          <input 
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className=" bg-tertiary py-4 px-6 placeholder:text-secondary 
          text-white rounded-lg outline-none border-none font-medium "
          />
          </label>
          <label className="flex flex-col ">
          <span className="text-white mb-4 font-medium">Your Email</span>
          <input 
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className=" bg-tertiary py-4 px-6 placeholder:text-secondary 
          text-white rounded-lg outline-none border-none font-medium "
          />
          </label>
          <label className="flex flex-col ">
          <span className="text-white mb-4 font-medium">Your Message</span>
          <textarea 
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className=" bg-tertiary py-4 px-6 placeholder:text-secondary 
          text-white rounded-lg outline-none border-none font-medium "
          />
          </label>
        <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none
       font-bold w-fit text-white shadow-md rounded-xl shadow-primary"
        >
          {loading ?'sending ...':'send'}

        </button>
        </form>
      </motion.div>
      <motion.div
         variants={slideIn('right',"tween",0.2,1)}
         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")