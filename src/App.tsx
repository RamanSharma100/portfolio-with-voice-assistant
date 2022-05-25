import { useState, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { recognition } from "./APIs/speechRecognitionAPI";
import { Route, Routes } from "react-router-dom";

import { voiceCommandsDataJSON } from "./data/voiceComands";

import HomePage from "./components/HomePage/HomePage";
import VoiceAssistant from "./components/VoiceAssitant/VoiceAssistant";
import Navigation from "./components/Navigation/Navigation";
import Settings from "./components/Settings/Settings";
import PortfolioPage from "./components/PortfolioPage/PortfolioPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import VoiceCommandsPage from "./components/VoiceCommandsPage/VoiceCommandsPage";

import "./App.css";
import "./assets/styles/animations.css";

export default function App() {
  const resumeRef = useRef<HTMLAnchorElement>(null);

  if (!recognition) {
    return <div>This browser donot support</div>;
  }

  const [enableFront, setEnableFront] = useState<boolean>(true);

  return (
    <>
      {!enableFront && <Navigation />}
      {!enableFront && <Settings />}
      <div className="container-fluid px-0">
        <ToastContainer />
        <VoiceAssistant
          setEnableFront={setEnableFront}
          enableFront={enableFront}
          resumeRef={resumeRef}
        />
        <Routes>
          <Route path="/" element={<HomePage resumeRef={resumeRef} />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/commands"
            element={<VoiceCommandsPage commands={voiceCommandsDataJSON} />}
          />
        </Routes>
        <footer
          className="footer col-md-12 py-5 text-center text-white"
          style={{ background: "#000" }}
        >
          <p>
            &copy; copyright {new Date().getFullYear()} by{" "}
            <a
              href="https://www.ramasharma.tech"
              className="text-decoration-none text-white"
            >
              Raman Sharma
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
