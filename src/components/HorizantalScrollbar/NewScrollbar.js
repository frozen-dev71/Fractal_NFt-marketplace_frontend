import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Avatar from '@mui/material/Avatar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './Scrollbar.css';
import NewGameCard from '../NewgameCard/NewgameCard';
import newgame from '../../data/newgame.json';

const checkTranslate3dValue = () => {
  const transformValue = document.getElementsByClassName("menu-wrapper--inner")[1].style.transform

  const matches = transformValue.match(/translate3d\(([-+]?[0-9]*\.?[0-9]+)px/);
  const xValue = parseFloat(matches[1]);
  console.log("hihihi:", xValue)
  if (xValue > 0) {
    document.getElementsByClassName("menu-wrapper--inner")[1].style.transform = 'translate3d(0px, 0px, 0px)';
  }
}

const NewCard = ({ key, imageUrl, title, url }) => {

  const navigate = useNavigate();
  let flag = false;
  return (<div className="menu-item" onMouseDown={() => flag = false} onMouseMove={(event) => { if (event.buttons === 1) flag = true; }} onMouseUp={() => !flag && navigate(`${url}`)}>
    <NewGameCard
      url={url}
      key={key}
      imageUrl={imageUrl}
      title={title}
    />
  </div>
  );
};

export const New = (list) => list.map(el => {
  return (
    <NewCard
      url={el.project.handle}
      key={el.project.title}
      imageUrl={el.media.url}
      title={el.project.title}
    />
  );
});

const Arrow = ({ icon, className }) => {
  return (
    <div onClick={checkTranslate3dValue} className={className}>
      <Avatar sx={{ width: "30px", height: "30px", color: 'grey', border: '1px solid grey', backgroundColor: "transparent" }}>
        {icon}
      </Avatar>
    </div>
  )
}

const ArrowLeft = Arrow({ icon: <ArrowLeftIcon />, className: 'arrow-prev-new' });
const ArrowRight = Arrow({ icon: <ArrowRightIcon />, className: 'arrow-next-new' });

const App = (props) => {
  const [selected, setSelected] = useState(0);

  const onSelect = (key) => {
    setSelected(key);
  };
  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("menu-wrapper--inner")[1].style.transform = 'translate3d(0px, 0px, 0px)';
    }, 1000);
  });

  const newdata = New(newgame.gameListItems, selected);

  return (
    <ScrollMenu
      data={newdata}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      selected={selected}
      onSelect={onSelect}
    />
  );
};

export default App;