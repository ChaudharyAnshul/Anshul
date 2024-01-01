import React from "react";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import { getIconByString } from './components/IconPicker';

export const About = ({ data }) => {

  if (!data) return null;

  const { name, image, bio1, bio2, address, phone, email } = data;
  const { street, city, state, zip } = address;
  const profilepic = "images/" + image;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const networks = data.social.map((network) => {

    const iconComponent = getIconByString(network.icon);
    return(
      <li key={network.name}>
        <a href={network.url} target="_blank" rel="noreferrer">
          {iconComponent}
        </a>
      </li>
    );
  });

  return (
    <section id="about">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <div className="row">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
            <Grid item xs={12} md={3}>
              <img
                className="profile-pic"
                src={profilepic}
                alt="Anshul Chaudhary Profile Pic"
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <h2>About Me</h2>
              <p>
                {bio1}
                <br />
                {bio2}
              </p>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
                <Grid className="contact-details" item xs={12} md={6}>
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
                </Grid>
                <Grid className="socials" item xs={12} md={6}
                  sx={{
                    width: '100%',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: "18px"
                  }}
                >
                  <ul className="social-links">{networks}</ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div> 
      </motion.div>
    </section>
  );
};