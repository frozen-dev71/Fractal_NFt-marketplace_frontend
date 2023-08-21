import React, { useEffect, useState } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Avatar from '@mui/material/Avatar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './Scrollbar.css';
import AnticipatedGameCard from '../AnticipatedGameCard/AnticipatedGameCard';
import anticipated from '../../data/anticipated.json';

const checkTranslate3dValue = () => {
    const transformValue = document.getElementsByClassName("menu-wrapper--inner")[1].style.transform

    const matches = transformValue.match(/translate3d\(([-+]?[0-9]*\.?[0-9]+)px/);
    const xValue = parseFloat(matches[1]);
    console.log("hihihihey :", xValue)
    if (xValue > 0) {
        document.getElementsByClassName("menu-wrapper--inner")[1].style.transform = 'translate3d(0px, 0px, 0px)';
    }
}

const NewCard = ({ key, imageUrl, title, selected }) => {
    return (
        <div className="menu-item" style={{ padding: "0" }}>
            <AnticipatedGameCard
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
        }, 2000);
    });

    const newdata = New(anticipated.gameListItems, selected);

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