import "./motionGraphicsb.css";
import videoSource from "./assets/video/mgvid2.mp4";
import rightColumnImage from "./assets/images/mg_img.png";

function MotionGraphicsb() {
  return (
    <div className="full-height-container">
      <div className="column image-column">
        <img src={rightColumnImage} alt="Graphic" />
      </div>
      <div className="column text-column text-body">
        <p>
          <span className="font-semibold"> Idea:</span> introducir el contenido
          que se va a comunicar
        </p>
      </div>
      <div className="column video-column">
        <video controls>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default MotionGraphicsb;
