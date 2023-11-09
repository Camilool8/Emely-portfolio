import "./contact.css";
import contactImage from "./assets/images/end.png";

function Contact() {
  // Use inline styles or a className to set the background image
  const sectionStyle = {
    backgroundImage: `url(${contactImage})`,
    backgroundSize: "cover", // Cover the entire space
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat", // Do not repeat the image
  };

  return <div style={sectionStyle} className="contact-container" />;
}

export default Contact;
