import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AboutFirst from "./AboutFirst";
import AboutSec from "./AboutSec";
import LandingPage from "./LandingPage";
import { ScrollContainer } from "./LandingPage/styled";
import ProjectCover from "./ProjectCover";
import ProjectDesc from "./ProjectDesc";
import ProjectDescSM from "./ProjectDescSM";

gsap.registerPlugin(ScrollTrigger);

const ScrollPage = () => {
  const pageOneRef = useRef(null);
  const pageTwoRef = useRef(null);

  const mediaQuery = window.matchMedia("(max-width: 1024px)");

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
      {!mediaQuery.matches && (
        <>
          <div>
            <ProjectCover />
          </div>

          <div>
            <ProjectDesc />
          </div>
        </>
      )}

      {mediaQuery.matches && (
        <div>
          <ProjectDescSM />
        </div>
      )}
    </ScrollContainer>
  );
};

export default ScrollPage;
