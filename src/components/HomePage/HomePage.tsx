import { FunctionComponent as FC } from "react";

import IHomePage from "./IHomePage";
import MyImage from "../../assets/images/mypic.png";

import "./HomePage.css";

const HomePage: FC<IHomePage> = ({}: IHomePage) => {
  return (
    <div className="row mx-0 home" id="home">
      <div className="col-md-12 banner">
        <div className="glichesBanner"></div>
        <div className="imageBanner">
          {/* <div className="glitchBox">
        { for
        (let i=0; i<1000; i++)(
        <div className="gliches"></div>
        )
        }
      </div> */}

          <img className="image1" src={MyImage} />
        </div>
        <div className="info">
          <h1 className="bannerHeading" data-text="I Am A Web Developer">
            I Am A <span>Web Developer</span>
          </h1>
          <p className="bannerSubHeading">Make anything possible</p>
          <div className="btns">
            <a href="#" title="my resume">
              Download resume
            </a>
            <a href="#" title="hire me">
              Hire me
            </a>
          </div>
        </div>
        <div className="socialIcons">
          <a
            href="https://youtube.com/fullyworldwebtutorials"
            title="youtube"
            target="_blank"
          >
            <i className="fa fa-youtube-play"></i>Youtube
          </a>
          <a
            href="https://www.linkedin.com/in/raman-sharma-2169b0139/"
            title="linked in"
            target="_blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/fullyworld.webtutorials.5/"
            title="facebook"
            target="_blank"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com/FullyworldT"
            title="twitter"
            target="_blank"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
