import { FunctionComponent as FC } from "react";
import gsap, { Power3 } from "gsap";

import SettingsIcon from "../../assets/icons/settingsIcon.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";

import ISettings from "./ISettings";

import "./Settings.css";

const Settings: FC<ISettings> = ({}) => {
  const handleMenuOpening = () => {
    gsap.to(".settings-back-container", {
      duration: 0.3,
      right: 0,
      ease: Power3.easeInOut,
    });
    gsap.to(".settings-container", {
      duration: 0.3,
      delay: 0.1,
      right: 0,
      ease: Power3.easeIn,
    });
  };

  const handleMenuClosing = () => {
    gsap.to(".settings-container", {
      duration: 0.3,
      right: "100%",
      ease: Power3.easeOut,
    });
    gsap.to(".settings-back-container", {
      duration: 0.3,
      right: "100%",
      delay: 0.5,
      ease: Power3.easeInOut,
    });
  };

  return (
    <>
      <div
        className="settings-tab-btn d-flex align-item-center justify-content-between"
        onClick={handleMenuOpening}
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
          onClick={handleMenuClosing}
        >
          <img src={CloseIcon} alt="close" height={30} width={30} />
          <p className="my-0 d-flex align-items-center justify-content-center ms-2 fw-normal">
            Close
          </p>
        </div>
      </div>
    </>
  );
};

export default Settings;
