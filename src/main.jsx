import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Intro from "./intro.jsx";
import Cv from "./cv.jsx";
import Index from "./index.jsx";
import SocialMedia from "./socialMedia.jsx";
import MagazineCarousel from "./magazineCarousel.jsx";
import MotionPanels from "./motionPanels.jsx";
import Branding from "./branding.jsx";
import Contact from "./contact.jsx";
import "./main.css";

const useScrollSnap = (ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { scrollTop, offsetHeight } = ref.current;
        const index = Math.round(scrollTop / offsetHeight);
        setCurrentIndex(index);
      }
    };

    const target = ref.current;
    target.addEventListener("scroll", handleScroll);

    return () => target.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return [currentIndex, setCurrentIndex];
};

const Navigation = ({
  count,
  currentIndex,
  onNavigate,
  scrollContainerRef,
}) => {
  useEffect(() => {
    let timeoutId;
    const navigationElement = document.querySelector(".navigation");

    const makeDotsVisible = () => {
      const dots = document.querySelectorAll(".navigation-dot");
      dots.forEach((dot) => {
        dot.style.opacity = "1";
        dot.style.animation = "none";
      });
    };

    const fadeOutDots = () => {
      const dots = document.querySelectorAll(".navigation-dot");
      dots.forEach((dot) => {
        dot.style.animation = "fadeOut 1s ease-in-out forwards";
      });
    };

    const resetFadeOutTimer = () => {
      clearTimeout(timeoutId);
      makeDotsVisible();
      timeoutId = setTimeout(fadeOutDots, 1000);
    };

    const handleScroll = () => {
      resetFadeOutTimer();
    };

    const handleMouseMove = (e) => {
      // Check if the mouse move is within the navigation area
      const navRect = navigationElement.getBoundingClientRect();
      if (
        e.pageX >= navRect.left &&
        e.pageX <= navRect.right &&
        e.pageY >= navRect.top &&
        e.pageY <= navRect.bottom
      ) {
        resetFadeOutTimer();
      }
    };

    if (navigationElement) {
      navigationElement.addEventListener("mousemove", handleMouseMove);
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (navigationElement) {
        navigationElement.removeEventListener("mousemove", handleMouseMove);
      }
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
      }
      clearTimeout(timeoutId);
    };
  }, [scrollContainerRef]);

  return (
    <div className="navigation">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          className={`navigation-dot ${currentIndex === index ? "active" : ""}`}
          onClick={() => onNavigate(index)}
          // Removed inline style for opacity; will use CSS animation instead
        />
      ))}
    </div>
  );
};

const Main = () => {
  const rootRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useScrollSnap(rootRef);

  const scrollToComponent = (index) => {
    const component = rootRef.current.children[index];
    component.scrollIntoView({ behavior: "smooth" });
    setCurrentIndex(index);
  };

  const fullPageComponentCount = 8;

  return (
    <>
      <div ref={rootRef} className="scroll-container">
        <div className="snap-child">
          <Intro />
        </div>
        <div className="snap-child">
          <Cv />
        </div>
        <div className="snap-child">
          <Index />
        </div>
        <div className="snap-child">
          <SocialMedia />
        </div>
        <div className="snap-child">
          <MotionPanels />
        </div>
        <div className="snap-child">
          <MagazineCarousel />
        </div>
        <div className="snap-child">
          <Branding />
        </div>
        <div className="snap-child">
          <Contact />
        </div>
      </div>
      <Navigation
        count={fullPageComponentCount}
        currentIndex={currentIndex}
        onNavigate={scrollToComponent}
        scrollContainerRef={rootRef}
      />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
