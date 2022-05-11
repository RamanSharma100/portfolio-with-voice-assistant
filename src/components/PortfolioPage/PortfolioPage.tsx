import { FunctionComponent as FC } from "react";

import IPortfolioPage from "./IPortfolioPage";

import "./PortfolioPage.css";

const PortfolioPage: FC<IPortfolioPage> = ({}) => {
  return (
    <div className="portfolio-page row ">
      <div className="scrollBar col-md-2">
        <input
          type="range"
          className="scrollBarRange"
          id="scrollBarRange"
          value="0"
          step="5"
        />
      </div>

      <div className="col-md-12 banner">
        <div className="githubYoutubeLink">
          <a href="https://www.github.com/RamanSharma100" target="_blank">
            <i className="fa fa-github"></i>
            <div className="linkinfo">
              <p>Github</p>
              <p>Raman Sharma</p>
            </div>
          </a>
          <a
            href="https://www.youtube.com/fullyworldwebtutorials"
            target="_blank"
          >
            <i className="fa fa-youtube-play"></i>
            <div className="linkinfo">
              <p>YouTube</p>
              <p>Fullyworld Web Tutorials</p>
            </div>
          </a>
        </div>
        <div className="BackgroundName">
          <h1 className="display-1">RAMAN</h1>
        </div>
        <div className="portfolioImage">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/developer-2143200-1801815.png"
            alt=""
          />
        </div>
        <div className="container infoPortfolio mx-auto d-flex align-items-center justify-content-center">
          <h1 className="text-center display-1 font-weight-bolder text-white">
            MY
          </h1>
          <div className="portfolioSubHeading mt-4">
            <p className="portfolioP text-center display-3 text-white font-weight-normal">
              PORTFOLIO
            </p>
            <p>
              Raman Sharma
              <a href="#portfolioPosts" className="btn ml-2">
                Explore &nbsp;&nbsp;<i className="fa fa-arrow-down"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
