import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';


export const Portfolio = ({ data }) => {
  if (!data) return null;

  const works = data.work.map((work) => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <BasicCard data={work}/>
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
      </div>
    </section>
  );
};

const BasicCard = ({data}) => {

  const imageURL = "images/portfolio/" + data.image;

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
        alt="Paella dish"
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
          <a  className="portfolio-a" href={data.url}>view <i className="fa fa-arrow-right"></i></a>
        </Typography>
      </CardContent>
    </Item>
  );
}