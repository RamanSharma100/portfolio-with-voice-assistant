interface IVoiceCommandObject {
  commands: string[];
  responses: string[];
  actions: string[];
}

export interface IVoiceCommandsDataJSON {
  name: IVoiceCommandObject;
}

export const voiceCommandsDataJSON: IVoiceCommandsDataJSON = {
  name: {
    commands: ["my name is ", "enter my name as ", " i am called", "this is "],
    responses: [
      "Hello!",
      "Hi!",
      "Hi there!",
      "Howdy!",
      "Hola!",
      "Bonjour!",
      "Greetings!",
      "Wolah!",
    ],
    actions: ["setName"],
  },
};
