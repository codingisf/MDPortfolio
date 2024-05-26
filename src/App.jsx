import "./App.css";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import Fourthpage from "./FourthPage/Fourthpage";
import Navbar from "./Navbar/Navbar";
import ScrollBar from "./ScrollBar";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Element name="home">
          <FirstPage />
        </Element>
        <Element name="about">
          <SecondPage />
        </Element>
        <Element name="skills">
          <ThirdPage />
        </Element>
        <Element name="contact">
          <Fourthpage/>
                 </Element>
      </div>
      <ScrollBar />
    </>
  );
}

export default App;
