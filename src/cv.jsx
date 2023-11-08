import "./cv.css";
import cvImage from "./assets/images/cv.png";

function Cv() {
  return (
    <div className="flex h-screen justify-center items-center bg-white bg-cover">
      <img
        src={cvImage}
        alt="Emely Mariel De Peña CV"
        className="max-w-full max-h-full"
      />
    </div>
  );
}

export default Cv;
