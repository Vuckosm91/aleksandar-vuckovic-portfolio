import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import LandingPage from "../componentsVW/LandingPage";
import { ScrollContainer } from "./LandingPage/styled";
import AboutFirst from "../componentsVW/About1";
import AboutSecond from "../componentsVW/About2";
import ProjectCoverL from "../componentsVW/ProjectCoverL";
import ProjectCoverDescr from "../componentsVW/ProjectCoverL/description";
import ProjectCoverSm from "../componentsVW/ProjectCoverSm";

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
      <div>
        <LandingPage />
      </div>
      <div>
        <AboutFirst />
      </div>
      <div>
        <AboutSecond />
      </div>
      <div>
        <ProjectCoverL />
      </div>
      <div>
        <ProjectCoverDescr />
      </div>
      <div>
        <ProjectCoverSm />
      </div>
    </ScrollContainer>
  );
};

export default ScrollPage;
