import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Stack, Badge, Box, IconButton, Divider, Switch, FormControlLabel, Accordion, AccordionDetails, AccordionSummary, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import StartIcon from '@mui/icons-material/Start';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AndroidIcon from '@mui/icons-material/Android';
import LanguageIcon from '@mui/icons-material/Language';
import WindowIcon from '@mui/icons-material/Window';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import AppleIcon from '@mui/icons-material/Apple';
import { makeStyles, styled } from '@mui/styles';
import _ from 'lodash'
import Checked from './Checked';
import PreChecked from './PreChecked';
import './FilterGame.css';
import Etheremum from './pic/ethereum-eth-logo.png';
import Polygon from './pic/polygon-matic-logo.png';
import Solana from './pic/solana-sol-logo.png';
import MyContext from '../../context/MyContext';

const useStyles = makeStyles((theme) => ({
    l_title: {
        fontSize: "1rem",
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        margin: "0 0 0 16px",
    },
    text: {
        fontSize: "1rem",
        fontWeight: "500",
        fontFamily: "Work Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important",
        margin: 0,
    },
}));

const switchStyle = {
    borderRadius: 2,
    "& .MuiSwitch-switchBase.Mui-checked": {
        color: "rgb(242, 5, 159)"
    },
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
        backgroundColor: 'rgb(242, 5, 159)'
    }
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -15,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: "rgb(242, 5, 159)",
        color: "black"
    },
}));

