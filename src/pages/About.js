import React from "react";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import { getIconByString } from './components/IconPicker';
import Typography from '@mui/material/Typography';

export const About = ({ data }) => {

  if (!data) return null;

  const { image, bio1, bio2, bio3, address, phone, email, portfolio, degree } = data;
  const { city, state } = address;
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

  const skills = data.topSkills.map((skills) => {
    const backgroundColor = "#009999";
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <motion.li
        key={skills.name}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
      >
        <div>{skills.name}</div>
        <span style={{ width, backgroundColor }} className={className}></span>
      </motion.li>
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
          <Grid container rowSpacing={1} columnSpacing={{ sx: 1, sm: 1, md: 2 }} sx={{padding: '10px'}}>
            <Grid item xs={12} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
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
                <br /><br />
                {bio2}
                <br /><br />
                {bio3}
              </p>
              <Grid container rowSpacing={1} columnSpacing={{ sx: 1, sm: 1, md: 2 }}>
                <Grid className="contact-details" item xs={12} sm={12} md={6}>
                  <h2>Contact</h2>
                  <p className="address">
                    <span>
                      <b>Degree:</b> {degree}
                    </span>
                    <br />
                    <span>
                    <b>Location:</b> {city}, {state}
                    </span>
                    <br />
                    <span>
                    <b>Phone:</b> {phone}
                    </span>
                    <br />
                    <span>
                    <b>Email:</b> {email}
                    </span>
                    <br />
                    <span>
                    {/* <b>Portfolio:</b> <a href="" target="_blank" rel="noreferrer">port.chaudharyanshul.com</a> */}
                    </span>
                  </p>
                  <Typography
                    sx={{
                      width: '100%',
                      textAlign: 'left',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'left',
                      justifyContent: 'left',
                    }}>
                    <a href="#resume"><button style={{borderRadius:'20px', margin: '10px'}}>Resume</button></a>
                    <a href="#contact"><button style={{borderRadius:'20px', margin: '10px'}}>Hier Me</button></a>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <h2>Top Skills:</h2>
                  <div className="bars">
                    <ul className="skills">{skills}</ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid className="socials" item xs={12} md={12}
                sx={{
                  width: '100%',
                  textAlign: 'cemter',
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
        </div> 
      </motion.div>
    </section>
  );
};