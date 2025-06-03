import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PreLoad from "./components/preLoad";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PreLoad />
      {/* <Navbar /> */}
      {/* <Landing /> */}
    </>
  );
}

export default App;
