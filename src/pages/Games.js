import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Grid, Stack } from "@mui/material";
import { makeStyles } from '@mui/styles';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Genres from '../components/Genres/Geners';
import genres from '../data/genres.json';
import featured from '../data/featured.json';
import playlist from '../data/playlist.json';
import PlaylistgameCard from '../components/PlaylistgameCard/PlaylistgameCard';
import FeaturedgameCard from '../components/FeaturedgameCard/FeaturedgameCard';
import FeaturedGames from '../components/HorizantalScrollbar/FeaturedScrollbar';
import AnticipatedGamres from '../components/HorizantalScrollbar/AnticipatedScrollbar';
import RecentlyAddedScrollbar from '../components/HorizantalScrollbar/RecentlyAddedScrollbar';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
    l_title: {
        fontSize: "1.4993rem",
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        margin: "0 0 16px 0",
    }
}));

const Games = () => {

    const classes = useStyles();

    return (
        <Box
            sx={{
                position: "absolute",
                top: '64px',
                left: '6vw',
                right: '6vw',
                width: "88vw",
                paddingBottom: "100px"
            }}
        >
            <ImageSlider />
            <Grid container wrap="nowrap" spacing={2} sx={{ marginTop: "80px", overflow: 'auto', overflowX: "hidden", overflowY: "hidden" }}>
                {_.map(_.take(genres.genres, 4), (item, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                        <Genres
                            key={index}
                            imageUrl={item.imageUrl}
                            title={item.displayName}
                        />
                    </Grid>
                ))}
                <Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                    <a href="/games/browser" style={{ color: "white" }}>
                        <Genres
                            key="other"
                            title="EXPLORE ALL GAMES"
                        />
                    </a>
                </Grid>
            </Grid>
            <Stack sx={{ marginTop: '80px' }}>
                <h5 className={classes.l_title}>Featured games</h5>
            </Stack>
            <FeaturedGames />
            <Stack sx={{ marginTop: '80px' }}>
                <h5 className={classes.l_title}>Most Anticipated</h5>
            </Stack>
            <AnticipatedGamres />
            <div style={{ marginTop: '60px' }}>
                <h5 className={classes.l_title}>Featured events</h5>
            </div>
            <Grid container spacing={3}>
                {_.map(featured.events, (item, index) => (
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
            <Stack sx={{ marginTop: '60px' }}>
                <h5 className={classes.l_title}>Featured Playlists</h5>
            </Stack>
            <Grid container spacing={4}>
                {_.map(playlist.playlists, (item, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={12 / 5} >
                        <PlaylistgameCard
                            key={index}
                            imageUrl={item.imageUrl}
                        />
                    </Grid>
                ))}
            </Grid>
            <Stack sx={{ marginTop: '60px' }}>
                <h5 className={classes.l_title}>Recently Added</h5>
            </Stack>
            <RecentlyAddedScrollbar />
        </Box>
    );
};

export default Games;
