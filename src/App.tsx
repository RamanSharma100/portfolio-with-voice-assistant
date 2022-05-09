import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { recognition } from "./APIs/speechRecognitionAPI";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import VoiceAssistant from "./components/VoiceAssitant/VoiceAssistant";
import Navigation from "./components/Navigation/Navigation";

import "./App.css";
import "./assets/styles/animations.css";

export default function App() {
  if (!recognition) {
    return <div>This browser donot support</div>;
  }

  const [enableFront, setEnableFront] = useState<boolean>(true);

  return (
    <>
      {!enableFront && <Navigation />}
      <div className="container-fluid px-0">
        <ToastContainer />
        <VoiceAssistant
          setEnableFront={setEnableFront}
          enableFront={enableFront}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}
