import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import _ from 'lodash';
import GameAd from '../components/GameAd/gameAd';
import TrendingScrollbar from "../components/HorizantalScrollbar/TrendingScrollbar";
import NewScrollbar from "../components/HorizantalScrollbar/NewScrollbar";
import FeaturedgameCard from '../components/FeaturedgameCard/FeaturedgameCard';
import PlaylistgameCard from '../components/PlaylistgameCard/PlaylistgameCard';
import Genres from '../components/Genres/Geners'
import battle_pic from '../components/GameAd/pic/battletabs.png';
import featured from '../data/featured.json';
import leaderboard from '../data/leaderboard.json';
import playlist from '../data/playlist.json';
import genres from '../data/genres.json';

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
  span: {
    fontSize: "0.625rem",
    fontWeight: "700",
    fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
    textTransform: "uppercase",
    lineHeight: "2.66",
    color: "rgba(255, 255, 255, 0.7)",
    letterSpacing: "0.1rem",
  },
  text: {
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
    lineHeight: "1.5",
  },
  st_text: {
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
    lineHeight: "1.5",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 0.7)",
  },
  card: {
    display: "inline-block",
  }
}));

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "rgb(242, 5, 159)",
      fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
      fontSize: "0.857rem",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
  };
}

function stringAvatar_1(name) {
  return {
    sx: {
      width: "2rem",
      height: "2rem",
      bgcolor: "rgb(242, 5, 159)",
      fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
      fontSize: "0.857rem",
      fontWeight: "700",
      textTransform: "uppercase",
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
  };
}

const Home = ({ setAuth }) => {

  const classes = useStyles();

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
        <img src={battle_pic} className={classes.background} style={{ opacity: 0.5 }} alt="battle" />
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
            <GameAd />
          </Grid>
        </Grid>
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
        <Grid container spacing={12} sx={{ marginTop: '60px', paddingTop: '0px' }}>
          <Grid item xs={12} xl={5} lg={6} sx={{ paddingTop: '0px !important' }}>
            <Stack>
              <Stack>
                <p className={classes.span}>Community</p>
                <h5 className={classes.l_title}>F-Points Leaderboard</h5>
              </Stack>
              <a href="https://discord.gg/fractalwagmi" target="_black" style={{ textAlign: "center" }}>
                <img src='pic/F-Points Banner.avif' alt='fpoints' style={{ width: "90%", height: "90%" }} />
              </a>
            </Stack>
          </Grid>
          <Grid item xs={12} xl={7} lg={6}>
            <Stack sx={{ width: "100%", backgroundColor: "#111111", borderRadius: "13px" }}>
              <Stack sx={{ padding: "32px 40px" }}>
                <p className={classes.span} style={{ margin: 0 }}>Your Standing</p>
                <Stack direction="row" spacing={1} sx={{ flexGrow: 1, marginTop: "8px" }}>
                  <Stack direction="row" spacing={3} sx={{ flex: '2', alignItems: "center" }}>
                    <Avatar {...stringAvatar(`${leaderboard.userRank.username}`)} />
                    <p className={classes.text}>{leaderboard.userRank.username}</p>
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ flex: '2', alignItems: "center" }}>
                    <p className={classes.st_text}>Rank:</p>
                    <p className={classes.text}>{leaderboard.userRank.rank.toLocaleString()}</p>
                  </Stack>
                  <Stack direction="row" spacing={1} sx={{ flex: '.5', alignItems: "center" }}>
                    <Avatar sx={{ width: "1.5rem", height: "1.5rem", fontWeight: "700", bgcolor: "rgb(242, 5, 159)", color: "white" }}>F</Avatar>
                    <p className={classes.st_text}>Points:</p>
                    <p className={classes.text}>{leaderboard.userRank.cumulativeFPoints}</p>
                  </Stack>
                </Stack>
                <Stack direction="row" sx={{ padding: "12px 16px", flexGrow: 1 }}>
                  <Stack style={{ flex: '1' }}>
                    <p className={classes.span} style={{ fontSize: "12px", margin: "12px 0px" }}>Rank</p>
                    {_.map(leaderboard.otherUsers, (item, index) => (
                      <p key={index} className={classes.text}>{item.rank.toLocaleString()}</p>
                    ))}
                  </Stack>
                  <Stack sx={{ flex: '7' }}>
                    <p className={classes.span} style={{ fontSize: "12px", margin: "12px 0px" }}>Player</p>
                    {_.map(leaderboard.otherUsers, (item, index) => (
                      <Stack key={index} direction="row" spacing={2} sx={{ alignItems: "center", margin: "12px 0px" }}>
                        <Avatar {...stringAvatar_1(`${item.username}`)} />
                        <p className={classes.text}>{item.username}</p>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack sx={{ flex: '1' }}>
                    <p className={classes.span} style={{ fontSize: "12px", margin: "12px 0px" }}>Points</p>
                    {_.map(leaderboard.otherUsers, (item, index) => (
                      <p key={index} className={classes.text}>{item.cumulativeFPoints}</p>
                    ))}
                  </Stack>
                </Stack>
                <Stack direction="row" sx={{ flexGrow: 1 }}>
                  <div style={{ flex: '5', display: "flex", color: "rgba(255,255,255,0.5)", alignItems: "center" }}>
                    <GroupsIcon />&nbsp;&nbsp;&nbsp;
                    <p className={classes.text}>{leaderboard.numberOfPlayers.toLocaleString()} total players</p>
                  </div>
                  <Button href='/events' sx={{ flex: '1', display: 'flex', fontSize: '0.75rem', alignItems: "center", color: "rgb(242, 5, 159)", '&:hover': { backgroundColor: 'rgba(242, 5, 159, 0.1)' } }}>
                    <p>EARN POINTS</p>&nbsp;&nbsp;
                    <ArrowForwardIcon />
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Stack sx={{ marginTop: '60px' }}>
          <p style={{ margin: 0 }} className={classes.span}>GAMES</p>
          <h5 className={classes.l_title}>Trending</h5>
        </Stack>
        <TrendingScrollbar />
        <Stack sx={{ marginTop: '-60px' }}>
          <h5 className={classes.l_title}>New on Fractal</h5>
        </Stack>
        <NewScrollbar />
        <Stack sx={{ marginTop: '60px' }}>
          <p style={{ margin: 0 }} className={classes.span}>PLAYLISTS</p>
          <h5 className={classes.l_title}>What we are playing</h5>
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
          <p style={{ margin: 0 }} className={classes.span}>GAMES</p>
          <h5 className={classes.l_title}>Most played genres</h5>
        </Stack>
        <Grid container spacing={3}>
          {_.map(_.take(genres.genres, 10), (item, index) => (
            <Grid item xs={6} sm={4} md={3} lg={12 / 5} >
              <Link to={`/games/browser/?genre=${item.displayName}`} style={{ textDecoration: 'none', color: "white" }}>
                <Genres
                  key={index}
                  imageUrl={item.imageUrl}
                  title={item.displayName}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ padding: "50px 0px 100px 30vw" }} direction="row" spacing={3}>
          <p className={classes.text}>
            Can't decide? Check out all games.
          </p>
          <Button href='/games/browser' sx={{ display: 'flex', fontSize: '0.75rem', alignItems: "center", color: "rgb(242, 5, 159)", '&:hover': { backgroundColor: 'rgba(242, 5, 159, 0.1)' } }}>
            <p>BROWSE CATALOG</p>&nbsp;&nbsp;
            <ArrowForwardIcon />
          </Button>
        </Stack>
      </Box>
    </div >
  );
};

export default Home;
