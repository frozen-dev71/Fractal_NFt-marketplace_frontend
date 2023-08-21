import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { Box, IconButton, Grid, Stack, Button, Collapse, Select, MenuItem, Paper } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import { makeStyles } from '@mui/styles';
import InfiniteScroll from 'react-infinite-scroll-component';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Genres from '../components/Genres/Geners';
import FilterGame from '../components/FilterGame/FilterGame';
import genres from '../data/genres.json';
import BrowserGames from '../data/browsegames.json';
import BrowseGameCard from '../components/BrowseGame/BrowseGameCard';
import _ from 'lodash';
import './GameBrowse.css'
import MyContext from '../context/MyContext';

const useStyles = makeStyles((theme) => ({
    l_title: {
        fontSize: "1.4993rem",
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        margin: "0 0 16px 0",
    },
    l_title_1: {
        fontSize: "1.3rem",
        margin: 0,
        padding: "12px 0px",
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
    },
    menuItem: {
        "&:hover": {
            backgroundColor: "#4C1338 !important",
            borderRadius: "10px",
        }
    },
    viewgame_button: {
        backgroundColor: "#F2059F !important",
        color: "white !important",
        '&:hover': {
            backgroundColor: '#B20375 !important',
        },
        fontFamily: "Quattrocento Sans,Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important",
        fontSize: "0.75rem !important",
        fontWeight: "500 !important",
        width: "200px",
        height: "30px"
    },
    mygame_button: {
        backgroundColor: "#E0E0E0 !important",
        '&:hover': {
            backgroundColor: '#616161 !important',
        },
        fontFamily: "Quattrocento Sans,Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol !important",
        fontSize: "0.75rem !important",
        fontWeight: "500 !important",
        width: "200px",
        height: "30px"
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
        fontSize: "0.875rem",
        lineHeight: "1.43"
    },
    studio: {
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: "1rem",
        lineHeight: "1.5",
        color: "rgba(255, 255, 255, 0.7)"
    },
    genre: {
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        fontSize: '0.875rem',
        fontWeight: '500'
    },
}));

