import { FunctionComponent as FC } from "react";
import gsap, { Power3 } from "gsap";

import INavigation from "./Inavigation";

import MenuIcon from "../../assets/icons/menuIcon.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";

import "./Navigation.css";

const Navigation: FC<INavigation> = ({}) => {
  const handleMenuOpening = () => {
    gsap.to(".navigation-back-container", {
      duration: 0.3,
      left: 0,
      ease: Power3.easeInOut,
    });
    gsap.to(".navigation-container", {
      duration: 0.3,
      delay: 0.1,
      left: 0,
      ease: Power3.easeIn,
    });
  };

  const handleMenuClosing = () => {
    gsap.to(".navigation-container", {
      duration: 0.3,
      left: "100%",
      ease: Power3.easeOut,
    });
    gsap.to(".navigation-back-container", {
      duration: 0.3,
      left: "100%",
      delay: 0.5,
      ease: Power3.easeInOut,
    });
  };

  return (
    <>
      <div
        className="menu-tab-btn d-flex align-item-center justify-content-between"
        onClick={handleMenuOpening}
      >
        <img src={MenuIcon} alt="menu" height={30} width={30} />
        <p className="my-0 d-flex align-items-center justify-content-center ms-1 fw-normal">
          Menu
        </p>
      </div>
      <div className="navigation-back-container position-fixed h-100 w-100 bg-primary"></div>
      <div
        className="container-fluid navigation-container px-5 py-5 position-fixed top-0 left-0 h-100 w-100 bg-light"
        style={{ zIndex: 99 }}
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
        Hello
      </div>
    </>
  );
};

export default Navigation;
