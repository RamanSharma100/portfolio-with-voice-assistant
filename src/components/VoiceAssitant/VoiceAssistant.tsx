import { FunctionComponent as FC, useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import gsap, { Expo } from "gsap";

import { recognition } from "../../APIs/speechRecognitionAPI";
import useSpeechSynthesis from "../../hooks/useSpeechSynthesis";

import "./VoiceAssistant.css";

const VoiceAssistant: FC<any> = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  // const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [gretted, setGretted] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [enableFront, setEnableFront] = useState<boolean>(true);

  const [name, setName] = useState<string>("");

  const frontRef = useRef(null);

  const { speak, speaking, supported } = useSpeechSynthesis({
    callbackFunctions: [setText, setGretted],
    states: [gretted],
  });

  useEffect(() => {
    setTimeout(() => {
      recognition.start();
      setIsStarted(true);
      setIsMuted(false);
    }, 9510);
  }, []);

  const handleEnter = () => {
    if (name.length > 2) {
      gsap
        .to(frontRef.current, {
          duration: 0.5,
          y: "-100%",
          ease: Expo.easeOut,
        })
        .then(() => {
          setEnableFront(false);
          speak({
            text: `Hello ${name}!, Welcome here!`,
          });
        });
    } else {
      toast.info("Invalid name!");
      speak({
        text: `please enter your valid name!`,
      });
    }
  };

  // recognition

  recognition.onstart = () => {
    setIsMuted(false);
    setIsStarted(true);
  };

  recognition.onend = () => {
    if (!isMuted) {
      recognition.start();
    } else {
      setIsStarted(false);
      setIsMuted(true);
    }
  };

  return (
    <>
      {enableFront ? (
        <div
          ref={frontRef}
          className="w-100 h-100 position-fixed top-0 left-0 bg-black d-flex flex-column pt-5 align-items-center"
          style={{ zIndex: 9 }}
        >
          <div className="mic-container position-relative bg-primary mb-4 d-flex align-items-center justify-content-center mt-5 rounded-circle ">
            <i
              className="fas fa-microphone-alt text-white"
              style={{ fontSize: "10rem" }}
            />

            <div className={`${speaking ? "speaking" : "d-none"}`}></div>
            <div className={`${speaking ? "speaking2" : "d-none"}`}></div>
          </div>
          <h1 className="display-1 fw-bold text-white"> Voicey </h1>
          <p className="my-3 text-white">
            Welcome to Raman Sharma's portfolio website. I am Voicey, your
            personal assistant. Please tell me your name to begin.
          </p>

          <>
            <div className="d-flex w-50 px-5 mt-4 justify-content-center">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Type your name here"
                onChange={(e): void => setName(e.target.value)}
                value={name}
              />
              <input
                type="button"
                className="btn btn-primary rounded-0 "
                onClick={handleEnter}
                value="Enter"
              />
            </div>
            <p className="text-secondary info-front mt-5">
              {" "}
              Enter your name in the field and hit enter button or say command
              "my name is YOUR_NAME"
            </p>
          </>
        </div>
      ) : (
        <h1>hello</h1>
      )}
    </>
  );
};

export default VoiceAssistant;
