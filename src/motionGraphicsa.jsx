import "./motionGraphicsa.css";
import videoSource from "./assets/video/mgvid1.mp4";
import rightColumnImage from "./assets/images/mg_img.png";

function MotionGraphicsa() {
  return (
    <div className="full-height-container">
      <div className="column video-column">
        <video controls>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="column text-column text-body">
        <p>
          <span className="font-semibold"> Idea:</span> dar a conocer los
          beneficios del aguacate.
        </p>
      </div>
      <div className="column image-column">
        <img src={rightColumnImage} alt="Graphic" />
      </div>
    </div>
  );
}

export default MotionGraphicsa;
