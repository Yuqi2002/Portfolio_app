import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
//qTvnd-uHQimToScoU
//template_8uzxp1r
//service_9b3smac
    emailjs.send('service_9b3smac','template_8uzxp1r',
        {
          from_name: form.name,
          to_name: "Yuqi Zhou",
          from_email: form.email,
          to_email: "yuqizhou0330@gmail.com",
          message: form.message,
        },
        'qTvnd-uHQimToScoU'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(":(, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}> Let's get in touch!</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <button
            type = "button"
            style={{
              transition: 'background-color 0.3s, transform 0.3s',
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px',
              margin: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
            className='bg-grey-100 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            onClick={() => window.open('https://github.com/Yuqi2002', '_blank')}
          >
            {"Github"}
          </button>&nbsp;&nbsp;&nbsp;

          <button
            type="button"
            className='bg-grey-100 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            style={{
              transition: 'background-color 0.3s, transform 0.3s',
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px',
              margin: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
            onClick={() => window.open('https://www.linkedin.com/in/yuqizhou2002/', '_blank')}
          >
            {"Linkedin"}
          </button>&nbsp;&nbsp;&nbsp;

          <button
            role = "link"
            className='bg-grey-100 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            style={{
              transition: 'background-color 0.3s, transform 0.3s',
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px',
              margin: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
            onClick={() => window.open('https://drive.google.com/file/d/17gd7sRib6kBKoPl8MbOZf4X8HTRCsEM8/view', '_blank')}>
            {"Resume"}
          </button>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="ex: John Doe"
              className='bg-grey-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="ex: JohnDoe@gmail.com"
              className='bg-grey-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-grey-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-grey-100 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            style={{
              transition: 'background-color 0.3s, transform 0.3s',
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
