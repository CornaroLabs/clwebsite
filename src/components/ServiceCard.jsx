import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const ServiceCard = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="service-card bg-[#171b30]/75 hover:bg-[#171b30]/50 rounded-lg cursor-pointer flex flex-col justify-center  group pb-2 min-h-[15rem] transition-colors">
      <motion.div
        layout
        className=" text-white text-base flex flex-col gap-4 p-4 h-full items-center justify-center font-bold transition-colors text-center relative pt-16 ">
        <div className="absolute -top-8  text-white service-icon p-2.5">{service.icon}</div>
        <h3>{service.title}</h3>
        <p className="text-sm text-primary-gray font-normal">{service.summary}</p>
      </motion.div>
      <div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white flex flex-col gap-4 p-4 h-full items-center justify-center text-sm relative">
              {service.description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div layout className="flex justify-center">
        <ChevronDown
          className={`text-white group-hover:text-[#00b9fa] size-8 transition-all ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.div>
    </motion.button>
  );
};

export default ServiceCard;
