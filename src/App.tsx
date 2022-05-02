import { ToastContainer } from "react-toastify";
import { recognition } from "./APIs/speechRecognitionAPI";

import HomePage from "./components/HomePage/HomePage";
import VoiceAssistant from "./components/VoiceAssitant/VoiceAssistant";

import "./App.css";
import "./assets/styles/animations.css";

export default function App() {
  if (!recognition) {
    return <div>This browser donot support</div>;
  }
  return (
    <div className="container-fluid px-0">
      <ToastContainer />
      <VoiceAssistant />

      <HomePage />
    </div>
  );
}
