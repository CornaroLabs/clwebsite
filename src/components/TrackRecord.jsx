import { motion } from "motion/react";

const records = [
  {
    amount: "$3M+",
    title: "Raised in Grant Fundraising",
    description:
      "Securing funding to drive innovation and support startups and projects from various ecosystems.",
  },
  {
    amount: "20+",
    title: "Projects Managed & Executed",
    description: "Leading end-to-end project execution, from strategy to successful deployment.",
  },
  {
    amount: "2",
    title: "Grant Programs Managed & Allocated",
    description:
      "Directly managed and distributed grants to Web3 and other tech startups/projects.",
  },
  {
    amount: "7+",
    title: "Years of Web3 Experience",
    description:
      "Expertise in blockchain, funding, project management, research and scaling Web3 projects.",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2, staggerChildren: 0.25 } },
};

const items = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
};

const TrackRecord = () => {
  return (
    <section id="track-record" className="px-10 pt-40 pb-20 text-center">
      <motion.h2
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl text-white font-bold">
        Our Track Record
      </motion.h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 pt-20">
        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {records.map((record, index) => (
            <TrackItem key={index} record={record} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default TrackRecord;

const TrackItem = ({ record }) => {
  return (
    <motion.div variants={items} className="flex gap-3 text-left">
      <div className="h-full w-1 bg-primary-gray rounded-2xl" />
      <div className="flex flex-col gap-3 items-start">
        <h3 className="text-4xl text-white font-bold">{record.amount}</h3>
        <h4 className="text-white font-medium">{record.title}</h4>
        <p>{record.description}</p>
      </div>
    </motion.div>
  );
};
