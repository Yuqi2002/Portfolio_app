import { styles } from "../styles";
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[350px] text-center`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-[#f9fbfb]`}>
            Hi, I'm <span className='blue-text-gradient'>Yuqi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a rising Software Engineer <br className='sm:block hidden' />
            Studying CS at the University of Central Florida
          </p>
        </div>
      </div>   

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
