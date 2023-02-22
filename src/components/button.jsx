import "../assets/styles/global.css";
import WhatsApp from "../assets/images/whatsapp.png";

function Button() {
  return (
    <a href="http://" target="_blank" rel="noopener noreferrer">
      <button className="btn z-10 p-2 px-4 border-amber-600 border-2 font-bold lg:text-2xl text-white flex gap-2">
        <img src={WhatsApp} alt="" srcSet="" />
        +977-9125787115
      </button>
    </a>
  );
}

export default Button;
