import { motion } from "motion/react";
import AboutUs from "./components/AboutUs";
import DashboardSection from "./components/DashboardSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import Services from "./components/Services";
import TrackRecord from "./components/TrackRecord";
import ScrollToTop from "./components/ScrollToTopButton";

const fadeInVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3.5,
      duration: 1,
    },
  },
};

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="pb-20">
        <Hero />
        <div className="text-center mt-14">
          <motion.h2
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            className="font-bold text-xl text-white px-10">
            We’ve successfully secured funding from{" "}
          </motion.h2>
          <LogoCarousel />
        </div>
        <DashboardSection />
        <Services />
        <AboutUs />
        <TrackRecord />
      </main>
      <Footer />
    </>
  );
}

export default App;
