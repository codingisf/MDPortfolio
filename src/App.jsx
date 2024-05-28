import "./App.css";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import ScrollPage from "./ScrollPage/ScrollPage";
import Fourthpage from "./FourthPage/Fourthpage";
import Navbar from "./Navbar/Navbar";
import ScrollBar from "./ScrollBar";
import { Element } from "react-scroll";
import QulaificationPage from "./Qualifications/QulaificationPage";

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
        <Element name="QulaificationPage">
        <QulaificationPage/>
        </Element>
        
        <ScrollPage/>
        <Element name="contact">
          <Fourthpage/>
                 </Element>
      </div>
      <ScrollBar />
    </>
  );
}

export default App;
