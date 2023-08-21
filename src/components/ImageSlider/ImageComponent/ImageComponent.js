import { makeStyles } from '@mui/styles';
import { Button, Grid, Stack, Fab, Box } from "@mui/material";
import AndroidIcon from '@mui/icons-material/Android';
import LanguageIcon from '@mui/icons-material/Language';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import AddIcon from '@mui/icons-material/Add';
import _ from 'lodash';

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
        backgroundColor: "#E0E0E0 !important",
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
    genre: {
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: '0.875rem',
        fontWeight: '500'
    },
    stack_high: {
        marginTop: "15px"
    },
    stack_low: {
        marginTop: "16px",
    }
});

const ImageComponent = (props) => {

    const classes = useStyles();

    return (
        <div className="slider-contain">
            {props.type === "png" && <img src={props.url} alt={props.url} className="img" style={{ position: "absolute", zIndex: -1, width: '100%', height: "100%", opacity: "0.7", borderRadius: "5%" }} />}
            {props.type === "mp4" &&
                <video style={{ position: "absolute", zIndex: -1, width: "100%", minWidth: "100%", minHeight: "100%", objectFit: "cover", opacity: "0.7", borderRadius: "5%" }} autoPlay loop playsInline>
                    <source src={props.url} type="video/mp4" />
                </video>
            }
            <Box
                sx={{
                    padding: "80px 80px 150px 80px",
                }}
            >
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={5}>
                        <Stack direction="row" spacing={2}>
                            {_.map(props.platform, (item, index) => (
                                <Fab key={index} variant="extended" size="small" className={classes.fab_button}>
                                    {item.displayName === 'Android' && <AndroidIcon sx={{ mr: 0.5 }} className={classes.platform_icon} />}
                                    {item.displayName === 'iOS' && <TabletAndroidIcon sx={{ mr: 0.5 }} className={classes.platform_icon} />}
                                    {item.displayName === 'Web' && <LanguageIcon sx={{ mr: 0.5 }} className={classes.platform_icon} />}
                                    <p className={classes.button_text}>{item.displayName}</p>
                                </Fab>
                            ))}
                        </Stack>
                        <Stack className={classes.stack_high}>
                            <h1 className={classes.title}>
                                {props.title}
                            </h1>
                        </Stack>
                        <Stack sx={{ marginTop: "5px" }}>
                            <div className={classes.genre}>by {props.studio}</div>
                        </Stack>
                        <Stack sx={{ marginTop: "20px" }}>
                            <div className={classes.description}>{props.description}</div>
                        </Stack>
                        <Stack direction="row" divider={<p>•</p>} spacing={2} sx={{ marginTop: "35px" }}>
                            {_.map(props.genre, (item, index) => (
                                <div key={index} className={classes.genre} style={{ display: "flex" }}>
                                    {item.displayName}
                                </div>
                            ))}
                        </Stack>
                        <Stack sx={{ marginTop: "35px" }} direction="row" spacing={2}>
                            <Button variant="contained" className={classes.viewgame_button}>view game</Button>
                            <Button variant="contained" className={classes.mygame_button}> <AddIcon />my games</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default ImageComponent;
