import gsap, { Power3 } from "gsap";

export const handleMenuOpening = (): void => {
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

export const handleMenuClosing = (): void => {
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
