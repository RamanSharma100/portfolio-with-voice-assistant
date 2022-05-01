import { useEffect, useState } from "react";
import { recognition } from "../APIs/speechRecognitionAPI";

interface IProps {
  callbackFunctions?: any;
  states?: any;
}

export interface IArgs {
  voice?: null | any;
  text?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
}

const useSpeechSynthesis = (props: IProps = {}) => {
  const { callbackFunctions, states }: IProps = props;

  const { onEnd = () => {} } = {};
  const [speaking, setSpeaking] = useState<boolean>(false);
  const [supported, setSupported] = useState<boolean>(false);

  const handleEnd = () => {
    setSpeaking(false);
    // callbackFunctions[0](false);
    callbackFunctions[0]("");
    onEnd();
  };

  useEffect((): void => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setSupported(true);
    }
  }, []);

  const speak = (args: IArgs = {}) => {
    const {
      voice = null,
      text = "",
      rate = 1,
      pitch = 1,
      volume = 1,
    }: IArgs = args;

    if (!supported) return;

    setSpeaking(true);

    // Firefox won't repeat an utterance that has been
    // spoken, so we need to create a new instance each time
    const utterance: SpeechSynthesisUtterance =
      new window.SpeechSynthesisUtterance();

    utterance.text = text;
    utterance.voice = voice;
    utterance.onend = handleEnd;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    window.speechSynthesis.speak(utterance);
  };

  const cancel = (): void => {
    if (!supported) return;
    setSpeaking(false);
    window.speechSynthesis.cancel();
  };

  return {
    supported,
    speak,
    speaking,
    cancel,
  };
};

export default useSpeechSynthesis;
