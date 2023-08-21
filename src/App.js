import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/shared/Navbar';
import MyProvider from './provider/MyProvider'
import Home from "./pages/Home";
import Games from './pages/Games';
import GameBrowser from "./pages/GameBrowse";
import GameDetail from './pages/GameDetail';
import Events from './pages/Events';
import EventGame from './pages/EventGame';
import recentlyended from './data/recentlyended.json';
import trendgame from './data/trendgame.json';
// import newgame from './data/newgame.json';
import BrowserGames from './data/browsegames.json';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgba(1,1,1,1)'
    }
  },
});

function App() {

  return (
    <MyProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/games" element={<Games />} />
          <Route exact path="/games/browser" element={<GameBrowser />} />
          <Route exact path="/games/cs" element={<GameDetail />} />
          <Route exact path="/events" element={<Events />} />
          {recentlyended.events.map((element) => (
            <Route key={element.tournament.id} path={`/events/${element.tournament.id}`} element={<EventGame data={element} />} />
          ))}
          {trendgame.gameListItems.map((element) => (
            <Route key={element.project.id} path={`//${element.project.handle}`} element={<GameDetail data={element} />} />
          ))}
          {BrowserGames.games.map((element) => (
            <Route key={element.id} path={`/${element.handle}`} element={<GameDetail data={element} />} />
          ))}
        </Routes>
      </ThemeProvider>
    </MyProvider>
  );
}

export default App;




