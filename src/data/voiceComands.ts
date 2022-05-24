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
    commands: ["how many pages ", "how many routes"],
    responses: [
      "There are * pages in this website",
      "In this website * routes are available",
    ],
    actions: ["tellPages", "tellRoutes"],
  },
};
