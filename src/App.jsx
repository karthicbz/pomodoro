import { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import TimerBox from "./components/TimerBox/TimerBox";
import "./App.css";

export const TimerContext = createContext(null);

function App() {
  const [allTime, setAllTime] = useState(0);

  function setCurrentTime(t) {
    setTime(t);
  }
  return (
    <>
      <TimerContext.Provider value={{ allTime, setAllTime }}>
        <Navbar />
        <TimerBox />
      </TimerContext.Provider>
    </>
  );
}

export default App;
