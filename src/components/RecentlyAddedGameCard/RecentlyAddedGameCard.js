import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const checkTranslate3dValue = () => {
    const transformValue = document.getElementsByClassName("menu-wrapper--inner")[2].style.transform

    const matches = transformValue.match(/translate3d\(([-+]?[0-9]*\.?[0-9]+)px/);
    const xValue = parseFloat(matches[1]);
    console.log("hihihi:", xValue)
    if (xValue > 0) {
        document.getElementsByClassName("menu-wrapper--inner")[2].style.transform = 'translate3d(0px, 0px, 0px)';
    }
}

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
    }
});

export default function MediaCard(props) {

    const classes = useStyles();

    return (
        <>
            {props.title !== "all" && <div style={{ position: "relative" }}>
                <div onMouseOver={checkTranslate3dValue} onClick={checkTranslate3dValue} className={classes.root}></div>
                <Card
                    sx={{ width: "230px", borderRadius: "3px", backgroundColor: "transparent" }}>
                    <CardMedia
                        sx={{ aspectRatio: '16 / 16', width: "100%" }}
                        image={props.imageUrl}
                    />
                </Card>
                <p className={classes.title}>{props.title}</p>
            </div>}
            {props.title === "all" && <div style={{ position: "relative" }}>
                <div onMouseOver={checkTranslate3dValue} onClick={checkTranslate3dValue} className={classes.root}></div>
                <Card
                    sx={{ width: "230px", borderRadius: "3px", backgroundColor: "transparent" }}>
                    <Stack sx={{ textAlign: "center", alignItems: "center", aspectRatio: '16 / 16', paddingTop: "40%" }}>
                        <ArrowForwardIcon />
                        <p style={{ width: "100%", margin: 0 }}>All GAMES</p>
                    </Stack>
                </Card>
                <p className={classes.title} style={{ color: "black" }}>dd</p>
            </div>}
        </>
    );
}