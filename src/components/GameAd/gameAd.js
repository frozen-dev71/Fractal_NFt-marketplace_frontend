import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Button, Chip, Stack, Fab } from "@mui/material";
import AndroidIcon from '@mui/icons-material/Android';
import LanguageIcon from '@mui/icons-material/Language';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import AddIcon from '@mui/icons-material/Add';
import _ from "lodash";
import battle_data from '../../data/battletabs.json';

const useStyles = makeStyles({
    fab_button: {
        textTransform: 'none !important',
        backgroundColor: '#171415 !important',
        '&:hover': {
            backgroundColor: '#2E2E2E !important',
        },
        fontSize: "12px !important"
    },
    button_text: {
        color: 'white',
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
    },
    title: {
        fontSize: '3.125rem',
        fontWeight: 700,
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        margin: 0
    },
    description: {
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: "1rem",
        fontWeight: 500
    },
    viewgame_button: {
        backgroundColor: "#F2059F !important", 
        color: "white !important",
        '&:hover': {
            backgroundColor: '#B20375 !important',
        },
        fontFamily: "Quattrocento Sans,Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important",
        fontSize: "0.875rem !important",
        fontWeight: "700 !important",
        width: "232px",
    },
    mygame_button: {
        backgroundColor: "#E0E0E0 !important" ,
        '&:hover': {
            backgroundColor: '#616161 !important',
        },
        fontFamily: "Quattrocento Sans,Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important",
        fontSize: "0.875rem !important",
        fontWeight: "700 !important",
        width: "232px", 
    },
    platform_icon: {
        fontSize: '15px !important',
        fontWeight: '500 !important',
        color: 'white !important',
    },
    genre:{
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: '0.875rem',
        fontWeight: '500'
    },
    stack_high: {
        marginTop: "40px"
    },
    stack_low: {
        marginTop: "16px",
    }
  });

const GameAd = () => {
    const classes = useStyles();
    const [gameAdvert, setgameAdvert] = useState([]);

    useEffect(() => {
        setgameAdvert(battle_data.data);
    }, []);

    const platform = gameAdvert.platform
    const genre = gameAdvert.genre

    return (
        <div>
            <Stack direction="row" spacing={2}>
                {_.map(platform, (item, index) => (
                    <Fab key = {index} variant = "extended" size="small" className={classes.fab_button}>
                        {item.displayName === 'Android' && <AndroidIcon sx = {{mr: 0.5}} className = {classes.platform_icon} />}
                        {item.displayName === 'iOS' && <TabletAndroidIcon sx = {{mr: 0.5}} className = {classes.platform_icon} />}
                        {item.displayName === 'Web' && <LanguageIcon sx = {{mr: 0.5}} className = {classes.platform_icon} />}
                        <p className = {classes.button_text}>{item.displayName}</p>
                    </Fab>
                ))}
            </Stack>
            <Stack className = {classes.stack_high}>
                <h1 className = {classes.title}>
                    {gameAdvert.title}
                </h1>
            </Stack>
            <Chip icon = {<VerifiedOutlinedIcon />} label="VERIFIED" sx = {{ marginTop: "40px", minWidth: '100px', backgroundColor: "#304FFE", fontSize: "0.8125rem", fontWeight: "500", fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important"}} />
            <Stack  className = {classes.stack_low}> 
                <div className = {classes.description}>{gameAdvert.description}</div>
            </Stack>
            <Stack direction="row"  divider={<p>•</p>} spacing={2} className = {classes.stack_low}>
                {_.map(genre, (item, index) => (
                    <div key = {index} className = {classes.genre} style = {{display: "flex"}}>
                        {item.displayName} 
                    </div>
                ))}
            </Stack>
            <Stack  className = {classes.stack_high} direction="row" spacing={2}>
                <Button variant="contained" className = {classes.viewgame_button}>view game</Button>
                <Button variant="contained" className = {classes.mygame_button}> <AddIcon />my games</Button>
            </Stack>
        </div>
    )     
}

export default GameAd;
