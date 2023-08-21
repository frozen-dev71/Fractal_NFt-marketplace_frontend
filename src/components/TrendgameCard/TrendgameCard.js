import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const useStyles = makeStyles({
  root: {
    width: "100%",
    borderRadius: "3px",
    height: "105%",
    position: "absolute",
    cursor: 'pointer',
    transition: 'background-color .5s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  title: {
    paddingLeft: "10px",
    fontSize: "1rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.5 !important",
    fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
  },
  body1: {
    width: 0,
    height: 0,
    color: "#000 !important",
    WebkitTextStroke: '1.5px white !important',
    fontFamily: "Inter, sans-serif !important",
    fontSize: "8.75rem !important",
    fontWeight: "700 !important",
    letterSpacing: "-8px !important",
    lineHeight: "1 !important",
    transform: "translate(-40px, -175px)"
  }
});

// const checkTranslate3dValue = () => {

//   const transformValue = document.getElementsByClassName("menu-wrapper--inner")[0].style.transform

//   const matches = transformValue.match(/translate3d\(([-+]?[0-9]*\.?[0-9]+)px/);
//   const xValue = parseFloat(matches[1]);
//   console.log("hihihi:", xValue)
//   if (xValue > 0) {
//     document.getElementsByClassName("menu-wrapper--inner")[0].style.transform = 'translate3d(0px, 0px, 0px)';
//   }
// }

export default function MediaCard(props) {

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const classes = useStyles();

  return (
    <>

      <div style={{ position: "relative" }}>
        <div className={classes.root}>
          {/* <Link to={`/${props.url}`} style={{ textDecoration: 'none', color: "white" }} onClick={handleLinkClick}>
            <div style={{ width: "100%", height: "100%", backgroundColor: "transparent" }} />
          </Link> */}
        </div>
        <Card
          sx={{ width: "200px", borderRadius: "3px", backgroundColor: "transparent" }}>
          <CardMedia
            sx={{ aspectRatio: '16 / 16', width: "100%" }}
            image={props.imageUrl}
          />
        </Card>
        <p className={classes.title}>{props.title}</p>
      </div>
      <Typography className={classes.body1} variant='body1'>
        {props.trend}
      </Typography>
    </>
  );
}