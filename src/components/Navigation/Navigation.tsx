import { FunctionComponent as FC } from "react";
import { Link } from "react-router-dom";
import { handleMenuClosing, handleMenuOpening } from "./methods";

import INavigation from "./Inavigation";

import MenuIcon from "../../assets/icons/menuIcon.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";

import "./Navigation.css";

const Navigation: FC<INavigation> = ({}) => {
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

        <nav className="mt-5 main-navigation p-5 d-flex justify-content-center">
          <ul className="navigation-list py-5">
            <li className="navigation-list-item">
              <Link to="/" onClick={handleMenuClosing}>
                Home
              </Link>
            </li>
            <li className="navigation-list-item">
              <Link to="/portfolio" onClick={handleMenuClosing}>
                Portfolio
              </Link>
            </li>
            <li className="navigation-list-item">
              <Link to="/about" onClick={handleMenuClosing}>
                About
              </Link>
            </li>
            <li className="navigation-list-item">
              <Link to="/contact" onClick={handleMenuClosing}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
