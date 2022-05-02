import { FunctionComponent as FC, useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import gsap, { Expo } from "gsap";

import { recognition } from "../../APIs/speechRecognitionAPI";
import useSpeechSynthesis from "../../hooks/useSpeechSynthesis";
import IVoiceAssitant from "./IvoiceAssitant";

import "./VoiceAssistant.css";

const VoiceAssistant: FC<IVoiceAssitant> = ({}: IVoiceAssitant) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(true);
  const [gretted, setGretted] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [enableFront, setEnableFront] = useState<boolean>(true);

  const [name, setName] = useState<string>("");

  const frontRef = useRef(null);
  const frontBackRef = useRef(null);
  const flotIconRef = useRef(null);
  const frontInputRef = useRef(null);
  const frontTextRef = useRef(null);

  const { speak, speaking, supported } = useSpeechSynthesis({
    callbackFunctions: [setText, setGretted],
    states: [gretted],
  });

  useEffect(() => {
    setTimeout(() => {
      setIsSpeaking(false);
      gsap
        .to(frontInputRef.current, {
          duration: 0.2,
          marginLeft: 0,
          ease: Expo.easeIn,
        })
        .then(() => {
          gsap.to(frontTextRef.current, {
            duration: 0.2,
            marginRight: 0,
            ease: Expo.easeIn,
          });
        });

      // recognition.start();
      // setIsStarted(true);
      // setIsMuted(false);
    }, 9510);
  }, []);

  useEffect(() => {
    if (!isSpeaking) {
      setIsSpeaking(false);
      // setTimeout(() => setText(""), 5000);
    }
  }, [speaking]);

  const handleEnter = () => {
    if (name.length > 2) {
      gsap
        .to(frontRef.current, {
          duration: 0.5,
          y: "-100%",
          ease: Expo.easeOut,
        })
        .then((): void => {
          gsap.to(frontBackRef.current, {
            duration: 0.5,
            y: "-100%",
            ease: Expo.easeOut,
            delay: 0.2,
          });
          gsap.to(".home .banner .imageBanner img", {
            duration: 0.5,
            delay: 0.7,
            top: "-15%",
            ease: "expo.inOut",
          });
          gsap.to(".home .banner .info h1.bannerHeading", {
            duration: 0.5,
            delay: 1.2,
            left: "0",
            ease: "expo.inOut",
          });
          gsap.to(".home .banner .info .bannerSubHeading", {
            duration: 0.5,
            delay: 1.7,
            left: "0",
            ease: "expo.inOut",
          });
          gsap.to(".home .banner .info .btns a:nth-child(2)", {
            duration: 0.5,
            delay: 2.2,
            left: "0",
            ease: "expo.inOut",
          });
          gsap.to(".home .banner .info .btns a:nth-child(1)", {
            duration: 0.5,
            delay: 2.7,
            left: "0",
            ease: "expo.inOut",
          });
          gsap.to(".home .banner .socialIcons a:nth-child(4)", {
            duration: 0.5,
            delay: 3.2,
            left: "0",
            ease: "expo.inOut",
          });
          gsap.to(".home .banner .socialIcons a:nth-child(3)", {
            duration: 0.5,
            delay: 3.7,
            left: "0",
            ease: "expo.inOut",
          });
          gsap.to(".home .banner .socialIcons a:nth-child(2)", {
            duration: 0.5,
            delay: 4.2,
            left: "0",
            ease: "expo.inOut",
          });
          gsap
            .to(".home .banner .socialIcons a:nth-child(1)", {
              duration: 0.5,
              delay: 4.7,
              left: "0",
              ease: "expo.inOut",
            })
            .then((): void => {
              setEnableFront(false);
              setText(`Hello ${name}!, Welcome here!`);
              speak({
                text: `Hello ${name}!, Welcome here!`,
              });
            });
        });
    } else {
      toast.info("Invalid name!");
      setText("please enter your valid name!");
      speak({
        text: "please enter your valid name!",
      });
    }
  };

  const handleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      setText("started taking commands! How can i help you?");
      speak({ text: "started taking commands! How can i help you?" });
      // recognition.start();
    } else {
      setIsMuted(true);
      setText("stopped taking commands! Thank you!");
      speak({ text: "stopped taking commands! Thank you!" });
      // recognition.stop();
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

  if (enableFront) {
    return (
      <>
        <div
          className="front-back-dev position-fixed top-0 left-0 h-100 w-100 bg-primary"
          style={{ zIndex: 8 }}
          ref={frontBackRef}
        ></div>
        <div
          ref={frontRef}
          className="w-100 h-100 position-fixed top-0 left-0 bg-black d-flex flex-column pt-5 align-items-center"
          style={{ zIndex: 9 }}
        >
          <div className="mic-container position-relative bg-primary mb-4 d-flex align-items-center justify-content-center mt-5 rounded-circle ">
            <i
              className="fas fa-microphone-alt text-white"
              style={{ fontSize: "10rem" }}
            ></i>

            <div
              className={`${speaking || isSpeaking ? "speaking" : "d-none"}`}
            ></div>
            <div
              className={`${speaking || isSpeaking ? "speaking2" : "d-none"}`}
            ></div>
          </div>
          <h1 className="display-1 fw-bold text-white"> Voicey </h1>
          <p className="my-3 text-white">
            Welcome to Raman Sharma's portfolio website. I am Voicey, your
            personal assistant. Please tell me your name to begin.
          </p>
          <>
            <div
              ref={frontInputRef}
              className="d-flex w-50 px-5 mt-4 justify-content-center"
              style={{ marginLeft: "-200%" }}
            >
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
            <p
              ref={frontTextRef}
              style={{ marginRight: "-200%" }}
              className="text-secondary info-front mt-5"
            >
              {" "}
              Enter your name in the field and hit enter button or say command
              "my name is YOUR_NAME"
            </p>
          </>
        </div>
      </>
    );
  }

  return (
    <div
      ref={flotIconRef}
      className="float-voice-btn  d-flex align-items-center justify-content-center rounded-circle"
      style={{ zIndex: 99 }}
    >
      <div
        className={`mic-container-float btn ${
          !isMuted ? "btn-primary" : "btn-danger"
        } w-100 h-100 position-relative d-flex align-items-center justify-content-center rounded-circle`}
        onClick={handleMute}
      >
        {(isSpeaking || speaking) && (
          <p className=" float-text  pe-4 ps-2 text-dark position-absolute right-100">
            {text}
          </p>
        )}
        <i
          className="fas fa-microphone-alt  text-light"
          style={{ fontSize: "1rem" }}
        ></i>
        <div
          className={`${speaking || isSpeaking ? "speaking3" : "d-none"}`}
        ></div>
        <div
          className={`${speaking || isSpeaking ? "speaking4" : "d-none"}`}
        ></div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
