import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";

const Projects = () => {
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
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </motion.main>
  );
};

export default Projects;
