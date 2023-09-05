import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import TimerBox from "./components/TimerBox/TimerBox";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <TimerBox />
    </>
  );
}

export default App;
