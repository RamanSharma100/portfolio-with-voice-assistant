import { ToastContainer } from "react-toastify";
import { recognition } from "./APIs/speechRecognitionAPI";
import VoiceAssistant from "./components/VoiceAssitant/VoiceAssistant";

import "./App.css";

export default function App() {
  if (!recognition) {
    return <div>This browser donot support</div>;
  }
  return (
    <div className="container-fluid px-0">
      <ToastContainer />
      <VoiceAssistant />
      <h1>hello world</h1>
    </div>
  );
}