const GameBrowser = () => {
    const classes = useStyles();
    const { data, updateData } = useContext(MyContext);
    const paginatedItems = _.chunk(BrowserGames.games, 20);

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [gameInfo, setGameInfo] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    const loadMore = () => {
        setTimeout(() => {
            setPage(prevPage => prevPage + 1);
            setItems(prevItems => [...prevItems, ...paginatedItems[page]]);
            setHasMore(page < paginatedItems.length - 1);
        }, 1500)
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const viewInfo = (item) => {
        setGameInfo(item);
        setIsClicked(true);
    }

    const closeView = () => {
        setIsClicked(false);
    }

    useEffect(() => {
        setItems(paginatedItems[0]);
        // eslint-disable-next-line 
    }, [window.innerHeight]);

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
            <Stack direction="row" spacing={3} >
                <Box sx={{ width: "100%", height: "100%" }}>
                    <Stack sx={{ marginTop: '40px' }}>
                        <h5 className={classes.l_title}>Game catalog</h5>
                    </Stack>
                    <Grid container style={{ width: "100%", height: "100%" }} spacing={2}>
                        {_.map(_.take(genres.genres, 10), (item, index) => (
                            <Grid minWidth={270} item xs={6} sm={4} md={3} lg={12 / 5}>
                                <Genres
                                    key={index}
                                    imageUrl={item.imageUrl}
                                    title={item.displayName}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Grid sx={{ paddingTop: "16px" }} container spacing={2}>
                            {_.map(_.slice(genres.genres, 10, 14), (item, index) => (
                                <Grid minWidth={270} item xs={6} sm={4} md={3} lg={12 / 5} >
                                    <Genres
                                        key={index}
                                        imageUrl={item.imageUrl}
                                        title={item.displayName}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Collapse>
                    <Grid item lg={12} sx={{ textAlign: "center" }}>
                        <Button sx={{ color: "white" }} onClick={handleClick}>
                            {open ? "VIEW LESS ▲ " : "VIEW ALL ▼"}
                        </Button>
                    </Grid>
                    <Stack direction="row" spacing={5} sx={{ marginTop: '80px' }}>
                        <Stack sx={{ width: "100%" }}>
                            <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
                                <Stack>
                                    <h5 className={classes.l_title_1}>Browse { } games</h5>
                                </Stack>
                                <Stack sx={{ alignItems: "center", marginLeft: "auto" }} direction="row" spacing={2}>
                                    <h4>showing 89 games</h4>
                                    <Select
                                        sx={{ height: "40%", backgroundColor: "#111", borderRadius: "20px" }}
                                        MenuProps={{
                                            sx: {
                                                "&& .Mui-selected": {
                                                    backgroundColor: "#3B152E",
                                                    borderRadius: "10px",
                                                }
                                            }
                                        }}
                                        defaultValue={10}
                                    >
                                        <MenuItem className={classes.menuItem} value={10}>A to Z</MenuItem>
                                        <MenuItem className={classes.menuItem} value={20}>Z to A</MenuItem>
                                        <MenuItem className={classes.menuItem} value={30}>Newest</MenuItem>
                                        <MenuItem className={classes.menuItem} value={40}>Oldest</MenuItem>
                                    </Select>
                                    {!data && (<IconButton sx={{ height: "50%" }} aria-label="delete" size="small">
                                        <FilterListIcon onClick={() => updateData(!data)} fontSize="inherit" />
                                    </IconButton>)}
                                </Stack>
                            </Stack>
                            <InfiniteScroll
                                dataLength={items.length}
                                next={loadMore}
                                hasMore={hasMore}
                                loader={<h4>Loading...</h4>}
                            >
                                <Grid style={{ width: "100%", height: "100%" }} container spacing={2.5}>
                                    {items.map(item => (
                                        <Grid onClick={() => viewInfo(item)} item xs={6} sm={4} md={3} lg={12 / 5} xl={2} minWidth={249} maxWidth={270}>
                                            <BrowseGameCard
                                                key={item.id}
                                                imageUrl={item.imageUrl}
                                                name={item.name}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </InfiniteScroll>
                        </Stack>
                        {data && !isClicked && (
                            <Stack sx={{ marginTop: "30px !important" }}>
                                <FilterGame />
                            </Stack>
                        )}
                    </Stack>
                </Box>
                {
                    isClicked &&
                    <Box>
                        <Paper sx={{ width: "410px", background: "rgb(17, 17, 17)", marginTop: "16px", top: "80px", position: "sticky", borderRadius: "30px" }}>
                            <Stack>
                                <Stack direction="row" justifyContent="space-between" sx={{ padding: "16px 16px 0px" }}>
                                    <p className={classes.name} style={{ margin: 0 }}>Game Preview</p>
                                    <IconButton onClick={closeView} sx={{ height: "50%" }} aria-label="delete" size="small">
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                </Stack>
                                <Box sx={{ padding: "24px 20px 16px", paddingBottom: "60px" }}>
                                    <Stack direction="row" spacing={2} marginBottom="16px">
                                        <Stack sx={{ width: "80px", height: "80px" }}>
                                            <img src={gameInfo.imageUrl} alt="gameback" width="100%" height="100%" />
                                        </Stack>
                                        <Stack>
                                            <Stack className={classes.name}>
                                                {gameInfo.name}
                                            </Stack>
                                            <Stack className={classes.studio}>
                                                by {gameInfo.studio}
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack className={classes.description} marginBottom="24px">
                                        {gameInfo.description}
                                    </Stack>
                                    <Stack direction="row" divider={<p>•</p>} spacing={2}>
                                        {_.map(gameInfo.genre, (item, index) => (
                                            <div key={index} className={classes.genre} style={{ display: "flex" }}>
                                                {item.displayName}
                                            </div>
                                        ))}
                                        {_.map(gameInfo.categories, (item, index) => (
                                            <div key={index} className={classes.genre} style={{ display: "flex" }}>
                                                {item.displayName}
                                            </div>
                                        ))}
                                    </Stack>
                                    <Stack direction="row" spacing={3} marginTop="40px" marginBottom="40px">
                                        <Link to={`/${gameInfo.handle}`} style={{ textDecoration: 'none', color: "white" }} onClick={handleLinkClick}>
                                            <Button variant="contained" className={classes.viewgame_button}>view game</Button>
                                        </Link>
                                        <Button variant="contained" className={classes.mygame_button}> <AddIcon />my games</Button>
                                    </Stack>
                                    <Stack padding="24px 20px" sx={{ border: "1px solid rgba(255, 255, 255, 0.23)", borderRadius: "16px" }}>
                                        <Stack direction="row" display="flex" alignItems="center" justifyContent="space-between">
                                            <p className={classes.studio} style={{ margin: "8px 0px" }}>Platform</p>
                                            <Stack className={classes.name} direction="row" divider={<p>,</p>} spacing={1}>
                                                {gameInfo.platform.length && _.map(gameInfo.platform, (item, index) => (
                                                    <div key={index} style={{ display: "flex" }}>
                                                        {item.displayName}
                                                    </div>
                                                ))}
                                                {gameInfo.platform.length === 0 &&
                                                    <div>
                                                        Coming Soon
                                                    </div>
                                                }
                                            </Stack>
                                        </Stack>
                                        <Stack display="flex" alignItems="center" direction="row" justifyContent="space-between">
                                            <p className={classes.studio} style={{ margin: "8px 0px" }}>Status</p>
                                            <p className={classes.name} style={{ margin: "8px 0px" }}>{gameInfo.statusDisplayName}</p>
                                        </Stack>
                                        <Stack direction="row" display="flex" alignItems="center" justifyContent="space-between">
                                            <p className={classes.studio} style={{ margin: "8px 0px" }}>Network</p>
                                            <Stack className={classes.name} direction="row" divider={<p>,</p>} spacing={1}>
                                                {_.map(gameInfo.network, (item, index) => (
                                                    <div key={index} style={{ display: "flex" }}>
                                                        {item.displayName}
                                                    </div>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Paper>
                    </Box >
                }
            </Stack >
        </Box >
    );
};

export default GameBrowser;
