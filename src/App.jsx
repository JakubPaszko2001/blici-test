import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience3 from "./components/Experience3";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

  // console.log(loadingProgress, "App");

  useEffect(() => {
    if (loadingProgress === 100) {
      // Set a timeout to hide the loader 2 seconds after hitting 100%
      const hideLoaderTimeout = setTimeout(() => {
        setShowLoader(false);
      }, 100); // Adjust the duration as needed

      // Clear the timeout when the component is unmounted or loadingProgress changes
      return () => clearTimeout(hideLoaderTimeout);
    }
  }, [loadingProgress]);

  return (
    <div className="App">
      {showLoader && (
        <div className="loader">
          <p className="Loading">Loading... {loadingProgress}%</p>
        </div>
      )}
      <Canvas>
        {/* <OrbitControls /> */}
        <color attach="background" args={["#F3F0DF"]} />
        <Experience3 setLoadingProgress={setLoadingProgress} />
      </Canvas>
    </div>
  );
}

export default App;
