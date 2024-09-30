import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AboutFirst from "./AboutFirst";
import LandingPage from "./LandingPage";
import { ScrollContainer } from "./LandingPage/styled";
import AboutSec from "./AboutSec";

gsap.registerPlugin(ScrollTrigger);

const ScrollPage = () => {
  const pageOneRef = useRef(null);
  const pageTwoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pageOneRef.current,
      { opacity: 1, y: 0, x: 0 },
      {
        opacity: 0,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageOneRef.current,
          start: "top top",
          end: "bottom 5%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      pageTwoRef.current,
      { opacity: 0, y: 0, x: 0 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageTwoRef.current,
          start: "top 75%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <ScrollContainer>
      <div ref={pageOneRef}>
        <LandingPage />
      </div>
      <div ref={pageTwoRef}>
        <AboutFirst />
      </div>
      <div>
        <AboutSec />
      </div>
    </ScrollContainer>
  );
};

export default ScrollPage;
