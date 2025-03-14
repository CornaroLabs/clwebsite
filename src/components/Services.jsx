import { LayoutGroup, motion } from "motion/react";
import { ArrowUpRight, Bitcoin, ClipboardList, Diamond, Rocket } from "lucide-react";
import Cube from "../assets/cube.svg";
import ServiceCard from "./ServiceCard";
import { gradientButtonVariants } from "@/lib/animations";

const services = [
  {
    title: "Funding & Grant Opportunities",
    summary:
      "Leveraging our extensive experience with various blockchain protocols, and various European funding initiatives, we excel in securing funding for innovative projects.",
    icon: <img src={Cube} alt="" className="size-14" />,
    description: (
      <p className=" !text-white font-normal text-justify">
        We assist you in identifying funding opportunities, crafting compelling applications and
        finding strategic partners when necessary. Our seasoned expertise in the blockchain sector
        and European research & innovation projects, combined with a proven track record of raising
        over €3M+ in recent years only, enables us to offer high-quality, customized services. Our
        goal is to empower our clients to seize new funding opportunities and transform innovative
        ideas into successfully funded ventures.
      </p>
    ),
  },
  {
    title: "Project Management & Research",
    summary:
      "We provide comprehensive project management and research services across institutional, industry, and blockchain ecosystems. ",
    icon: <ClipboardList className="size-14" />,
    description: (
      <div className="flex flex-col gap-3 text-justify">
        <p className="!text-white">
          We have supported projects funded by the European Commission, Layer 1 blockchain protocols
          like Cosmos and Ethereum, and other decentralized initiatives.
        </p>
        <ul className="text-white  space-y-2">
          <li className="flex gap-3 items-center">
            <Diamond className="size-3 shrink-0" /> Expertise in regulatory compliance,
            multi-partner coordination, and execution.
          </li>
          <li className="flex gap-3 items-center">
            <Diamond className="size-3 shrink-0" /> Blockchain, cybersecurity, and policy research
            with in-depth whitepapers and reports.
          </li>
          <li className="flex gap-3 items-center">
            <Diamond className="size-3 shrink-0" /> Strong portfolio covering blockchain ecosystem
            analyses, metaverse insights, EU policy consultations, and cybersecurity evaluations .
          </li>
        </ul>
        <p className="!text-white">
          Our team has a proven track record of successfully managing large-scale, multi-stakeholder
          projects while ensuring strategic alignment, regulatory adherence, and impactful research.
        </p>
      </div>
    ),
  },
  {
    title: "MVP Development – Need a Web3 Developer?",
    summary:
      "Looking to build your Web3 idea but don’t have a developer? We connect you with skilled Web3 builders to help you.",
    icon: <Rocket className="size-14" />,
    description: (
      <div className="text-white flex flex-col gap-3 text-left">
        <span>We offer:</span>
        <ul className="text-white space-y-2">
          <li className="flex gap-3 items-center">
            <Diamond className="size-3 shrink-0" /> Develop your MVP (Minimum Viable Product).
          </li>
          <li className="flex gap-3 items-center">
            <Diamond className="size-3 shrink-0" /> Optimize smart contracts & blockchain
            infrastructure.
          </li>
          <li className="flex gap-3 items-center">
            <Diamond className="size-3 shrink-0" />
            Bring your Web3 vision to life with expert dev support.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Web3 & Blockchain Consulting",
    summary:
      "Strategic guidance for Web2 businesses entering Web3 and established blockchain projects.",
    icon: <Bitcoin className="size-14" />,
    description: (
      <div className="text-white flex flex-col gap-3 text-left">
        <span>We offer:</span>
        <ul className="text-white space-y-2">
          <li className="flex gap-3 items-center">
            <Diamond className="size-3 shrink-0" />{" "}
            <span>
              <span className="font-bold">New Entrants:</span>
              Use case identification, platform selection, and implementation strategies.
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <Diamond className="size-3 shrink-0" />
            <span>
              <span className="font-bold">Existing Web3 Projects:</span> Scaling operations, smart
              contract optimization, and compliance guidance
            </span>
          </li>
        </ul>
      </div>
    ),
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

const serviceCardVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <LayoutGroup>
      <section id="services" className="py-8 lg:py-20 px-10">
        <motion.h2
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl text-white font-bold text-center uppercase">
          Services
        </motion.h2>
        <motion.div layout>
          <motion.div
            variants={container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 py-20 lg:px-20 auto-rows-[minmax(200px,auto)]">
            {services.map((service, index) => (
              <motion.div variants={serviceCardVariants} key={index}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-min mx-auto">
            <motion.a
              variants={gradientButtonVariants}
              initial="initial"
              whileHover="hover"
              className="custom-btn-2 group"
              href="https://calendly.com/cornarolabs"
              target="_blank"
              rel="noreferrer">
              <span className="flex items-center gap-2">
                Discover How We Can Help{" "}
                <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1.5 duration-500" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </LayoutGroup>
  );
};
export default Services;
