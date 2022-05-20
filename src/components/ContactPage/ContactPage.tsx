import { FunctionComponent as FC } from "react";

import IContactPage from "./IContactPage";
import MyImage from "../../assets/images/Untitled-1.jpg";

import "./ContactPage.css";

const ContactPage: FC<IContactPage> = ({}) => {
  return (
    <div className="row contactus bg-dark" id="contact">
      <div className="contactusBanner">
        <div className="cardBanner col-md-8 mx-auto">
          <div className="myImage">
            <img src={MyImage} alt="my image" />
          </div>
          <div className="contactME">
            <h1 className="heading text-dark">Contact Me</h1>
            <div className="contactInfo bg-light text-dark">
              <div className="info phone">
                <p>
                  <i className="fa fa-phone"></i>
                  Phone
                </p>
                <div className="icons">
                  <a href="tel:+91-9877270616">+91-9877270616</a>
                </div>
              </div>
              <div className="info email">
                <p>
                  <i className="fa fa-envelope"></i>
                  Email
                </p>
                <div className="icons">
                  <a href="mailto:rs9463194297@gmail.com">
                    rs9463194297@gmail.com
                  </a>
                </div>
              </div>
              <div className="info alternateEmail">
                <p>
                  <i className="fa fa-youtube-play"></i>
                  Youtube
                </p>
                <div className="icons">
                  <a
                    href="https://youtube.com/fullyworldwebtutorials"
                    target="_blank"
                  >
                    Youtube Channel: Fullyworld Web Tutorials
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrowDown">
          <i className="fa fa-angle-down"></i>
          <p>Scroll Down</p>
        </div>
      </div>
      <div className="socialIcons">
        <a href="http://www.youtube.com/fullyworldwebtutorials" target="_blank">
          <i className="fa fa-youtube-play"></i> Youtube
        </a>
        <a href="http://www.github.com/RamanSharma100" target="_blank">
          <i className="fa fa-github"></i> Github
        </a>
        <a
          href="https://www.linkedin.com/in/raman-sharma-2169b0139/"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i> Linkedin
        </a>
        <a
          href="https://www.instagram.com/fullyworld_web_tutorials/"
          target="_blank"
        >
          <i className="fa fa-instagram"></i> Instagram
        </a>
        <a href="https://twitter.com/FullyworldT" target="_blank">
          <i className="fa fa-twitter"></i> Twitter
        </a>
      </div>
      <div className="contactForm col-md-12" id="contactForm">
        <h1 className="display-1 text-center mt-5 text-light font-weight-bolder py-5">
          Contact Me
        </h1>

        <form className="col-md-7 mx-auto" method="post">
          <div className="form-group d-flex col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control my-1"
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control my-1"
                placeholder="Email"
              />
              <input
                type="number"
                name="phone"
                id="phone"
                className="form-control my-1"
                placeholder="Phone"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                className="form-control my-1"
                placeholder="Subject"
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                name="message"
                id="message"
                className="form-control my-1"
                placeholder="Enter your message..."
                minLength={20}
              ></textarea>
            </div>
          </div>
          <div className="form-group col-md-12 px-3">
            <input
              type="submit"
              className="btn btn-block form-control btn-outline-light my-1"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
