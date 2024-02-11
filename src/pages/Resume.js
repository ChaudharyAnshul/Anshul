import React from "react";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Resume = ({ data }) => {

  if (!data) return null;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const education = data.education.map((education) => (
    <motion.div
      key={education.school}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 1 }}
      className="education-section"
    >
      <h3>{education.school}</h3>
      <p className="info">
        <b>{education.degree}</b> <span>&bull;</span>
        <em className="date">{education.graduated}</em>
      </p>
      <div>GPA: {education.gpa}</div>
      <p>{education.description}</p>
    </motion.div>
  ));

  const work = data.work.map((work) => (
    <motion.div
      key={work.company}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 1 }}
    >
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      {work.description.map((workItem, index) => (
        <div key={index}><span>&bull;</span> {workItem}</div>
      ))}
    </motion.div>
  ));

  const certification = data.certifications.map((certification) => (
    <motion.div
      key={certification.name}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 1 }}
    >
      <h3>{certification.name}</h3>
      <p className="info">
        <span>Issued On: </span><span>{certification.issuedOn}</span> - <a href={certification.link} target="_blank" rel="noreferrer">view</a>
      </p>
      <p>{work.description}</p>
    </motion.div>
  ));

  const publications = data.publications.map((publication) => (
    <motion.div
      key={publication.name}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 1 }}
    >
      <h3>{publication.name}</h3>
      <p className="info">
        <span>Published On: </span><span>{publication.issuedOn}</span> - <a href={publication.link} target="_blank" rel="noreferrer">view</a>
      </p>
    </motion.div>
  ));

  const activities = data.activities.map((activity) => (
    <motion.div
      key={activity.name}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 1 }}
    >
      <h3>{activity.name}</h3>
      <p className="info">
        {activity.title}
        <span>&bull;</span> <em className="date">{activity.years}</em>
      </p>
      {activity.description.map((activityItem, index) => (
        <div key={index}><span>&bull;</span> {activityItem}</div>
      ))}
    </motion.div>
  ));

  const skills = Object.keys(data.skillsList).map((category) => {
    return (
      <div><b>{category}</b>: {data.skillsList[category]}</div> 
    );
  });

  return (
    <section id="resume">
      <Grid container justify="center">
        <Grid item xs={12}>
          <b>
            <Typography align="center" sx={{fontSize: '36px'}}>
              RESUME
            </Typography>
          </b>
        </Grid>
      </Grid>
      <div className="row skill" style={{ marginTop: '30px' }}>
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
          
        </div>

        <div className="nine columns main-col">
            {skills}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">{education}</div>
        </div>
      </div>

      <div className="row certification">
        <div className="three columns header-col">
          <h1>
            <span>Certifications</span>
          </h1>
        </div>

        <div className="nine columns main-col">{certification}</div>
      </div>

      <div className="row publications">
        <div className="three columns header-col">
          <h1>
            <span>Publications</span>
          </h1>
        </div>

        <div className="nine columns main-col">{publications}</div>
      </div>

      <div className="row activities">
        <div className="three columns header-col">
          <h1>
            <span>Activities</span>
          </h1>
        </div>

        <div className="nine columns main-col">{activities}</div>
      </div>

    </section>
  );
};
