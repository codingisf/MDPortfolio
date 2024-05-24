import "./App.css";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import Fourthpage from "./FourthPage/Fourthpage";
import { HashLink as Link } from "react-router-hash-link";
import { HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScrollTop = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollProgress(scrolled);
    if (!showScroll && winScroll > 400) {
      setShowScroll(true);
    } else if (showScroll && winScroll <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      <nav>
        <div className="nav-logo">
          <h3>Cybernetic MD</h3>
        </div>
        <div className="list">
          <ul className="ul">
          <a className="link" smooth to="#home">
            <li className="li">Home</li>
            </Link>
            <a className="link" smooth to="#about">
              <li className="li">About</li>
            </Link>
            <a className="link" smooth to="#skills">
              <li className="li">Skills</li>
            </HashLink>
            <a className="link" smooth to="#contact">
              <li className="li">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <Fourthpage/>
      
      <div className="scroll-progress" style={{ height: `${scrollProgress}%` }}></div>
      <div
        className="scroll-up-btn"
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
        ↑
      </div>
    </>
  );
}

export default App;
