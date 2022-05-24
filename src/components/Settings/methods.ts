import gsap, { Power3 } from "gsap";

export const handleSettingsOpening = () => {
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

export const handleSettingsClosing = () => {
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
