import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Milestones from "./components/Milestones";
import Blog from "./components/Blog";
import Video from "./components/Video";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Video />
      <Milestones />
      <Testimonials />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
