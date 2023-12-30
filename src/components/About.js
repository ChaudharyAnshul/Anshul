import React from "react";
import { motion } from "framer-motion";

export const About = ({ data }) => {

  if (!data) return null;

  const { name, image, bio1, bio2, address, phone, email, resumedownload } = data;
  const { street, city, state, zip } = address;
  const profilepic = "images/" + image;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section id="about">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p><div>{bio1}</div><div>{bio2}</div></p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city}, {state} {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                {/* <p>
                  <a href={resumedownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};