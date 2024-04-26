import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

import "./style.css";

import sun from "./icons/sun.svg";
import moon from "./icons/moon.svg";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) =>
      currentValue === "light" ? "dark" : "light"
    );
  };

  const buttonAnimationControls = useAnimation();

  useEffect(() => {
    buttonAnimationControls.start({ opacity: 1, x: 0 });
  }, [buttonAnimationControls]);

  return (
    <motion.button
      className={
        darkMode === "dark"
          ? "dark-mode-btn dark-mode-btn--active"
          : "dark-mode-btn"
      }
      onClick={toggleDarkMode}
      initial={{ opacity: 0, x: 100 }}
      animate={buttonAnimationControls}
      transition={{ duration: 0.8 }}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </motion.button>
  );
};

export default BtnDarkMode;
