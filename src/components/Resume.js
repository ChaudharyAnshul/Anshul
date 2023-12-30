import React from "react";
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const Resume = ({ data }) => {


  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  if (!data) return null;

  const skillmessage = data.skillmessage;
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
      <p>{work.description}</p>
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
        <span>Issued On: </span><span>{certification.issuedOn}</span> - <a href={certification.link}>view</a>
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
        <span>Published On: </span><span>{publication.issuedOn}</span> - <a href={publication.link}>view</a>
      </p>
      <p>{work.description}</p>
    </motion.div>
  ));

  const skills = data.skills.map((skills) => {
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
        <em>{skills.name}</em>
        <span style={{ width, backgroundColor }} className={className}></span>
      </motion.li>
    );
  });

  return (
    <section id="resume">

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
          
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">{skills}</ul>
            <Button onClick={handleOpenModal} sx={{'&:hover': {color: 'blue',},fontSize:'14px'}}>View &nbsp;More</Button>
            <SkillModel data={data.skillsList} openModal={openModal} handleCloseModal={handleCloseModal} />
          </div>

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

    </section>
  );
};

const SkillModel = ({data, openModal, handleCloseModal }) =>{

  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: {xs: 300, sm:400, md:600, lg:800},
    maxHeight: {xs: 600, sm:650, md:700, lg:800},
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#FFFFF5',
    boxShadow: 24,
    // scrollbarWidth: 'thin',
    // scrollbarColor: '#888 #f4f4f4',
    p: 4,
  };

  const customStyle = {
    margin: 5,
    fontSize: '16px',
    backgroundColor: '#009999',
    color: '#E2E2C9',
  };

  return(
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          {Object.keys(data).map((category) => (
            <div key={category}>
              <Typography id="modal-modal-title" sx={{fontSize: '18px'}} >
                {category}:
              </Typography>
              <Typography id="modal-modal-description">
                {data[category].map((skill, index) => (
                  <Chip key={index} label={skill} color="primary" style={customStyle} />
                ))}
              </Typography>
              <br />
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

