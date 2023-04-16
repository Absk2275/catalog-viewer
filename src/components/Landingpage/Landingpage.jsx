import React, { useState, useEffect } from 'react';

import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

import "./style.css";
import Image1desc from "../description/Image1des";
import Image2des from '../description/Image2des';
import Image3des from '../description/Image3des';
import Image4des from '../description/Image4des';
import Image5des from '../description/Image5des';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const images = [
    { url: image1, text: <Image1desc /> },
    { url: image2, text: <Image2des /> },
    { url: image3, text: <Image3des /> },
    { url: image4, text: <Image4des /> },
    { url: image5, text:<Image5des /> },
  ];

  const handlePlayPauseClick = () => {
    setPlaying(!playing);
  };

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePreviewClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let timer;

    if (playing) {
      timer = setInterval(() => {
        setCurrentIndex(currentIndex === images.length-1 ? 0 : currentIndex + 1);
      }, 3000);
    }

    return () => clearInterval(timer);
  }, [playing, currentIndex, images]);

  return (
    <div className="carousel">
      <div className="image-container">
        <img src={images[currentIndex].url} alt={`Image ${currentIndex}`} className="Image"/>
        <div className="image-text image-description-right">{images[currentIndex].text}</div>
      </div>
      <div className="controls">
        
        <button onClick={handlePlayPauseClick} className="btn">{playing ? < PauseIcon/> : <PlayArrowIcon/>}</button>
        
      </div>
      <div className="previewmain">
      <div className="preview">
        <div className="arrow left-arrow" onClick={handlePreviousClick}>
          <ArrowLeftIcon/>
        </div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Image ${index}`}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => handlePreviewClick(index)}
          className="previewimg"/>
        ))}
        <div className="arrow right-arrow" onClick={handleNextClick}>
          <ArrowRightIcon />
        </div>
      </div>
      </div>
      {/* <div className="image-text image-description-left">{images[currentIndex].text}</div> */}
    </div>
  );
};

export default LandingPage;


















// import image1 from "./Images/image1.jpg";
// import image2 from "./Images/image2.jpg";
// import image3 from "./Images/image3.jpg";
// import image4 from "./Images/image4.jpg";
// import image5 from "./Images/image5.jpg";

// const images = [
//     { url: image1, text: 'Image 1 description' },
//     { url: image2, text: 'Image 2 description' },
//     { url: image3, text: 'Image 3 description' },
//     { url: image4, text: 'Image 4 description' },
//     { url: image5, text: 'Image 4 description' },
//   ];