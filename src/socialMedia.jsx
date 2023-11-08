import { useState, useEffect, useRef } from "react";
import "./socialMedia.css";
import cvImage1 from "./assets/images/sm1.png";
import cvImage2 from "./assets/images/sm2.png";
import cvImage3 from "./assets/images/sm3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function SocialMedia() {
  const images = [cvImage1, cvImage2, cvImage3];
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
          alt={`portfolio Social Media ${index + 1}`}
          className={`image-fullscreen ${
            currentImageIndex === index ? "active" : ""
          }`}
        />
      ))}
      <button className="prev-social" onClick={prevImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="next-social" onClick={nextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default SocialMedia;