export default function BoxComponent() {
    const navigate = useNavigate();
    const { data, updateData } = useContext(MyContext);

    const genre1 = ["casual", "Free To Play", "Multiplayer"]
    const genre2 = ["Action", "Adventure", "Arcade", "Lifestyle", "MOBA", "Metaverse & Sandbox", "RPG", "Racing", "Shooters", "Simulation", "Sports", "Strategy", "Tower defense", "Trading card game"]
    const platform = {
        platform: [
            {
                item: "Android",
                icon: <AndroidIcon sx={{ width: "15px", height: "15px" }} />
            },
            {
                item: "Web",
                icon: <LanguageIcon sx={{ width: "15px", height: "15px" }} />
            },
            {
                item: "Windows",
                icon: <WindowIcon sx={{ width: "15px", height: "15px" }} />
            },
            {
                item: "iOS",
                icon: <TabletAndroidIcon sx={{ width: "15px", height: "15px" }} />
            },
            {
                item: "macOS",
                icon: <AppleIcon sx={{ width: "15px", height: "15px" }} />
            }
        ]
    }
    const status = ["Alpha", "Beta", "Full Release", "In Development"]
    const network = {
        network: [
            {
                item: "Ethereum",
                icon: <img style={{ width: "15px", height: "15px" }} src={Etheremum} alt="Ethereuem" />
            },
            {
                item: "Polygon",
                icon: <img style={{ width: "15px", height: "15px" }} src={Polygon} alt="Polygon" />
            },
            {
                item: "Solana",
                icon: <img style={{ width: "15px", height: "15px" }} src={Solana} alt="Solana" />
            }
        ]
    }

    const classes = useStyles();

    const [playable, setPlayable] = React.useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

    const [checkedGenre, setCheckedGenre] = React.useState([]);
    const [checkedPlatform, setCheckedPlatform] = React.useState([]);
    const [checkedStatus, setCheckedStatus] = React.useState([]);
    const [checkedNetwork, setCheckedNetwork] = React.useState([]);

    useEffect(() => {
        if (playable === true || checkedGenre.length || checkedPlatform.length || checkedStatus.length || checkedNetwork.length) {
            setIsButtonDisabled(false);
        }
        else {
            setIsButtonDisabled(true);
        }
    }, [playable, checkedGenre, checkedPlatform, checkedStatus, checkedNetwork]);

    useEffect(() => {
        let queryParameters = [];
        if (checkedGenre.length) {
            checkedGenre.map((item) => {
                queryParameters.push(`genre=${item}`);
                return null;
            });
        }
        if (checkedPlatform.length) {
            checkedPlatform.map((item) => {
                queryParameters.push(`platform=${item}`);
                return null;
            });
        }
        if (checkedStatus.length) {
            checkedStatus.map((item) => {
                queryParameters.push(`status=${item}`);
                return null;
            });
        }
        if (checkedNetwork.length) {
            checkedNetwork.map((item) => {
                queryParameters.push(`network=${item}`);
                return null;
            });
        }
        navigate(`?${queryParameters.join('&')}`)
        // eslint-disable-next-line 
    }, [playable, checkedGenre, checkedPlatform, checkedStatus, checkedNetwork])

    const FilterClear = () => {
        setPlayable(false);
        setCheckedGenre([]);
        setCheckedPlatform([]);
        setCheckedStatus([]);
        setCheckedNetwork([]);
    }

    const handleChangeSwitch = (event) => {
        setPlayable(event.target.checked);
        if (event.target.checked === true) {
            setCheckedStatus(["Alpha", "Beta", "Full Release"]);
        }
        else {
            setCheckedStatus([]);
        }
    };

    const handleToggleGenre = (value) => () => {
        const currentIndex = checkedGenre.indexOf(value);
        const newChecked = [...checkedGenre];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedGenre(newChecked);
    };

    const handleTogglePlatform = (value) => () => {
        const currentIndex = checkedPlatform.indexOf(value);
        const newChecked = [...checkedPlatform];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedPlatform(newChecked);
    };

    const handleToggleStatus = (value) => () => {
        const currentIndex = checkedStatus.indexOf(value);
        const newChecked = [...checkedStatus];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedStatus(newChecked);

        if (newChecked.includes("Alpha") && newChecked.includes("Beta") && newChecked.includes("Full Release")) {
            setPlayable(true);
        }
        else {
            setPlayable(false);
        }
    };

    const handleToggleNetwork = (value) => () => {
        const currentIndex = checkedNetwork.indexOf(value);
        const newChecked = [...checkedNetwork];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedNetwork(newChecked);
    };

    return (
        <Box sx={{ position: "sticky", top: "80px", width: "250px", backgroundColor: "rgb(17, 17, 17)", borderRadius: "20px" }}>
            <Box sx={{ padding: "8px 14px 24px 14px" }}>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <div style={{ display: "flex", textAlign: "center" }}>
                        <FilterListIcon />
                        <p className={classes.l_title}>Filters</p>
                    </div>
                    <IconButton aria-label="delete" size="small" onClick={() => updateData(!data)}>
                        <StartIcon fontSize="inherit" />
                    </IconButton>
                </Stack>
            </Box>
            <Box className="filter-body" maxHeight={600} overflow="auto" >
                <Box sx={{ padding: "8px 14px 24px 14px" }}>
                    <Stack direction="row">
                        <FormControlLabel
                            sx={{ width: "100%", margin: 0, justifyContent: "space-between" }}
                            onChange={handleChangeSwitch}
                            control={
                                <Switch
                                    sx={switchStyle}
                                    checked={playable}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label="Playable"
                            labelPlacement="start"
                        />
                    </Stack>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <StyledBadge badgeContent={checkedGenre.length}>
                                <Typography className={classes.text} sx={{ width: '33%', flexShrink: 0 }}>
                                    Genre
                                </Typography>
                            </StyledBadge>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {_.map(genre1, (value, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                        >
                                            <ListItemButton
                                                sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}
                                                className='potato'
                                                role={undefined}
                                                name={value}
                                                onClick={handleToggleGenre(value)}
                                                dense
                                            >
                                                <ListItemText id={`checkbox-list-label-${value}`} >
                                                    {value}
                                                </ListItemText>
                                                <ListItemIcon sx={{ paddingLeft: "40px" }}>
                                                    {checkedGenre.indexOf(value) > -1 && <Checked />}
                                                    {checkedGenre.indexOf(value) === -1 && <PreChecked />}
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })}
                                <Divider sx={{ marginBottom: "15px", marginTop: "15px" }} />
                                {_.map(genre2, (value, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                        >
                                            <ListItemButton
                                                sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}
                                                name={value}
                                                className='potato'
                                                role={undefined}
                                                onClick={handleToggleGenre(value)}
                                                dense
                                            >
                                                <ListItemText id={`checkbox-list-label-${value}`} >
                                                    {value}
                                                </ListItemText>
                                                <ListItemIcon sx={{ paddingLeft: "40px" }}>
                                                    {checkedGenre.indexOf(value) > -1 && <Checked />}
                                                    {checkedGenre.indexOf(value) === -1 && <PreChecked />}
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <StyledBadge badgeContent={checkedPlatform.length}>
                                <Typography className={classes.text} sx={{ width: '33%', flexShrink: 0 }}>
                                    Platform
                                </Typography>
                            </StyledBadge>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {_.map(platform.platform, (value, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                        >
                                            <ListItemButton
                                                sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}
                                                name={value.item}
                                                className='potato'
                                                role={undefined}
                                                onClick={handleTogglePlatform(value.item)}
                                                dense
                                            >
                                                <ListItemText id={`checkbox-list-label-${value.item}`} >
                                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                                        {value.icon} {value.item}
                                                    </div>
                                                </ListItemText>
                                                <ListItemIcon sx={{ paddingLeft: "40px" }}>
                                                    {checkedPlatform.indexOf(value.item) > -1 && <Checked />}
                                                    {checkedPlatform.indexOf(value.item) === -1 && <PreChecked />}
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <StyledBadge badgeContent={checkedStatus.length}>
                                <Typography className={classes.text} sx={{ width: '33%', flexShrink: 0 }}>
                                    Status
                                </Typography>
                            </StyledBadge>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {_.map(status, (value, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                        >
                                            <ListItemButton
                                                sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}
                                                name={value}
                                                className='potato'
                                                role={undefined}
                                                onClick={handleToggleStatus(value)}
                                                dense
                                            >
                                                <ListItemText id={`checkbox-list-label-${value.item}`} >
                                                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                                        {value}
                                                    </div>
                                                </ListItemText>
                                                <ListItemIcon sx={{ paddingLeft: "40px" }}>
                                                    {checkedStatus.indexOf(value) > -1 && <Checked />}
                                                    {checkedStatus.indexOf(value) === -1 && <PreChecked />}
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <StyledBadge badgeContent={checkedNetwork.length}>
                                <Typography className={classes.text} sx={{ width: '33%', flexShrink: 0 }}>
                                    Network
                                </Typography>
                            </StyledBadge>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                {_.map(network.network, (value, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            disablePadding
                                        >
                                            <ListItemButton
                                                sx={{ paddingLeft: "0px !important", paddingRight: "0px !important" }}
                                                name={value.item}
                                                className='potato'
                                                role={undefined}
                                                onClick={handleToggleNetwork(value.item)}
                                                dense
                                            >
                                                <ListItemText id={`checkbox-list-label-${value.item}`} >
                                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                        {value.icon} {value.item}
                                                    </div>
                                                </ListItemText>
                                                <ListItemIcon sx={{ paddingLeft: "40px" }}>
                                                    {checkedNetwork.indexOf(value.item) > -1 && <Checked />}
                                                    {checkedNetwork.indexOf(value.item) === -1 && <PreChecked />}
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
            <Stack sx={{ padding: "8px 14px 24px 14px" }}>
                <Button
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    variant="outlined"
                    disabled={isButtonDisabled}
                    onClick={FilterClear}
                    sx={{ margin: "8px 32px 8px 32px", fontSize: "0.7rem", color: "white" }}
                >
                    CLEAR FILTERS
                </Button>
            </Stack>
        </Box>
    );
}