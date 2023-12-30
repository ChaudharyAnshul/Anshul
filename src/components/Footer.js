import React from "react";
import { motion } from "framer-motion";

export const Footer = ({ data }) => {
  if (!data) return null;

  const networks = data.social.map((network) => (
    <li key={network.name}>
      <a href={network.url} target="_blank" rel="noreferrer">
        <i className={network.className}></i>
      </a>
    </li>
  ));

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <footer>
      <div className="row">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
          className="twelve columns"
        >
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2024 Anshul Chaudhary</li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};


