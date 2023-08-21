import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Avatar from '@mui/material/Avatar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './Scrollbar.css';
import TrendGameCard from '../TrendgameCard/TrendgameCard';
import trendgames from '../../data/trendgame.json';

const handleLinkClick = () => {
  window.scrollTo(0, 0);
};

const TrendingCard = ({ key, imageUrl, title, trend, url }) => {
  const navigate = useNavigate();

  let flag = false;
  return (
    <div className="menu-item" onMouseDown={() => flag = false} onMouseMove={(event) => { if (event.buttons === 1) flag = true; }} onMouseUp={() => !flag && navigate(`${url}`)}>
      <TrendGameCard
        url={url}
        key={key}
        imageUrl={imageUrl}
        title={title}
        trend={trend}
      />
    </div>
  );
};

export const Trend = (list) => list.map(el => {
  return (
    <TrendingCard
      url={el.project.handle}
      key={el.project.title}
      imageUrl={el.media.url}
      title={el.project.title}
      trend={list.indexOf(el) + 1}
    />
  );
});

const Arrow = ({ icon, className }) => {
  return (
    <div className={className}>
      <Avatar sx={{ width: "30px", height: "30px", color: 'grey', border: '1px solid grey', backgroundColor: "transparent" }}>
        {icon}
      </Avatar>
    </div>
  )
}

const ArrowLeft = Arrow({ icon: <ArrowLeftIcon />, className: 'arrow-prev' });
const ArrowRight = Arrow({ icon: <ArrowRightIcon />, className: 'arrow-next' });

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const onSelect = (key) => {
    setSelected(key);
    console.log(selected, "selected");
  };

  const trending = Trend(trendgames.gameListItems, selected);

  return (
    <ScrollMenu
      data={trendgames.gameListItems.map((item, index) => (
        <TrendingCard
          url={item.project.handle}
          key={item.project.title}
          imageUrl={item.media.url}
          title={item.project.title}
          trend={trendgames.gameListItems.indexOf(item) + 1}
        />
      ))}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      selected={selected}
      onSelect={onSelect}
    />
  );
};

export default App;