import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PreLoad from "../src/components/home/preLoad.jsx"; 
import AppRouter from "./routes/router";

function App() {
  const [isPreloadComplete, setIsPreloadComplete] = useState(false);

  return (
    <div className="App">
      {!isPreloadComplete && <PreLoad onComplete={() => setIsPreloadComplete(true)} />}
      {isPreloadComplete && (
        <>
          <AppRouter />
        </>
      )}
    </div>
  );
}

export default App;