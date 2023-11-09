import { useState, useEffect, useRef } from "react";
import "./branding.css";
import bdImage1 from "./assets/images/bd1.png";
import bdImage2 from "./assets/images/bd2.png";
import bdImage3 from "./assets/images/bd3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Branding() {
  const images = [bdImage1, bdImage2, bdImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoPlayRef = useRef();

  autoPlayRef.current = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const intervalId = setInterval(play, 120000); // Change image every 120 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`portfolio Branding ${index + 1}`}
          className={`image-fullscreen ${
            currentImageIndex === index ? "active" : ""
          }`}
        />
      ))}
      <button className="prev-branding" onClick={prevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="next-branding" onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Branding;
