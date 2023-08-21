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
  }
});

export default function MediaCard(props) {

  const classes = useStyles();

  return (
    <>
      <Card
        sx={{ position: "relative", borderRadius: "3px", backgroundColor: "transparent" }}>
        <div className={classes.root}></div>
        <CardMedia
          sx={{ aspectRatio: '16 / 24', width: "100%" }}
          image={props.imageUrl}
        />
      </Card>
    </>
  );
}