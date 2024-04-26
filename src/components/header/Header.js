import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./style.css";

const Header = () => {
  const animationControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
    }
  }, [animationControls, inView]);

  return (
    <header className="header">
      <div className="header__wrapper">
        <motion.h1
          ref={ref}
          className="header__title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <strong>
            Hi, my name is <em>Nikita</em>
          </strong>
          <br />a fullstack developer
        </motion.h1>
        <motion.div
          ref={ref}
          className="header__text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p>with passion for learning and creating.</p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
