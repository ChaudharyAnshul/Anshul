import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tabs from '@mui/material/Tabs';
import IconButton from '@mui/material/IconButton';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from '@mui/material';
import { FaGithub } from "react-icons/fa";
import { getIconByString } from './components/IconPicker';

export const Portfolio = ({ data }) => {
  if (!data) return null;

  let id = 0;
  const works = data.work.map((work) => {
    return (
        <Grid key={id++} item xs={12} sm={12} md={6} lg={4}>
            <WorkCard data={work}/>
        </Grid>
    );
  });

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>What I Do</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {works}
              </Grid>
            </Box>
          </div>
        </div>
        <div className="twelve columns collapsed" style={{ marginTop: "70px" }}>
          <h1>Project</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <ProjectTabs data={data.projects} />
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkCard = ({data}) => {

  const imageURL = "images/work/" + data.image;

  const Item = styled(Card)({
    backgroundColor: '#373233', 
    textAlign: 'center',
    color: '#fff',
    minHeight: '200px',
    minWidth: '275px',
    letterSpacing: '1px'
  });

  return (
    <Item>
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Image"
      />
      <CardContent>
        <Typography variant="div" component="h3" sx={{color: "#fff"}}>
          {data.title}
        </Typography>
        <Typography sx={{ mb: 1.5, }} color="text.secondary">
          <br />
        </Typography>
        <Typography variant="h6" sx={{ color: "#999991", minHeight:50, fontSize: 18 }}>
          {data.description}
        </Typography>
        <Typography sx={{mt:2, fontSize:"15px"}}>
          <a  className="portfolio-a" href={data.url} target="_blank" rel="noreferrer">view <i className="fa fa-arrow-right"></i></a>
        </Typography>
      </CardContent>
    </Item>
  );
}

const ProjectTabs = ({data}) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isTabSelected = (tabValue) => tabValue === value;

  const tabStyle = (tabValue) => ({
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: "18px",
    color: isTabSelected(tabValue) ? 'white' : 'black',
    backgroundColor: isTabSelected(tabValue) ? '#EEEED0' : '#373233',
    padding: "0px",
    margin:  "0 10px 0 10px",
    outline: null
  });

  const tabPanels = Object.keys(data).map((page, pageIndex) => {
    let pageId = "" + (pageIndex+1);
    return (
      <TabPanel key={pageId} value={pageId}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            data[page].map((project, projectIndex) => {
              return (
                <Grid key={projectIndex} item xs={12} sm={12} md={6} lg={4}>
                  <ProjectCard data={project}/>
                </Grid>
              );
            })
          }
        </Grid>
      </TabPanel>
    );
  });

  const tabs = Object.keys(data).map((page, pageIndex) => {
    let pageId = "" + (pageIndex+1);
    return (
      <Tab key={pageId} value={pageId} label={pageId} sx={tabStyle({pageId})} />
    );
  });

  return (
    <Box 
    sx={{
      width: '100%',
      textAlign: 'center', // Center content horizontally
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Center content vertically
      justifyContent: 'center', // Center content vertically
      color: '#fff', // Change text color for this tab
      fontSize: "18px"
    }}
    >
      <TabContext value={value}>
        {tabPanels}
        <Tabs
          value={value}
          onChange={handleChange}
        >
          {tabs}
        </Tabs>
        
      </TabContext>
    </Box>
  );
}

const ProjectCard = ({ data }) => {

  const Item = styled(Card)({
    backgroundColor: '#373233', 
    textAlign: 'center',
    color: '#fff',
    minHeight: '200px',
    minWidth: '275px',
    letterSpacing: '1px'
  });

  const LeftIcon = styled(IconButton)({
    fontSize: '26px'
  });

  const RightIcon = styled(Link)({
    marginLeft: 'auto'
  });

  const imageURL = "images/projects/" + data.image;

  return (
    <Item>
      <CardHeader
        title={data.title}
        titleTypographyProps={{variant:'h4' }}
        sx={{minHeight: 90}}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Image"
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: "#999991", minHeight:50, fontSize: 16 }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {
          data.techStack.map((tech, techIndex) => {
            const iconComponent = getIconByString(tech);
            return (
              <LeftIcon key={techIndex} disabled>
                {iconComponent}
              </LeftIcon>
            );
          })
        }
        <RightIcon href={data.url} target='_blank'> 
          <IconButton sx={{fontSize:"26px"}}>
            <FaGithub />
            <MdOutlineKeyboardArrowRight color='#fff'/>
          </IconButton>
        </RightIcon>
      </CardActions>
    </Item>
  );
}