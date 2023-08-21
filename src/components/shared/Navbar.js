import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GridViewIcon from '@mui/icons-material/GridView';
import Link from "@mui/material/Link";
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import './Navbar.css';

import useScrollTrigger from "@mui/material/useScrollTrigger";

const Links = [
  { label: "Events", herf: "/events" },
  { label: "Games", herf: "/games" },
  { label: "Craft", herf: "/craft" }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 10 });

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: `${trigger ? " " : "none"}`,
        background: `${trigger ? "rgba(1,1,1,1)" : "transparent"}`,
        padding: "0 6vw 0 6vw",
        transition: "all .3s ease-in-out",
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <GridViewIcon sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '2rem' }} />
            <Link href="/" style={{ paddingTop: "5px" }}>
              <img className="logo" src='logo-pink.png' alt="Logo" style={{ width: 110 }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ flexGrow: 1, paddingLeft: '7em', display: { xs: 'none', md: 'flex' } }}>
          {Links.map((link) => (
            <Typography
              component="a"
              noWrap
              key={link.label}
              href={link.herf}
              sx={{
                mr: 5,
                display: { xs: 'none', md: 'flex' },
                fontFamily: "Segoe UI",
                fontWeight: 500,
                color: 'inherit',
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 0, paddingLeft: "2rem" }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar {...stringAvatar('Petro Senyo')} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;