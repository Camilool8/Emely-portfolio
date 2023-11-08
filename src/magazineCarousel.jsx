import { useState, useEffect, useRef } from "react";
import "./magazineCarousel.css";
import MagazineDesigna from "./magazineDesigna";
import MagazineDesignb from "./magazineDesignb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function MagazineCarousel() {
  const components = [
    <MagazineDesigna key="md1" />,
    <MagazineDesignb key="md2" />,
  ];
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const autoPlayRef = useRef();

  autoPlayRef.current = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex + 1) % components.length
    );
  };

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const intervalId = setInterval(play, 120000); // Change component every 120 seconds

    return () => clearInterval(intervalId);
  }, []);

  const nextComponent = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex + 1) % components.length
    );
  };

  const prevComponent = () => {
    setCurrentComponentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  return (
    <div className="component-container">
      {components.map((component, index) => (
        <div
          key={index}
          className={`component-fullscreen ${
            currentComponentIndex === index ? "active" : ""
          }`}
        >
          {component}
        </div>
      ))}
      <button className="prev-magazine" onClick={prevComponent}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="next-magazine" onClick={nextComponent}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default MagazineCarousel;
