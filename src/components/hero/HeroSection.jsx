import React, { useState, useEffect } from "react";
import { Button } from "../button/Button.jsx";
import "./HeroSection.css";
import "../../App.css";

const images = [
  "/images/hero/1.jpeg",
  "/images/hero/2.jpg",
  "/images/hero/3.png",
  "/images/hero/4.png",
  "/images/hero/5.png",
  // Add more image paths here
];

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to advance to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Create an interval to change the image every 5 seconds
    const interval = setInterval(nextImage, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Style for the background image
  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <div className="hero-container" style={backgroundImageStyle}>
      <h1>PREMANU FOUNDATION</h1>
      <p>Where needs are answered</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          DONATE <i className="fa-solid fa-handshake-angle" />
        </Button>
      </div>
    </div>
  );
};
