import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const Contacts = () => {
  const animationControls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animationControls.start({ opacity: 1, y: 0 });
    }
  }, [animationControls, inView]);

  return (
    <motion.main
      className="section"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={animationControls}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <motion.li
            className="content-list__item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="title-2">Location</h2>
            <p>Ufa, Russia</p>
          </motion.li>
          <motion.li
            className="content-list__item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="title-2">Telegram</h2>
            <p>
              <a href="tg://resolve?domain=Djostit">@Djostit</a>
            </p>
          </motion.li>
          <motion.li
            className="content-list__item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:djostit@mail.ru">djostit@mail.ru</a>
            </p>
          </motion.li>
        </ul>
      </div>
    </motion.main>
  );
};

export default Contacts;
