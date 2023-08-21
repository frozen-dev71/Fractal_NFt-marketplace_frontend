import { React, useState, useEffect } from "react";
import ImageComponent from './ImageComponent/ImageComponent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import spotlight_data from "../../data/spotlight";
import _ from 'lodash';
import './imageSlider.css';

export default function ImageSlider() {

   const [slideId, setSlideId] = useState(0);

   const [nav1, setNav1] = useState(null);
   const [nav2, setNav2] = useState(null);
   const [slider1, setSlider1] = useState(null);
   const [slider2, setSlider2] = useState(null);

   useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
   }, [slider1, slider2]);

   const spotlight = spotlight_data.spotlights;

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      lazyLoad: true,
      centerMode: true,
      arrows: false,
      centerPadding: "0px",
      focusOnSelect: "true",
      beforeChange: (current, next) => {
         setSlideId(next);
         const thumbnails = document.querySelectorAll('.slick-thumbnail');
         thumbnails.forEach((thumbnail, index) => {
            if (index === next) {
               thumbnail.style.opacity = '1'; // Set opacity of active thumbnail
            } else {
               thumbnail.style.opacity = '0.5'; // Set opacity of inactive thumbnails
            }
         });
      },
   };

   const thumbnailSettings = {
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      centerMode: true,
      asNavFor: ".slider-for",
      swipeToSlide: true,
      focusOnSelect: true,
   };

   return (
      <>
         <div className="container" >
            <Slider
               {...settings}
               asNavFor={nav2}
               ref={(slider) => setSlider1(slider)}
            >
               {_.map(spotlight, (item, index) => (
                  <ImageComponent
                     key={index}
                     type={item.media.type}
                     url={item.media.url}
                     platform={item.project.platform}
                     title={item.project.title}
                     studio={item.project.studio}
                     description={item.project.description}
                     genre={item.project.genre}
                     slideId={slideId}
                  />
               ))}
            </Slider>
         </div>
         <div className="thumbnail-wrapper">
            <Slider
               {...thumbnailSettings}
               asNavFor={nav1}
               ref={(slider) => setSlider2(slider)}
            >
               {_.map(spotlight, (item, index) => (
                  <div key={index}>
                     {item.media.type === "png" && <img src={item.media.url} alt={item.media.url} className="img" />}
                     {item.media.type === "mp4" && <img src={item.media.imgUrl} alt={item.media.imgUrl} className="img" />}
                  </div>
               ))}
            </Slider>
         </div>
      </>
   );

}
