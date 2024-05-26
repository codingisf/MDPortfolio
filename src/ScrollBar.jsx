import React from 'react'
import { useState, useEffect } from "react";

function ScrollBar() {
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
    <div className="scroll-progress" style={{ height: `${scrollProgress}%` }}></div>
    <div
      className="scroll-up-btn"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      ↑
    </div></>
  )
}

export default ScrollBar