import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Fab, Grid, Paper, Avatar } from "@mui/material";
import AndroidIcon from '@mui/icons-material/Android';
import LanguageIcon from '@mui/icons-material/Language';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import WindowIcon from '@mui/icons-material/Window';
import AddIcon from '@mui/icons-material/Add';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { makeStyles } from '@mui/styles';
import _ from 'lodash';
import FeaturedgameCard from '../components/FeaturedgameCard/FeaturedgameCard';
import cs from '../data/cs.json';

const useStyles = makeStyles((theme) => ({
    background: {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        aspectRatio: "16/9",
        minWidth: "600px",
        minHeight: "600px",
    },
    l_title: {
        fontSize: "1.4993rem",
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        margin: "0 0 16px 0",
    },
    featurecard: {
        width: "100%",
        height: "100%",
    },
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
        fontSize: "0.8rem !important",
        fontWeight: "700 !important",
        width: "232px",
    },
    mygame_button: {
        backgroundColor: "#E0E0E0 !important",
        '&:hover': {
            backgroundColor: '#616161 !important',
        },
        fontFamily: "Quattrocento Sans,Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important",
        fontSize: "0.8rem !important",
        fontWeight: "700 !important",
        width: "232px",
    },
    platform_icon: {
        fontSize: '15px !important',
        fontWeight: '500 !important',
        color: 'white !important',
    },
    genre: {
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: '0.875rem',
        fontWeight: '500'
    },
    stack_high: {
        marginTop: "40px"
    },
    stack_low: {
        marginTop: "16px",
    },

    name: {
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: "1rem",
        lineHeight: "1.5"
    },
    studio: {
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: "1rem",
        lineHeight: "1.5",
        color: "rgba(255, 255, 255, 0.7)"
    },
}));

const GameDetail = (props) => {

    const classes = useStyles();
    const [gameAdvert, setgameAdvert] = useState([]);

    useEffect(() => {
        setgameAdvert(cs);
    }, []);

    const platform = props.data.platform
    const genre = gameAdvert.genre

    return (
        <div>
            <Box
                sx={{
                    position: "absolute",
                    top: "0%",
                    left: "0%",
                    paddingBottom: "45vh",
                }}
            >
                <img src={cs.banner.url} className={classes.background} style={{ opacity: 0.5 }} alt="battle" />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    top: '180px',
                    left: '6vw',
                    right: '6vw',
                    width: "88vw",
                }}
            >
                <Grid container spacing={3}>
                    <Grid minWidth={400} item xs={12} sm={6} md={4}>
                        <Stack direction="row" spacing={2}>
                            {_.map(platform, (item, index) => (
                                <Fab key={index} variant="extended" size="small" className={classes.fab_button}>
                                    {item.displayName === 'Android' && <AndroidIcon sx={{ mr: 0.5 }} className={classes.platform_icon} />}
                                    {item.displayName === 'Windows' && <WindowIcon sx={{ mr: 0.5 }} className={classes.platform_icon} />}
                                    {item.displayName === 'iOS' && <TabletAndroidIcon sx={{ mr: 0.5 }} className={classes.platform_icon} />}
                                    {item.displayName === 'Web' && <LanguageIcon sx={{ mr: 0.5 }} className={classes.platform_icon} />}
                                    <p className={classes.button_text}>{item.displayName}</p>
                                </Fab>
                            ))}
                        </Stack>
                        <Stack className={classes.stack_high}>
                            <h1 className={classes.title}>
                                {props.data.name}
                            </h1>
                        </Stack>
                        <Stack sx={{ marginTop: "35px" }}>
                            <div className={classes.description}>{gameAdvert.description}</div>
                        </Stack>
                        <Stack direction="row" divider={<p>•</p>} spacing={2} className={classes.stack_low}>
                            {_.map(genre, (item, index) => (
                                <div key={index} className={classes.genre} style={{ display: "flex" }}>
                                    {item.displayName}
                                </div>
                            ))}
                        </Stack>
                        <Stack className={classes.stack_high} direction="row" spacing={2}>
                            <Button variant="contained" className={classes.viewgame_button}><SportsEsportsIcon />&nbsp;&nbsp;Launch Games</Button>
                            <Button variant="contained" className={classes.mygame_button}> <AddIcon />my games</Button>
                        </Stack>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '60px' }}>
                    <h5 className={classes.l_title}>Featured events</h5>
                </div>
                <Grid container spacing={3}>
                    {_.map(cs.events, (item, index) => (
                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to={`/events/${item.tournament.id}`} style={{ textDecoration: 'none' }}>
                                <FeaturedgameCard
                                    className={classes.featurecard}
                                    key={index}
                                    imageUrl={item.media.url}
                                    title={item.title}
                                    prizeInfo={item.tournament.prizeInfo}
                                    playerCount={item.tournament.playerCount}
                                />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <div style={{ marginTop: '60px' }}>
                    <h5 className={classes.l_title}>About the game</h5>
                </div>
                <Grid container spacing={3} sx={{ marginTop: "40px" }}>
                    <Grid item sx={12} md={9}>
                        <Stack direction="row" spacing={3}>
                            {_.map(cs.genre, (item, index) => (
                                <Link to={`/games/browser/?genre=${item.displayName}`} style={{ textDecoration: 'none' }}>
                                    <Paper sx={{ width: "120px", height: "120px", borderRadius: "15px", border: "0.5px solid grey", background: "rgb(17, 17, 17)" }}>
                                        <Stack sx={{ paddingTop: "20px", display: "flex", alignItems: "center" }}>
                                            <Avatar src={item.imageUrl} />
                                            <p style={{ color: "white" }}>
                                                {item.displayName}
                                            </p>
                                        </Stack>
                                    </Paper>
                                </Link>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item sx={12} md={3}>
                        <Stack padding="24px 20px" sx={{ border: "1px solid rgba(255, 255, 255, 0.23)", borderRadius: "16px" }}>
                            <Stack display="flex" alignItems="center" direction="row" justifyContent="space-between">
                                <p className={classes.studio} style={{ margin: "8px 0px" }}>Studio</p>
                                <p className={classes.name} style={{ margin: "8px 0px" }}>{cs.studio}</p>
                            </Stack>
                            <Stack direction="row" display="flex" alignItems="center" justifyContent="space-between">
                                <p className={classes.studio} style={{ margin: "8px 0px" }}>Platform</p>
                                <Stack className={classes.name} direction="row" divider={<p>,</p>} spacing={1}>
                                    {cs.platform.length && _.map(cs.platform, (item, index) => (
                                        <div key={index} style={{ display: "flex" }}>
                                            {item.displayName}
                                        </div>
                                    ))}
                                    {cs.platform.length === 0 &&
                                        <div>
                                            Coming Soon
                                        </div>
                                    }
                                </Stack>
                            </Stack>
                            <Stack display="flex" alignItems="center" direction="row" justifyContent="space-between">
                                <p className={classes.studio} style={{ margin: "8px 0px" }}>Status</p>
                                <p className={classes.name} style={{ margin: "8px 0px" }}>{cs.statusDisplayName}</p>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div >
    );
};

export default GameDetail;
