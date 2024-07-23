import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

const container =(delay) => ({
  hidden: {x: -100, opacity: 0},
  visible:{
    x:0,
    opacity: 1,
    transition :{duration: 0.5, delay :delay}
  }
})

const Hero = () => {
  return(
  <div className="border-b border-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Kendrix Chanrio
                </motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  text-3xl inline-block text-transparent bg-clip-text">Full Stack Developer Student
                </motion.span>
                <motion.p variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quam minus odio ipsa facilis fugiat. In laudantium reprehenderit laboriosam placeat sunt ad, maxime cum molestias earum quas possimus, itaque velit iure totam! Eos quibusdam culpa porro modi, iure pariatur aliquid dignissimos alias mollitia molestiae excepturi odio, facilis quam nam. Possimus.</motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100, opacity:0}} 
            animate={{x:0, opacity: 1}}
            transition={{duration :1, delay: 1.2}}
            src={profilePic} alt="Profile" />
          </div>
        </div>
    </div>
  </div>
  );
}

export default Hero