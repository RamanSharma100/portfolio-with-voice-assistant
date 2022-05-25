interface IVoiceCommandObject {
  commands: string[];
  responses: string[];
  actions: string[];
  info: string;
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
  scrolling: IVoiceCommandObject;
  downloadResume: IVoiceCommandObject;
  openCommands: IVoiceCommandObject;
  explainCommands: IVoiceCommandObject;
}

export const voiceCommandsDataJSON: IVoiceCommandsDataJSON = {
  explainCommands: {
    commands: ["explain command "],
    responses: ["This command is used to *"],
    actions: ["explainCommands"],
    info: "Explains the particular command",
  },
  stopCommands: {
    commands: ["stop", "exit", "quit"],
    responses: ["Bye", "Goodbye", "See you later"],
    actions: ["stop"],
    info: "Stops Listening voice commands",
  },
  openSettings: {
    commands: ["settings open", "open settings"],
    responses: ["Opening settings "],
    actions: ["openSettings"],
    info: "Opens the settings",
  },
  closeSettings: {
    commands: ["settings close", "close settings"],
    responses: ["Closing settings"],
    actions: ["closeSettings"],
    info: "Closes the settings",
  },

  name: {
    commands: ["my name is ", "enter my name as ", " i am called", "this is "],
    responses: ["Hello!", "Hi!", "Hi there!", "Howdy!", "Greetings!"],
    actions: ["setName"],
    info: "Sets the name",
  },
  openNavigation: {
    commands: ["open navigation menu", "open menu"],
    responses: ["Opening navigation menu!"],
    actions: ["openMenu"],
    info: "Opens the navigation menu",
  },
  closeNavigation: {
    commands: ["close navigation menu", "close menu"],
    responses: ["Closing navigation menu!"],
    actions: ["closeMenu"],
    info: "Closes the navigation menu",
  },
  navigation: {
    commands: ["navigate to ", "go to ", "show me ", "move to "],
    responses: ["Navigated to "],
    actions: ["navigation"],
    info: "Navigates to a page",
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
      `I am a voice assistant, you can use me to ask questions about this website and with the help of me you can control this website with your voice, you can also ask me question such as who created you, what is your age, what is your job, how many pages are in this website,  and so on.`,
      "I am 1 week old",
      "I was created by Raman Sharma, a student of the Lovely Professional University and an owner of fullyworld web tutorials Youtube channel",
      "This website is made with typescript, bootstrap and reactjs",
    ],
    actions: [
      "tellPages",
      "tellRoutes",
      "tellName",
      "tellJob",
      "tellAge",
      "tellCreator",
      "tellAbout",
    ],
    info: "Asks questions about the website",
  },
  scrolling: {
    commands: ["scroll down", "scroll up", "scroll to top", "scroll to bottom"],
    responses: ["Scrolling *"],
    actions: ["scroll"],
    info: "Scrolls the page",
  },
  downloadResume: {
    commands: ["download resume"],
    responses: ["Downloading resume"],
    actions: ["downloadResume"],
    info: "Downloads the resume",
  },
  openCommands: {
    commands: [
      "open commands",
      "open command list",
      "show commands",
      "show command list",
      "show commands list",
      "open commands list",
    ],
    responses: ["Opening commands list"],
    actions: ["openCommands"],
    info: "Opens the commands list",
  },
};
