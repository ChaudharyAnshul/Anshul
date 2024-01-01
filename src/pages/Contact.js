import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import validator from "validator";

export const Contact = ({ data }) => {

  const form = useRef();

  if (!data) return null;

  const {
    name,
    address: { street, city, state, zip },
    phone,
    email,
    contactmessage,
  } = data;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if(!validator.isEmail(form.current.contactEmail.value)){
      alert("Please enter a valid email to hear back. Thank you!");
    } else{
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
          alert("Thanks for reaching out, I'll you contact ASAP.");
          e.target.reset();
        }, (error) => {
          alert("Could not send Email at the moment, please reachout on the details below. Thank you!");
          console.log(error.text);
        });
    }
  };

  return (
    <section id="contact">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{contactmessage}</p>
          </div>
        </div>
      </motion.div>

      <div className="row">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="eight columns"
        >
          <form ref={form} onSubmit={sendEmail} id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactSubject">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="contactMessage">
                  
                </label>
                <input type="submit" value="Send" className="submit"/>
              </div>
            </fieldset>
          </form>
        </motion.div>

        <motion.aside
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="four columns footer-widgets"
        >
          <div className="widget widget_contact">
            <h4>Contact Details</h4>
            <p className="address">
              {name}
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
              <br />
              <span>{email}</span>
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

