interface IVoiceCommandObject {
  commands: string[];
  responses: string[];
  actions: string[];
}

export interface IVoiceCommandsDataJSON {
  stopCommands: IVoiceCommandObject;
  openSettings: IVoiceCommandObject;
  closeSettings: IVoiceCommandObject;
  name: IVoiceCommandObject;
  openNavigation: IVoiceCommandObject;
  closeNavigation: IVoiceCommandObject;
  navigation: IVoiceCommandObject;
  questions: IVoiceCommandObject;
}

export const voiceCommandsDataJSON: IVoiceCommandsDataJSON = {
  stopCommands: {
    commands: ["stop", "exit", "quit"],
    responses: ["Bye", "Goodbye", "See you later"],
    actions: ["stop"],
  },
  openSettings: {
    commands: ["settings open", "open settings"],
    responses: ["Opening settings "],
    actions: ["openSettings"],
  },
  closeSettings: {
    commands: ["settings close", "close settings"],
    responses: ["Closing settings"],
    actions: ["closeSettings"],
  },

  name: {
    commands: ["my name is ", "enter my name as ", " i am called", "this is "],
    responses: ["Hello!", "Hi!", "Hi there!", "Howdy!", "Greetings!"],
    actions: ["setName"],
  },
  openNavigation: {
    commands: ["open navigation menu", "open menu"],
    responses: ["Opening navigation menu!"],
    actions: ["openMenu"],
  },
  closeNavigation: {
    commands: ["close navigation menu", "close menu"],
    responses: ["Closing navigation menu!"],
    actions: ["closeMenu"],
  },
  navigation: {
    commands: ["navigate to ", "go to ", "show me ", "move to "],
    responses: ["Navigated to "],
    actions: ["navigation"],
  },
  questions: {
    commands: [
      "how many pages ",
      "how many routes",
      "who are you",
      "what is your name",
      "what is your job",
      "what is your age",
      "who created you",
      "how this website is made",
    ],
    responses: [
      "There are * pages in this website",
      "In this website * routes are available",
      "I am Voicey!. I am your personal voice assistant",
      "My name is Voicey!",
      `I am a voice assistant, you can use me to ask questions about this website and with the help of me youcan control this website with your voice, you can also ask me question such as *`,
      "I am 1 week old",
      "I was created by Raman Sharma, a student of the Lovely Professional University and an owner of fullyworld web tutorials Youtube channel",
      "This website is made with typescript, bootstrap and reactjs",
    ],
    actions: ["tellPages", "tellRoutes"],
  },
};
