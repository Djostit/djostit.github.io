import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "./../components/header/Header";
import { useEffect } from "react";

const Home = () => {
  const frontAnimationControls = useAnimation();
  const [frontRef, frontInView] = useInView();

  useEffect(() => {
    if (frontInView) {
      frontAnimationControls.start({ opacity: 1, y: 0 });
    }
  }, [frontAnimationControls, frontInView]);

  const backendAnimationControls = useAnimation();
  const [backendRef, backendInView] = useInView();

  useEffect(() => {
    if (backendInView) {
      backendAnimationControls.start({ opacity: 1, y: 0 });
    }
  }, [backendAnimationControls, backendInView]);

  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <motion.ul className="content-list">
            <motion.li
              className="content-list__item"
              ref={frontRef}
              initial={{ opacity: 0, y: 20 }}
              animate={frontAnimationControls}
              transition={{ duration: 0.5 }}
            >
              <h2 className="title-2">Frontend</h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, BootStrap,
                MaterialUI, StyledComponents
              </motion.p>
            </motion.li>
            <motion.li
              className="content-list__item"
              ref={backendRef}
              initial={{ opacity: 0, y: 20 }}
              animate={backendAnimationControls}
              transition={{ duration: 0.5 }}
            >
              <h2 className="title-2">Backend</h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                C#, ASP.NET Core, EF Core, MySQL, PostreSQL
              </motion.p>
            </motion.li>
          </motion.ul>
        </div>
      </main>
    </>
  );
};

export default Home;
