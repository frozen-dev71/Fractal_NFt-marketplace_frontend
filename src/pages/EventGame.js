import React from 'react'
import { Box, Grid, Stack, Button, Paper, Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AddIcon from '@mui/icons-material/Add';
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
        fontSize: "1.75rem !important",
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        margin: "0 0 16px 0",
    },
    reward: {
        fontSize: "0.5rem",
        margin: 0,
        letterSpacing: "0.1em",
        lineHeight: "1.66",
        fontWeight: "700",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        color: "rgba(255, 255, 255, 0.5)"
    },
    viewgame_button: {
        backgroundColor: "#F2059F !important",
        color: "white !important",
        '&:hover': {
            backgroundColor: '#B20375 !important',
        },
        fontFamily: "Quattrocento Sans,Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important",
        fontSize: "0.875rem !important",
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
        fontSize: "0.9rem",
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
    },
    playerCount: {
        paddingLeft: "15px !important",
        fontSize: "0.875rem !important",
        letterSpacing: "0.02666em !important",
        color: "#F2F2F2 !important",
        fontFamily: "Quattrocento Sans, Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important"
    }
}));


const Event = (props) => {

    const classes = useStyles();

    const originStartDate = props.data.startTime;
    const originEndDate = props.data.endTime;

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
            <Box>
                <Box sx={{ width: "100%", position: "relative" }} minHeight="520px" overflow="hidden" >
                    {props.data.project.banner.type === "png" && <img src={props.data.project.banner.url} alt="event" style={{ position: "absolute", zIndex: -1, width: "100%", height: "100%", objectFit: "cover", opacity: "0.6" }} />}
                    {props.data.project.banner.type === "jpeg" && <img src={props.data.project.banner.url} alt="event" style={{ position: "absolute", zIndex: -1, width: "100%", height: "100%", objectFit: "cover", opacity: "0.6" }} />}
                    {props.data.project.banner.type === "mp4" &&
                        <video style={{ position: "absolute", zIndex: -1, width: "100%", minWidth: "100%", minHeight: "100%", objectFit: "cover", opacity: "0.7" }} autoPlay loop playsInline>
                            <source src={props.data.project.banner.url} type="video/mp4" />
                        </video>
                    }
                </Box>
                <Box sx={{ marginTop: "-190px", padding: "0px 70px 20px 70px" }} >
                    <Stack marginBottom="5px" className={classes.l_title}>
                        {props.data.title}
                    </Stack>
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
                    <Box sx={{ marginTop: "40px", marginBottom: "100px" }}>
                        <Grid container>
                            <Grid item xs={12} md={8} >
                                <Stack direction="row" spacing={3}>
                                    <Button variant="contained" className={classes.viewgame_button}><AddIcon />&nbsp;I AM INTERESTED</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Stack sx={{ display: "flex", justifyContent: "space-between" }} direction="row" spacing={2}>
                                    <Paper sx={{ background: "rgba(18, 18, 18, 0.89)", borderRadius: "25px" }}>
                                        <Stack direction="row" spacing={1} sx={{ display: "flex", alignItems: "center", padding: "4px 20px 4px 8px" }}>
                                            <Stack>
                                                <Avatar sx={{ color: "rgba(255, 255, 255, 0.56)", backgroundColor: "rgba(255, 255, 255, 0.2)", width: "27px", height: "27px", textAlign: "center" }}>
                                                    <EmojiEventsOutlinedIcon sx={{ width: "70%", height: "70%" }} />
                                                </Avatar>
                                            </Stack>
                                            <Stack>
                                                <p className={classes.reward} style={{ margin: 0 }}>
                                                    PRIZE POOL
                                                </p>
                                                <p className={classes.name} style={{ margin: 0 }}>
                                                    {props.data.tournament.prizeInfo}
                                                </p>
                                            </Stack>
                                        </Stack>
                                    </Paper>
                                    <Paper sx={{ background: "rgba(18, 18, 18, 0.89)", borderRadius: "25px" }}>
                                        <Stack direction="row" spacing={1} sx={{ display: "flex", alignItems: "center", padding: "4px 20px 4px 8px" }}>
                                            <Stack>
                                                <Avatar sx={{ color: "rgba(255, 255, 255, 0.56)", backgroundColor: "rgba(255, 255, 255, 0.2)", width: "27px", height: "27px", textAlign: "center" }}>
                                                    <EmojiEventsOutlinedIcon sx={{ width: "70%", height: "70%" }} />
                                                </Avatar>
                                            </Stack>
                                            <Stack>
                                                <p className={classes.reward} style={{ margin: 0 }}>
                                                    TOTAL INTERESTED
                                                </p>
                                                <p className={classes.name} style={{ margin: 0 }}>
                                                    114
                                                </p>
                                            </Stack>
                                        </Stack>
                                    </Paper>
                                    <Paper sx={{ background: "rgba(18, 18, 18, 0.89)", borderRadius: "25px" }}>
                                        <Stack direction="row" spacing={1} sx={{ display: "flex", alignItems: "center", padding: "4px 20px 4px 8px" }}>
                                            <Stack>
                                                <Avatar sx={{ color: "rgba(255, 255, 255, 0.56)", backgroundColor: "rgba(255, 255, 255, 0.2)", width: "27px", height: "27px", textAlign: "center" }}>
                                                    <EmojiEventsOutlinedIcon sx={{ width: "70%", height: "70%" }} />
                                                </Avatar>
                                            </Stack>
                                            <Stack>
                                                <p className={classes.reward} style={{ margin: 0 }}>
                                                    STARTS IN
                                                </p>
                                                <p className={classes.name} style={{ margin: 0 }}>
                                                    5hr, 15m, 17s
                                                </p>
                                            </Stack>
                                        </Stack>
                                    </Paper>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Box >
            </Box>
        </Box >
    );
};

export default Event;
