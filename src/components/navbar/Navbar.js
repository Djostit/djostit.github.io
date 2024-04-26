import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {
  const buttonAnimationControls = useAnimation();
  const [buttonRef, buttonInView] = useInView();

  useEffect(() => {
    if (buttonInView) {
      buttonAnimationControls.start({ opacity: 1, y: 0 });
    }
  }, [buttonAnimationControls, buttonInView]);

  const logoAnimationControls = useAnimation();
  const [logoRef, logoInView] = useInView();

  useEffect(() => {
    if (logoInView) {
      logoAnimationControls.start({ opacity: 1, y: 0 });
    }
  }, [logoAnimationControls, logoInView]);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <motion.NavLink
            to="/"
            className="logo"
            ref={logoRef}
            initial={{ opacity: 0, y: 20 }}
            animate={logoAnimationControls}
            transition={{ duration: 0.5 }}
          >
            <strong>Djostit</strong> portfolio
          </motion.NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className="nav-list__link">
                <motion.div
                  ref={buttonRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={buttonAnimationControls}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Home
                </motion.div>
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className="nav-list__link">
                <motion.div
                  ref={buttonRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={buttonAnimationControls}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Projects
                </motion.div>
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className="nav-list__link">
                <motion.div
                  ref={buttonRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={buttonAnimationControls}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Contacts
                </motion.div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
