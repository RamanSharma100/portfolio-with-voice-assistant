interface IVoiceCommandObject {
  commands: string[];
  responses: string[];
  actions: string[];
}

export interface IVoiceCommandsDataJSON {
  name: IVoiceCommandObject;
  openNavigation: IVoiceCommandObject;
  closeNavigation: IVoiceCommandObject;
}

export const voiceCommandsDataJSON: IVoiceCommandsDataJSON = {
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
};
