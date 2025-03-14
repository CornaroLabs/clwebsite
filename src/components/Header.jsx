import { motion } from "motion/react";

const links = [
  {
    id: 1,
    title: "Grants Dashboard",
    url: "#dashboard",
  },
  {
    id: 2,
    title: "Services",
    url: "#services",
  },
  {
    id: 3,
    title: "About Us",
    url: "#about-us",
  },
  {
    id: 4,
    title: "Track Record",
    url: "#track-record",
  },
  {
    id: 5,
    title: "Contact Us",
    url: "mailto:info@cornarolabs.xyz",
  },
];

const fadeInYVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Header = () => {
  return (
    <motion.header
      variants={fadeInYVariants}
      initial="hidden"
      animate="visible"
      className="px-5 py-4 text-white fixed w-full border-b border-primary-gray rounded-2xl lg:border-none backdrop-blur-lg z-50 md:px-8">
      <nav className="flex flex-col md:flex-row items-center justify-between text-sm gap-3  ">
        <div className="w-72 lg:w-60">
          <a href="https://www.cornarolabs.xyz">
            <img src="./logo.png" alt="" />
          </a>
        </div>

        <ul className="flex items-center gap-4 md:gap-10 flex-wrap justify-center md:justify-end">
          {links.map((link) => {
            return (
              <li className="relative group" key={link.id}>
                <a href={link.url}>{link.title}</a>
                <span className="w-full h-0.5 bg-white block absolute transition-all opacity-0 top-7 group-hover:opacity-100 group-hover:top-5" />
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
};
export default Header;
