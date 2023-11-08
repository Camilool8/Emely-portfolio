import "./magazineDesigna.css";
import videoSource from "./assets/video/mdvid1.mp4";

function MagazineDesigna() {
  return (
    <div className="full-view-container">
      <div className="centered-split-container">
        <div className="gradient-column">
          <div className="upper-left-text">MAGAZINE</div>
          <div className="lower-right-text">DESIGN</div>
        </div>
        <div className="video-column">
          <video autoPlay loop muted className="full-width-video">
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default MagazineDesigna;
