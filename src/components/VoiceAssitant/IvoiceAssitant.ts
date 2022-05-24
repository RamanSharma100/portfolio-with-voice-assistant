export default interface IVoiceAssitant {
  enableFront: boolean;
  setEnableFront(enableFront: boolean): void;
  resumeRef: React.RefObject<HTMLAnchorElement>;
}
