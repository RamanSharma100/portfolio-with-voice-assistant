import { FunctionComponent as FC, useRef, useEffect, useState } from "react";

import IPortfolioPage from "./IPortfolioPage";

import "./PortfolioPage.css";

const PortfolioPage: FC<IPortfolioPage> = ({}) => {
  const posts: any[] = [];
  const [scrollBarInput, setScrollBarInput] = useState<number>(window.scrollY);

  const customScrollBarRef = useRef<HTMLDivElement>(null);
  const customScrollBarInputRef = useRef<HTMLInputElement>(null);
  const backgroundNameRef = useRef<HTMLDivElement>(null);
  const backgroundNameH1Ref = useRef<HTMLHeadingElement>(null);
  const portfolioImageRef = useRef<HTMLDivElement>(null);

  let offsetY = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (offsetY / height) * 100;

  const handleChange = (e: any) => {
    offsetY = document.documentElement.scrollTop;
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scrolled = (offsetY / height) * 100;
    setScrollBarInput(scrolled);
  };

  useEffect(() => {
    if (null !== customScrollBarInputRef.current) {
      customScrollBarInputRef.current.maxLength = window.scrollY;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      offsetY = document.documentElement.scrollTop;
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      scrolled = (offsetY / height) * 100;
      if (null !== customScrollBarInputRef.current) {
        customScrollBarInputRef.current.value = `${scrolled}`;
      }

      if (null !== backgroundNameRef.current) {
        backgroundNameRef.current.style.right = window.scrollY * 0.9 + "px";
        backgroundNameRef.current.style.bottom = window.scrollY * 0.9 + "px";
      }
      if (null !== portfolioImageRef.current) {
        portfolioImageRef.current.style.bottom = window.scrollY * 0.2 + "px";
      }
    });
  });

  return (
    <div className="portfolio-page row ">
      <div className="scrollBar col-md-2" ref={customScrollBarRef}>
        <input
          type="range"
          className="scrollBarRange"
          id="scrollBarRange"
          value={scrollBarInput}
          step="5"
          onChange={handleChange}
          ref={customScrollBarInputRef}
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
        <div
          className="BackgroundName"
          ref={backgroundNameRef}
          style={{ zIndex: 1 }}
        >
          <h1 className="display-1" ref={backgroundNameH1Ref}>
            RAMAN
          </h1>
        </div>
        <div
          className="portfolioImage"
          ref={portfolioImageRef}
          style={{ zIndex: 1 }}
        >
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/developer-2143200-1801815.png"
            alt=""
          />
        </div>
        <div
          className="container infoPortfolio mx-auto d-flex align-items-center justify-content-center"
          style={{ zIndex: 3 }}
        >
          <h1 className="text-center display-1 font-weight-bolder text-white">
            MY
          </h1>
          <div className="portfolioSubHeading mt-4">
            <p className="portfolioP text-center display-3 text-white font-weight-normal">
              PORTFOLIO
            </p>
            <p>
              Raman Sharma
              <a href="#portfolioPosts" className="btn ms-2">
                Explore &nbsp;&nbsp;<i className="fa fa-arrow-down"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 portfolioPosts" id="portfolioPosts">
        {posts.length > 0 ? (
          <>
            {posts.map((post, index) => (
              <div className="col-md-10 postBox mx-auto">
                <div className="post">
                  <div className="Postinfo mr-3">
                    <h1 className="postTitle display-4">
                      {/* <%= portfolio.postTitle %> */}
                    </h1>
                    <p className="postDescription lead pr-4 py-2">
                      {/* <%= portfolio.postDescription %> */}
                    </p>
                    <div className="postLinks my-5">
                      <a href="$" target="_blank" className="btn">
                        View Demo
                      </a>
                      <a href="#" target="_blank" className="btn">
                        View Source
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 img">
                    <img
                      src="#"
                      alt="postTitle"
                      title="oistTitle"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="container ml-auto">
            <h1 className="text-center display-2">No Portfolio Found</h1>
          </div>
        )}
        {posts.length > 5 && (
          <div className="col-md-12 loadMore text-center py-5">
            <a href="#" className="btn text-center text-dark">
              Load More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
