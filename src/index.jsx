import "./index.css";
import cvImage from "./assets/images/index.png";

function Index() {
  return (
    <div className="flex h-screen justify-center items-center bg-white bg-cover">
      <img
        src={cvImage}
        alt="portfolio Index"
        className="max-w-full max-h-full"
      />
    </div>
  );
}

export default Index;
