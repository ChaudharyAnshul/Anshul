import React from "react";
import ParticlesBg from "particles-bg";
import { motion } from "framer-motion";

export const Header = ({ data }) => {

  if (!data) return null;

  const { linkedIn, github, name, description } = data;

  const config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 0.4],
    position: "all",
    color: ["#ffffff"],
    cross: "dead",
    random: 15
  };

  return (
    <header id="home">

      {/* <ParticlesBg type="snow" num={50} color="#fff" bg={true} /> */}
      <ParticlesBg type="custom" config={config} bg={true} />
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="responsive-headline">
            I'm {name}
          </motion.h1>
          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {description}
          </motion.h3>
          <hr />
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="social">
            <a href={linkedIn} className="button btn project-btn" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin"></i>LinkedIn
            </a>
            <a href={github} className="button btn github-btn" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>Github
            </a>
          </motion.ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};
