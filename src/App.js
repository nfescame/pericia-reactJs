import { useEffect, useState } from "react";
import Routes from "./routes";
import { ImArrowUp2 } from "react-icons/im";
import "./App.css";

export default function App() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <div style={{ backgroundColor: "rgba(0,0,0,0.15)" }}>
        <Routes />
      </div>
      {showButton && (
        <button onClick={scrollToTop} className='back-to-top'>
          <ImArrowUp2 />
        </button>
      )}
    </>
  );
}

