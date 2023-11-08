import { useState, useEffect, useRef } from "react";
import "./motionCarousel.css";
import MotionGraphicsa from "./motionGraphicsa";
import MotionGraphicsb from "./motionGraphicsb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function MotionCarousel() {
  const components = [
    <MotionGraphicsa key="mg1" />,
    <MotionGraphicsb key="mg2" />,
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
      <button className="prev-motion" onClick={prevComponent}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="next-motion" onClick={nextComponent}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default MotionCarousel;
