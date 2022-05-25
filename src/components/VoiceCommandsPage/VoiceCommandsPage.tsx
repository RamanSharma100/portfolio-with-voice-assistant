import { FunctionComponent as FC } from "react";

import CommandsTable from "./CommandsTable";

import IVoiceCommandsPage from "./IVoiceCommandsPage";

const VoiceCommandsPage: FC<IVoiceCommandsPage> = ({ commands }) => {
  return (
    <div className="bg-black text-white">
      <h1 className="py-4 px-5">Voice Commands</h1>
      {Object.keys(commands).map((key, i) => (
        <div className="py-5 px-5" key={i * 7456}>
          <h4 className="py-4 px-5 text-capitalize text-center">
            {key.toLowerCase().replace("commands", "")} Commands
          </h4>
          <CommandsTable
            cols={["Commands", "Information"]}
            rows={(commands as any)[key].commands}
            info={(commands as any)[key].info}
          />
        </div>
      ))}
    </div>
  );
};

export default VoiceCommandsPage;
