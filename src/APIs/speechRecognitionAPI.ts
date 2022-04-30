// declare global {
//   interface Window {
//     speechRecognition: any;
//     webkitSpeechRecognition: any;
//   }
// }

const speechRecognition =
  (<any>window).speechRecognition ||
  (<any>window).webkitSpeechRecognition ||
  null;

export const recognition = speechRecognition ? new speechRecognition() : null;
