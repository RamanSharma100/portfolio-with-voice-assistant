import { FunctionComponent as FC, useEffect, useState, useRef } from "react";

import IAboutPage from "./IAboutPage";

import "./AboutPage.css";

const AboutPage: FC<IAboutPage> = ({}) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const myImageRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const navLinksLiRef = useRef<Element[]>([]);

  useEffect(() => {
    if (null !== bannerRef.current) {
      bannerRef.current.classList.add("animated", "fadeIn");
      bannerRef.current.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        if (null !== myImageRef.current) {
          myImageRef.current.style.top = y * 0.55 + "px";
          myImageRef.current.style.left = x * 0.25 + "px";
        }
      });
    }

    // if (null !== navLinksLiRef.current) {
    //   navLinksLiRef.current.forEach((e) => {
    //     const section = e.children[0].getAttribute("href");
    //     const sectionOffset = document.querySelector(section).offset().top  - 10;
    //     if (sectionOffset <= scrollbarlocation) {
    //       for (let i = 0; i < e.parentElement.children.length; i++) {
    //         e.parentElement.children[i].classList.remove("active");
    //       }
    //       e.classList.add("active");
    //     }
    //   });
    // }
  });

  useEffect(() => {
    if (null !== navLinksRef.current) {
      navLinksLiRef.current = Array.from(navLinksRef.current.children);
    }
  }, []);

  let scrollbarlocation = document.documentElement.scrollTop;

  // window.onscroll = () => {
  //   scrollbarlocation = $(this).scrollTop();
  //   navLinksLi.forEach((e) => {
  //     const section = e.children[0].getAttribute("href");
  //     const sectionOffset = $(section).offset().top - 10;
  //     if (sectionOffset <= scrollbarlocation) {
  //       for (let i = 0; i < e.parentElement.children.length; i++) {
  //         e.parentElement.children[i].classList.remove("active");
  //       }
  //       e.classList.add("active");
  //     }
  //   });
  // };

  return (
    <div className="row aboutme" id="aboutme">
      <div className="side text-white lead">
        <div></div>
        <p>About Me</p>
        <div></div>
      </div>
      <div className="col-md-12 banner" ref={bannerRef} id="home">
        <div className="myImage" ref={myImageRef}>
          <div className="imageBox"></div>
          <div className="imageBox"></div>
          <div className="imageBox"></div>
          <div className="imageBox"></div>
        </div>
        <div className="info">
          <h1 className="display-4 text-center">
            ABOUT <span>ME</span>
          </h1>
        </div>
        <a href="#whoAmI" className="btn knowMe">
          Know Me
        </a>
        <ul className="links" ref={navLinksRef}>
          <li className="nav-item active">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#whoAmI" className="nav-link">
              Who am i?
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
        </ul>
      </div>

      <div
        className="col-md-12 whoAmI"
        id="whoAmI"
        style={{ scrollSnapAlign: "center" }}
      >
        <div className="col-md-5 mr-5 text">
          <p className="text-white lead">
            I am a 3rd year student, studying in
            <b>Lovely Professional University</b> in <strong>BTech. CSE</strong>
            . I am also running a YouTube channel named
            <strong>
              <a
                href="https://www.youtube.com/fullyworldwebtutorials"
                target="_blank"
                className="text-white"
              >
                Fullyworld Web Tutorials
              </a>
            </strong>
            from <b>3 Year</b> and now currently having over
            <strong>12.1K Subscribers</strong>. I am a very passionated
            programmer and web developer and excited for very interesting
            projects and believe in hard work and to learn more and more.
          </p>
        </div>
        <div className="heading">
          <h1 className="display-1">
            WHO
            <p>AM</p>
          </h1>
          <h3 className="display-1">i?</h3>
        </div>
      </div>
      <div
        className="col-md-12 study"
        id="education"
        style={{ scrollSnapAlign: "center" }}
      >
        <h1 className="col-md-4 mainHeading">My Education</h1>
        <div className="educationList">
          <div className="years year2023 d-flex">
            <div className="heading">2023</div>
            <div className="info">
              <h1 className="dispay-1">Lovely Professional University</h1>
              <p className="lead">
                Degree in (Btech. Computer Science And Engineering)
              </p>
            </div>
          </div>
          <div className="years year2023 d-flex">
            <div className="heading">2019</div>
            <div className="info">
              <h1 className="dispay-1">Sant Sarwan Dass Model School</h1>
              <p className="lead">
                Intermediate with Maths ,Physics and Chemistry from CBSE Board
                with 80%
              </p>
            </div>
          </div>
          <div className="years year2023 d-flex">
            <div className="heading">2017</div>
            <div className="info">
              <h1 className="dispay-1">Sant Sarwan Dass Model School</h1>
              <p className="lead">High school form CBSE Board with 80%</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-12 skills  "
        id="skills"
        style={{ scrollSnapAlign: "center" }}
      >
        <h1 className="font-weight-bolder display-2 mb-5">Skills</h1>
        <div className="skillBars my-5 p-3" style={{ height: "auto" }}>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">HTML</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Advanced
              </div>
            </div>
          </div>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">CSS</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "95%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Advanced
              </div>
            </div>
          </div>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">JAVASCRIPT</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Advanced
              </div>
            </div>
          </div>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">PHP</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Intermediate
              </div>
            </div>
          </div>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">REACT JS</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Advanced
              </div>
            </div>
          </div>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">NODE JS</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Intermediate
              </div>
            </div>
          </div>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">C++</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Intermediate
              </div>
            </div>
          </div>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">Java</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "45%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Basics
              </div>
            </div>
          </div>
          <div className="col-md-12 my-1 border border-bottom-2 border-top-0 border-start-0 border-end-0 p-2 pb-5 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-light font-weight-bolder p-2">Python</h3>
            <div
              className="progress my-2 d-block w-100"
              style={{ background: "transparent" }}
            >
              <div
                className="progress-bar progress-bar-striped bg-light text-dark font-weight-bolder"
                role="progressbar"
                style={{ width: "70%" }}
                aria-valuenow={10}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                Intermediate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
