import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PreLoad from "./components/preLoad";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloadComplete = () => {
    setShowPreloader(false);
  };

  return (
    <div className="App">
      {showPreloader ? (
        <PreLoad onComplete={handlePreloadComplete} />
      ) : (
        <>
          <Navbar />
          <Landing />
        </>
      )}
    </div>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0);
//
//   return (
//     <>
//       <PreLoad />
//       <navbar />
//       <landing />
//     </>
//   );
// }
//
