import { delay } from "motion";
import { motion } from "motion/react";

const staggeredVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.85,
      staggerChildren: 0.5,
    },
  },
};

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "backIn",
    },
  },
};

const fadeInNormalVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="hero pt-52 md:pb-36 pb-16 relative overflow-hidden">
      <div className="text-box flex flex-col gap-4 px-10 relative z-40">
        <div className="text-center z-10 text-white">
          <motion.h1
            variants={staggeredVariants}
            initial="hidden"
            animate="show"
            className="uppercase font-bold text-6xl drop-shadow">
            <motion.span variants={fadeInVariants}>Fund. </motion.span>
            <motion.span variants={fadeInVariants}>Build. </motion.span>
            <motion.span variants={fadeInVariants}>Scale. </motion.span>
          </motion.h1>
          <motion.h2
            variants={fadeInNormalVariants}
            initial="hidden"
            animate="show"
            className=" pt-4 text-xl">
            Unlock Web3 Grants & Bring your vision to life.
          </motion.h2>
          <motion.p
            variants={fadeInNormalVariants}
            initial="hidden"
            animate="show"
            className="my-1.5 max-w-[45rem] mx-auto">
            Cornaro Labs helps Web3 projects secure funding with expert grant writing, strategic
            consultancy, and project management services. In addition to our hands-on support, we're
            building the CL Web3 Grants Dashboard—an AI-powered platform designed for seamless grant
            discovery and funding analytics.
          </motion.p>
        </div>
        <motion.div
          variants={fadeInNormalVariants}
          initial="hidden"
          animate="show"
          className="btn-box flex items-center gap-2 flex-wrap justify-center z-40 relative">
          <a
            className="custom-btn"
            href="https://www.web3grants.co/"
            target="_blank"
            rel="noreferrer">
            <span>Web3 Grants DashBoard</span>
          </a>
          <a
            className="custom-btn"
            href="https://calendly.com/cornarolabs"
            target="_blank"
            rel="noreferrer">
            <span>Book a free Consultation</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
