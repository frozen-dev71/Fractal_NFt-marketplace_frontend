import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
  title: {
    fontSize: "1rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.5 !important",
    fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
    whiteSpace: "nowrap",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  prizeInfo: {
    fontSize: "0.875rem !important",
    fontWeight: "500 !important",
    lineHeight: "1.43 !important",
    color: "white !important",
    fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
  },
  playerCount: {
    fontSize: "0.875rem !important",
    letterSpacing: "0.02666em !important",
    color: "#F2F2F2 !important",
    fontFamily: "Quattrocento Sans, Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important"
  }
});

export default function MediaCard(props) {

  const classes = useStyles();

  return (
    <>
      <Card
        sx={{ position: "relative", borderRadius: "13px", backgroundColor: "rgba(1,1,1,1)" }}>
        <div className={classes.root}></div>
        <CardMedia
          sx={{ aspectRatio: '16 / 9', width: "100%" }}
          image={props.imageUrl}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="body1" component="div">
            {props.title}
          </Typography>
          <Typography className={classes.prizeInfo} variant="body2" color="text.secondary">
            {props.prizeInfo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.playerCount} size="small">{props.playerCount} Players</Button>
        </CardActions>
      </Card>
    </>
  );
}