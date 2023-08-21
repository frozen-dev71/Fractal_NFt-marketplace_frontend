import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    cursor: 'pointer',
    transition: 'background-color .5s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  body: {
    position: "absolute",
    textAlign: "center",
    left: "50%",
    top: "50%",
    minWidth: "150px",
    margin: 0,
    width: "100px",
    fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
    fontWeight: "600 !important",
    fontSize: "1.5rem",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
  }
});

export default function MediaCard(props) {

  const classes = useStyles();

  return (
    <>
      <div style={{ position: "relative" }}>
        <Card className={classes.root}
          sx={{ position: "relative", borderRadius: "3px", backgroundColor: "transparent" }}>
          <CardMedia
            sx={{ aspectRatio: '16 / 9', width: "100%", opacity: 0.5 }}
            image={props.imageUrl}
          />
        </Card>
        <h5 className={classes.body}>{props.title}</h5>
      </div>
    </>
  );
}