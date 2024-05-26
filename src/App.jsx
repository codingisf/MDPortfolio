import "./App.css";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import Fourthpage from "./FourthPage/Fourthpage";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ScrollBar from "./ScrollBar";


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <Fourthpage/>
     <ScrollBar/>
    </BrowserRouter>
  );
}

export default App;
