import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, Grid, Stack, Button, Card, Collapse } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import RecentlyGames from '../components/FeaturedgameCard/FeaturedgameCard';
import featuredevent from '../data/featuredevent.json';
import recentlyended from '../data/recentlyended.json';
import './Event.css';

const useStyles = makeStyles((theme) => ({
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
    l_title: {
        fontSize: "1.4993rem !important",
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        margin: "0 0 16px 0",
    },
    reward: {
        fontSize: "0.625rem",
        margin: 0,
        letterSpacing: "0.1em",
        lineHeight: "2.66",
        fontWeight: "700",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        color: "rgba(255, 255, 255, 0.5)"
    },
    viewgame_button: {
        color: "white !important",
        fontFamily: "Quattrocento Sans,Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important",
        fontSize: "0.75rem !important",
        fontWeight: "500 !important",
    },
    mygame_button: {
        fontFamily: "Quattrocento Sans,Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important",
        fontSize: "0.75rem !important",
        fontWeight: "500 !important",
    },
    name: {
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: "1rem",
        lineHeight: "1.5"
    },
    description: {
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: "0.8rem",
        lineHeight: "1.43",
        color: "rgba(255, 255, 255, 0.7)"
    },
    time: {
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: "1rem",
        lineHeight: "1.5",
        color: "rgba(255, 255, 255, 0.7)"
    },
    playerCount: {
        paddingLeft: "15px !important",
        fontSize: "0.875rem !important",
        letterSpacing: "0.02666em !important",
        color: "#F2F2F2 !important",
        fontFamily: "Quattrocento Sans, Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important"
    }
}));

const event = featuredevent.events[0];

const Event = () => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const originStartDate = event.startTime;
    const originEndDate = event.endTime;

    const formattedStartDate = new Date(originStartDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }).replace('at', '•');

    const formattedEndDate = new Date(originEndDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }).replace('at', '•');

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <Box
            sx={{
                position: "absolute",
                top: '104px',
                left: '6vw',
                right: '6vw',
                width: "88vw",
            }}
        >
            <Box sx={{ backgroundColor: "rgb(17, 17, 17)", borderRadius: "20px", width: "100%" }}>
                <Grid container>
                    <Grid item md={12} lg={8}>
                        <img src={event.media.url} alt="event" width="100%" height="100%" style={{ borderRadius: "20px" }} />
                    </Grid>
                    <Grid item md={12} lg={4} padding="48px 68px">
                        <Stack direction="row" className={classes.time}>
                            <div>
                                {formattedStartDate}
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <ArrowForwardIcon />
                            &nbsp;&nbsp;&nbsp;
                            <div>
                                {formattedEndDate}
                            </div>
                        </Stack>
                        <Stack marginTop="8px" padding="0" className={classes.l_title}>
                            {event.title}
                        </Stack>
                        <Stack marginTop="24px" padding="0" className={classes.description}>
                            {event.description}
                        </Stack>
                        <Stack marginTop="24px" padding="0">
                            <Stack className={classes.reward}>
                                REWARDS
                            </Stack>
                            <Stack>
                                {event.tournament.prizeInfo}
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={3} marginTop="40px" marginBottom="40px" display="flex" justifyContent="space-between">
                            <Link to={`/events/34ab6f96-d97d-40c3-b2a1-50f17b5d0bb5`} style={{ textDecoration: 'none' }}>
                                <Button variant="outlined" className={classes.viewgame_button}>view events</Button>
                            </Link>
                            <Button variant="contained" className={classes.mygame_button} disabled> join discord now</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Stack marginTop="80px">
                <p className={classes.l_title}>
                    Live and upcoming events
                </p>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Link to={`/events/34ab6f96-d97d-40c3-b2a1-50f17b5d0bb5`} style={{ textDecoration: 'none' }}>
                            <Card
                                sx={{ position: "relative", borderRadius: "13px", backgroundColor: "rgba(1,1,1,1)" }}>
                                <div className={classes.root}></div>
                                <CardMedia
                                    sx={{ aspectRatio: '16 / 9', width: "100%" }}
                                    image={event.media.url}
                                />
                                <CardContent>
                                    <Typography className={classes.name} gutterBottom variant="body1" component="div">
                                        {event.title}
                                    </Typography>
                                    <Typography variant="body2" >
                                        {event.tournament.prizeInfo}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className={classes.playerCount} size="small">+ 87 COING</Button>
                                </CardActions>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </Stack>
            <Stack marginTop="80px" marginBottom="80px">
                <p className={classes.l_title}>
                    Recently Added
                </p>
                <Grid container spacing={3}>
                    {_.map(_.take(recentlyended.events, 4), (item, index) => (
                        <Grid item xs={12} sm={6} lg={3}>
                            <Link to={`/events/${item.tournament.id}`} style={{ textDecoration: 'none' }}>
                                <RecentlyGames
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
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Grid sx={{ paddingTop: "16px" }} container spacing={3}>
                        {_.map(_.slice(recentlyended.events, 4), (item, index) => (
                            <Grid item xs={12} sm={6} lg={3}>
                                <Link to={`/events/${item.tournament.id}`} style={{ textDecoration: 'none' }}>
                                    <RecentlyGames
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
                </Collapse>
                <Grid item lg={12} sx={{ textAlign: "center", marginTop: "20px" }}>
                    <Button sx={{ color: "white" }} onClick={handleClick}>
                        {open ? "VIEW LESS ▲ " : "VIEW ALL ▼"}
                    </Button>
                </Grid>
            </Stack>
        </Box >
    );
};

export default Event;
