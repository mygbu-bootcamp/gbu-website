 import { useState } from "react";
import { Outlet, useLocation } from 'react-router-dom';
import "./App.css";
import PreLoad from "./components/preLoad";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const location = useLocation();

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
          
           

          <Outlet /> {/* Other pages will render here */}
        </>
      )}
    </div>
  );
}

export default App;
