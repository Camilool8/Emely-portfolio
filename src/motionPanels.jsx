import "./motionPanels.css";
import React, { useState, useRef, useEffect } from "react";
import video1 from "./assets/video/mgvid1.mp4";
import video2 from "./assets/video/mgvid2.mp4";

const MotionPanels = () => {
  const [activePanel, setActivePanel] = useState(1); // 0 for left, 1 for middle, 2 for right
  const videoRefs = useRef([React.createRef(), React.createRef()]);

  // Play the active video and pause the others
  useEffect(() => {
    // Pause all videos first
    videoRefs.current.forEach((ref) => {
      if (ref.current && !ref.current.paused) {
        ref.current.pause();
      }
    });

    // Play the active video if it is a video panel
    if (activePanel === 0 || activePanel === 2) {
      const activeVideo = videoRefs.current[activePanel / 2].current;
      if (activeVideo) {
        const playPromise = activeVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Handle the error
            console.error(
              "Error occurred while trying to play the video:",
              error
            );
          });
        }
      }
    }
  }, [activePanel]);

  const handleClick = (index) => {
    setActivePanel(index);

    // Ensure we pause any playing video if we're navigating away from a video panel
    if (index !== 0 && index !== 2) {
      videoRefs.current.forEach((ref) => {
        if (ref.current && !ref.current.paused) {
          ref.current.pause();
        }
      });
    }
  };

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index].current;
    if (video) {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Handle the error here.
            console.log("Error trying to play the video: ", error);
          });
        }
      } else {
        video.pause();
      }
    }
  };

  const getTransform = (index) => {
    if (index === activePanel) return "scale(1)";
    if (activePanel === 0) {
      // Left panel is active
      return index === 1
        ? "translateX(33.3333%) scale(0.8)"
        : "translateX(66.6666%) scale(0.8)";
    } else if (activePanel === 1) {
      // Middle panel is active
      return index < activePanel
        ? "translateX(-33.3333%) scale(0.8)"
        : "translateX(33.3333%) scale(0.8)";
    } else {
      // Right panel is active
      return index === 1
        ? "translateX(-33.3333%) scale(0.8)"
        : "translateX(-66.6666%) scale(0.8)";
    }
  };

  // Array of panel components (could be video or image)
  const panels = [
    <video
      key="video1"
      className="carousel-panel video"
      ref={videoRefs.current[0]}
      onClick={(event) => {
        // Prevent any parent handlers from being executed
        event.stopPropagation();
        togglePlayPause(0);
      }}
    >
      <source src={video1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>,
    <div key="graphic" className="carousel-panel graphic">
      <div className="upper-left-text">MOTION</div>
      <div className="lower-right-text">GRAPHICS</div>
    </div>,
    <video
      key="video2"
      className="carousel-panel video"
      ref={videoRefs.current[1]}
      onClick={(event) => {
        // Prevent any parent handlers from being executed
        event.stopPropagation();
        togglePlayPause(1);
      }}
    >
      <source src={video2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>,
  ];

  return (
    <div className="carousel-container">
      {panels.map((panel, index) =>
        React.cloneElement(panel, {
          className: `${panel.props.className} ${
            index === activePanel ? "active" : ""
          }`,
          onClick: (event) => {
            handleClick(index);
            // If it's a video and is not currently active, play/pause
            if (panel.type === "video" && index !== activePanel) {
              event.stopPropagation();
            }
          },
          style: {
            zIndex:
              index === activePanel ? 3 : 2 - Math.abs(index - activePanel),
            transform: getTransform(index),
          },
        })
      )}
    </div>
  );
};

export default MotionPanels;
