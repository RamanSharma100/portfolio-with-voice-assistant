import { FunctionComponent as FC } from "react";

import SettingsIcon from "../../assets/icons/settingsIcon.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";

import ISettings from "./ISettings";

import "./Settings.css";
import { handleSettingsClosing, handleSettingsOpening } from "./methods";

const Settings: FC<ISettings> = ({}) => {
  return (
    <>
      <div
        className="settings-tab-btn d-flex align-item-center justify-content-between"
        onClick={handleSettingsOpening}
      >
        <img src={SettingsIcon} alt="settings" height={20} width={20} />
        <p className="my-0 d-flex align-items-center justify-content-center ms-1 fw-normal">
          Settings
        </p>
      </div>
      <div className="settings-back-container position-fixed h-100 w-100 bg-primary"></div>
      <div
        className="container-fluid settings-container px-5 py-5 position-fixed top-0 left-0 h-100 w-100 bg-light"
        style={{ zIndex: 999 }}
      >
        <div
          role="button"
          className="close-btn d-flex align-item-center justify-content-end me-5 cursor-pointer "
          onClick={handleSettingsClosing}
        >
          <img src={CloseIcon} alt="close" height={30} width={30} />
          <p className="my-0 d-flex align-items-center justify-content-center ms-2 fw-normal">
            Close
          </p>
        </div>

        <div className="settings-content mt-5 px-5">
          <div className="settings-content-header d-flex align-item-center justify-content-between">
            <h2 className="my-0 d-flex align-items-center justify-content-center ms-1 fw-normal">
              Settings
            </h2>

            <div className="settings-content-header-btn d-flex align-item-center justify-content-center">
              <button className="btn btn-primary rounded-0">Save</button>
              <button className="btn btn-danger ms-2 rounded-0">Reset</button>
            </div>
          </div>

          <div className="settings-content-body">
            <div className="settings-content-body-item">
              <div className="settings-content-body-item-content">
                <div className="d-flex align-tems-center justify-content-center gap-5 mt-5">
                  <h3 className="my-0  ms-1 fw-normal ">Language</h3>
                  <div className="d-flex align-items-center my-0  gap-2 justify-content-center">
                    <input type="radio" checked value={0} disabled />{" "}
                    <p className="my-0">English</p>
                  </div>
                </div>
              </div>
              <div className="settings-content-body-item-content">
                <div className="d-flex align-tems-center justify-content-center gap-5 mt-5">
                  <h3 className="my-0  ms-1 fw-normal ">
                    Enable Voice Control
                  </h3>
                  <div className="d-flex align-items-center my-0  gap-2 justify-content-center">
                    <input type="radio" checked value={0} disabled />{" "}
                    <p className="my-0">Yes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
