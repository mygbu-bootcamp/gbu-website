import { useEffect, useState } from "react";
import AppRouter from "./routes/router";
import PreLoad from "../src/components/home/preLoad.jsx";
import Primarynavbar from "../src/components/home/Primarynavbar.jsx";
import Navbar from "../src/components/home/Navbar.jsx";
import Footer from "../src/components/home/Footer.jsx";

function App() {
  const [isPreloadComplete, setIsPreloadComplete] = useState(() => {
    return localStorage.getItem("preloadComplete") === "true";
  });

  useEffect(() => {
    if (isPreloadComplete) {
      localStorage.setItem("preloadComplete", "true");
    }
  }, [isPreloadComplete]);

  return (
    <div className="App">
      {!isPreloadComplete ? (
        <PreLoad onComplete={() => setIsPreloadComplete(true)} />
      ) : (
        <>
          <Primarynavbar />
          <Navbar />
          <AppRouter />
          <Footer />

        </>
      )}
    </div>
  );
}

export default App;
