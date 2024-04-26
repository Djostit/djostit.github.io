import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import vk from "./icons/vk.svg";
import telegram from "./icons/telegram.svg";
import discord from "./icons/discord.svg";
import github from "./icons/github.svg";
import "./style.css";

const Footer = () => {
  const iconsAnimationControls = useAnimation();
  const [iconsRef, iconsInView] = useInView();

  useEffect(() => {
    if (iconsInView) {
      iconsAnimationControls.start({ opacity: 1, y: 0 });
    }
  }, [iconsAnimationControls, iconsInView]);

  const copyrightAnimationControls = useAnimation();
  const [copyrightRef, copyrightInView] = useInView();

  useEffect(() => {
    if (copyrightInView) {
      copyrightAnimationControls.start({ opacity: 1, y: 0 });
    }
  }, [copyrightAnimationControls, copyrightInView]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social" ref={iconsRef}>
            <motion.li
              className="social__item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="https://vk.com/djostit" target="_blank" rel="noreferrer">
                <img src={vk} alt="VK" />
              </a>
            </motion.li>
            <motion.li
              className="social__item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="https://t.me/Djostit" target="_blank" rel="noreferrer">
                <img src={telegram} alt="Telegram" />
              </a>
            </motion.li>
            <motion.li
              className="social__item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://discord.com/users/340007778062041091/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={discord} alt="Discord" />
              </a>
            </motion.li>
            <motion.li
              className="social__item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://github.com/Djostit"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="GitHub" />
              </a>
            </motion.li>
          </ul>
          <motion.div
            ref={copyrightRef}
            className="copyright"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>© 2023 djostit.me</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
