import { FunctionComponent as FC, useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import gsap, { Expo } from "gsap";
import { useNavigate } from "react-router-dom";

import { recognition } from "../../APIs/speechRecognitionAPI";
import {
  IVoiceCommandsDataJSON,
  voiceCommandsDataJSON,
} from "../../data/voiceComands";
import IVoiceAssitant from "./IvoiceAssitant";
import useSpeechSynthesis from "../../hooks/useSpeechSynthesis";
import { handleMenuClosing, handleMenuOpening } from "../Navigation/methods";
import {
  handleSettingsClosing,
  handleSettingsOpening,
} from "../Settings/methods";
import { getRoutes } from "./methods";
import checkCommands, { ICheckCommands } from "./checkCommands";

import "./VoiceAssistant.css";

const VoiceAssistant: FC<IVoiceAssitant> = ({
  enableFront,
  setEnableFront,
}: IVoiceAssitant) => {
  const {
    name: { responses },
  }: IVoiceCommandsDataJSON = voiceCommandsDataJSON;

  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(true);
  const [gretted, setGretted] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const [name, setName] = useState<string>("");

  const frontRef = useRef(null);
  const frontBackRef = useRef(null);
  const flotIconRef = useRef(null);
  const frontInputRef = useRef(null);
  const frontTextRef = useRef(null);

  const navigate = useNavigate();

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

      recognition.start();
      setIsStarted(true);
      setIsMuted(false);
    }, 9510);
  }, []);

  useEffect(() => {
    if (!isSpeaking) {
      setIsSpeaking(false);
      // setTimeout(() => setText(""), 5000);
    }
  }, [speaking]);

  const handleEnter = (userName?: string) => {
    if (name.length > 2 || (userName && userName.length > 2)) {
      gsap
        .to(frontRef.current, {
          duration: 0.5,
          y: "-100%",
          ease: Expo.easeOut,
        })
        .then((): void => {
          gsap
            .to(frontBackRef.current, {
              duration: 0.5,
              y: "-100%",
              ease: Expo.easeOut,
              delay: 0.2,
            })
            .then((): void => {
              setEnableFront(false);

              const randomNo = Math.floor(Math.random() * responses.length);
              if (name) {
                setText(`${responses[randomNo]} ${name}!, Welcome here!`);
                speak({
                  text: `${responses[randomNo]} ${name}!, Welcome here!`,
                });
              } else {
                setText(`${responses[randomNo]} ${userName}!, Welcome here!`);
                speak({
                  text: `${responses[randomNo]} ${userName}!, Welcome here!`,
                });
              }
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
      recognition.start();
    } else {
      setIsMuted(true);
      setText("stopped taking commands! Thank you!");
      speak({ text: "stopped taking commands! Thank you!" });
      recognition.stop();
    }
  };

  // recognition

  recognition.onstart = () => {
    setIsMuted(false);
    setIsStarted(true);
  };

  recognition.onresult = (event: any) => {
    const command = event.results[0][0].transcript.toLowerCase();

    const { commandAction, commandType, commandName }: ICheckCommands =
      checkCommands(command);
    if (commandAction && commandName) {
      if (commandType === "stopCommands") {
        setIsMuted(true);
        setIsStarted(false);
        setText("stopped taking commands! Thank you!");
        speak({ text: "stopped taking commands! Thank you!" });
      }
      if (commandType === "name" && enableFront) {
        setName(command.replace(commandName, "").trim());
        handleEnter(command.replace(commandName, "").trim());
      }
      if (commandType === "openNavigation") {
        handleMenuOpening();
        setText((voiceCommandsDataJSON as any)[commandType].responses[0]);
        speak({
          text: (voiceCommandsDataJSON as any)[commandType].responses[0],
        });
      }
      if (commandType === "closeNavigation") {
        handleMenuClosing();
        setText((voiceCommandsDataJSON as any)[commandType].responses[0]);
        speak({
          text: (voiceCommandsDataJSON as any)[commandType].responses[0],
        });
      }
      if (commandType === "navigation") {
        const page = command
          .toLowerCase()
          .replace(commandName, "")
          .trim()
          .replace("page", "")
          .replace("us", "")
          .replace(".", "")
          .trim();
        if (["home", "index", "front"].includes(page)) {
          navigate("/");
        }
        const allPages: string[] = getRoutes();
        if (allPages.includes(page)) {
          navigate(`/${page}`);
        }

        setText(
          `${
            (voiceCommandsDataJSON as any)[commandType].responses[0]
          } ${page} page`
        );
        speak({
          text: `${
            (voiceCommandsDataJSON as any)[commandType].responses[0]
          } ${page} page`,
        });
      }
      if (commandType === "questions") {
        if (commandName.includes("pages") || commandName.includes("routes")) {
          const routes: string[] = getRoutes();
          setText(
            `${(voiceCommandsDataJSON as any)[commandType].responses[
              commandName.includes("routes") ? 1 : 0
            ].replace("*", routes.length)}. Home ${routes.join(
              ", "
            )} , are the routes`
          );
          speak({
            text: `${(voiceCommandsDataJSON as any)[commandType].responses[
              commandName.includes("routes") ? 1 : 0
            ].replace("*", routes.length)}. Home ${routes.join(
              ", "
            )} , are the routes`,
          });
        } else if (
          (voiceCommandsDataJSON as any)["questions"].commands.includes(
            commandName
          )
        ) {
          setText(
            (voiceCommandsDataJSON as any)["questions"].responses[
              (voiceCommandsDataJSON as any)["questions"].commands.indexOf(
                commandName
              )
            ]
          );
          speak({
            text: (voiceCommandsDataJSON as any)["questions"].responses[
              (voiceCommandsDataJSON as any)["questions"].commands.indexOf(
                commandName
              )
            ].replace("*", (voiceCommandsDataJSON as any)["questions"]),
          });
        }
      }
      if (commandType === "openSettings") {
        handleSettingsOpening();
        setText((voiceCommandsDataJSON as any)[commandType].responses[0]);
        speak({
          text: (voiceCommandsDataJSON as any)[commandType].responses[0],
        });
      }
      if (commandType === "closeSettings") {
        handleSettingsClosing();
        setText((voiceCommandsDataJSON as any)[commandType].responses[0]);
        speak({
          text: (voiceCommandsDataJSON as any)[commandType].responses[0],
        });
      }
    }
    if (commandType === "scrolling") {
      const newCommand = commandName;
      const cmd = newCommand
        .replace("scroll", "")
        .trim()
        .replace("to", "")
        .trim();
      if (cmd === "top") {
        window.scrollTo(0, 0);

        setText("Scrolling to the top of the page");
        speak({
          text: "Scrolling to the top of the page",
        });
      }
      if (cmd === "bottom") {
        window.scrollTo(0, document.body.scrollHeight);
        setText("Scrolling to the bottom of the page");
        speak({
          text: "Scrolling to the bottom of the page",
        });
      }
      if (cmd === "up") {
        window.scrollBy(0, -100);
        setText("Scrolling up by 100 pixel");
        speak({
          text: "Scrolling up by 100 pixel",
        });
      }
      if (cmd === "down") {
        window.scrollBy(0, 100);
        setText("Scrolling Down by 100 pixel");
        speak({
          text: "Scrolling Down by 100 pixel",
        });
      }
    }
  };

  recognition.onend = () => {
    if (!isMuted) {
      recognition.start();
    } else {
      setIsStarted(false);
      setIsMuted(true);
      recognition.stop();
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
                onClick={() => handleEnter()}
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
