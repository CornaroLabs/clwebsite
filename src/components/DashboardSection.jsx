import { motion } from "motion/react";
import { Bot, ChartNoAxesCombined, RefreshCw } from "lucide-react";
import Dashboard from "../assets/dashboard.jpeg";
import { gradientButtonVariants } from "@/lib/animations";

const slideIn = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const slideInUp = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2, staggerChildren: 0.2 } },
};

const FadeIn = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

const DashboardSection = () => {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row gap-10 py-20 lg:py-28 px-10 items-center"
      id="dashboard">
      <motion.div
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="dashboard-preview-wrapper rounded-md h-full lg:w-[90%]">
        <img src={Dashboard} alt="" className="rounded-md" />
      </motion.div>
      <motion.div
        variants={slideInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-5 text-center lg:text-left">
        <motion.h2 variants={FadeIn} className="font-medium text-lg text-light-blue">
          Web3 Grants Dashboard
        </motion.h2>
        <motion.h3 variants={FadeIn} className="text-white font-bold text-3xl">
          Web3Grants.co – Find the
          <span className="gradient-text"> Perfect Grant for Your Project</span>
        </motion.h3>
        <motion.p variants={FadeIn}>
          The CL Web3 Grants Platform enhances how Web3 grant programs are accessed, analysed, and
          managed.
        </motion.p>
        <motion.ul variants={FadeIn} className="text-white text-sm space-y-6 font-medium">
          <li className="flex items-center gap-2 justify-center lg:justify-start">
            <RefreshCw className="text-light-blue size-5 shrink-0" />
            Integrating real-time data updates (refreshed every 48 hours)
          </li>
          <li className="flex items-center gap-2 justify-center lg:justify-start">
            <Bot className="text-light-blue size-5 shrink-0" />
            AI-powered grant matchmaking
          </li>
          <li className="flex items-center gap-2 justify-center lg:justify-start">
            <ChartNoAxesCombined className="text-light-blue size-5 shrink-0" />
            Providing data-driven solutions for Web3 funding protocols and builders to track impact
            and achieve better results.
          </li>
        </motion.ul>
        <motion.div variants={FadeIn} className="pt-6 flex gap-5 flex-wrap justify-center">
          <motion.a
            variants={gradientButtonVariants}
            initial="initial"
            whileHover="hover"
            className="custom-btn-2"
            href="https://www.web3grants.co/"
            target="_blank"
            rel="noreferrer">
            {" "}
            <span className="grid place-items-center">Visit the Dashboard</span>
          </motion.a>
          <a
            className="custom-btn"
            href="https://tally.so/r/nPGzAb"
            target="_blank"
            rel="noreferrer">
            <span className="text">Add Grant Program</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default DashboardSection;
