 
import { useState } from "react";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreLoad from "../src/component_home/preLoad.jsx"; 
import AppRouter from "./routes/router.jsx";

function App() {
  const [isPreloadComplete, setIsPreloadComplete] = useState(false);

  return (
    <div className="App">
      {!isPreloadComplete && <PreLoad onComplete={() => setIsPreloadComplete(true)} />}
      {isPreloadComplete && 
      <AppRouter/>}
    </div>
  );
}

export default App;
