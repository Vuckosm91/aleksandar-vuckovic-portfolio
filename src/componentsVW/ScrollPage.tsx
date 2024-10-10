import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import LandingPage from "./LandingPage";
import AboutFirst from "./About1";
import AboutSecond from "./About2";
import ProjectCoverL from "./ProjectCoverL";
import ProjectCoverDescr from "./ProjectCoverL/description";
import ProjectCoverSm from "./ProjectCoverSm";
import { ScrollContainer } from "./LandingPage/styled";
import ContactForm from "./Contact";

gsap.registerPlugin(ScrollTrigger);

const ScrollPage = () => {
  const pageOneRef = useRef(null);
  const pageTwoRef = useRef(null);

  const mediaBreakPoint = window.matchMedia("(min-width: 1024px)");

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
      {mediaBreakPoint.matches ? (
        <>
          <div>
            <ProjectCoverL />
          </div>
          <div>
            <ProjectCoverDescr />
          </div>
        </>
      ) : (
        <div>
          <ProjectCoverSm />
        </div>
      )}
      <div>
        <ContactForm />
      </div>
    </ScrollContainer>
  );
};

export default ScrollPage;
