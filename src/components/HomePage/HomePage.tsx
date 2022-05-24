import { FunctionComponent as FC } from "react";

import IHomePage from "./IHomePage";
import MyImage from "../../assets/images/mypic.png";

import "./HomePage.css";

const HomePage: FC<IHomePage> = ({ resumeRef }: IHomePage) => {
  return (
    <div className="home-page row mx-0 w-100">
      <div className="home-page-left d-flex flex-column align-items-center  mt-5 px-5 py-5 col-12 col-md-6 px-0">
        <h1 className="home-page-title my-5 text-white display-4 ">
          I am a{" "}
          <span
            className="fw-bold"
            data-title1="Tech Enthusiast"
            data-title2="Youtuber"
          >
            Web Developer
          </span>
        </h1>
        <p className="home-page-subtitle px-5 text-white">
          I am a passionate full stack web developer, tech enthusiast and
          youtuber. I have a passion for building applications that are user
          friendly and easy to use. I am currently in the third year of Btech.
          CSE.
        </p>

        <div className="col-md-12 d-flex flex-row gap-2 my-5 align-items-center px-5">
          <a
            href={"../../assets/docs/Raman Sharma.pdf"}
            ref={resumeRef}
            download={true}
            className="btn btn-outline-light"
          >
            Download Resume
          </a>
          <a href="#" className="btn btn-light">
            Hire Me
          </a>
        </div>

        <div className="col-md-12 d-flex flex-row gap-2 my-5 align-items-center px-5">
          <a href="#" className="btn text-light">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="btn text-light">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="btn text-light">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="home-page-right px-5 col-12 col-md-6 px-0">
        <div className="home-page-right-container">
          <div className="home-page-right-container-image mt-5 px-5 overflow-hidden">
            <img
              src={MyImage}
              alt="My Image"
              className="img-responsive border border-1 rounded-3 mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
