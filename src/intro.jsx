import "./intro.css";

function Intro() {
  return (
    <div className="portfolio-background presentation-panel flex flex-col items-center justify-center h-screen relative">
      <div className="text-white text-center text-header text-header-xl-porta mb-[-130px] stacked-element">
        PORTA
      </div>
      <div className="text-white text-center text-header text-header-xl-folio stacked-element">
        FOLIO
      </div>
      <div className="text-left text-white text-body absolute text-sub-left tracking-widest stacked-element">
        SOCIAL MEDIA
      </div>
      <div className="text-right text-white text-body absolute text-sub-right tracking-widest stacked-element">
        EMELY MARIEL
      </div>
    </div>
  );
}

export default Intro;
