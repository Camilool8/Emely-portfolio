// React component
import "./magazineDesignb.css"; // Make sure to import your CSS file
import centeredImage from "./assets/images/revista1.png";

function MagazineDesingb() {
  return (
    <div className="full-view-container">
      <div className="centered-container">
        <div className="upper-left-text">MAGAZINE</div>
        <img src={centeredImage} className="centered-image" alt="Centered" />
        <div className="lower-right-text">DESIGN</div>
      </div>
    </div>
  );
}

export default MagazineDesingb;
