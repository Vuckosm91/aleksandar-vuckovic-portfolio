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
  const pageThreeRef = useRef(null);
  const pageFourRef = useRef(null);
  const coverImageRef = useRef(null);
  const pageFiveRef = useRef(null);

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
          start: "50% top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    /* Second Page Animate */

    gsap.fromTo(
      pageTwoRef.current,
      { opacity: 0, y: 0, x: 0 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageTwoRef.current,
          start: "top 100%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      pageTwoRef.current,
      { opacity: 1, y: 0, x: 0 },
      {
        opacity: 0,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageTwoRef.current,
          start: "50% top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    /* Third Page Animate */

    gsap.fromTo(
      pageThreeRef.current,
      { opacity: 0, y: 0, x: 0 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageThreeRef.current,
          start: "top 100%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      pageThreeRef.current,
      { opacity: 1, y: 0, x: 0 },
      {
        opacity: 0,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageThreeRef.current,
          start: "50% top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    /* Fourth Page Animate */

    gsap.fromTo(
      pageFourRef.current,
      { opacity: 0, y: 0, x: 0 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageFourRef.current,
          start: "top 100%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      pageFourRef.current,
      { opacity: 1, y: 0, x: 0 },
      {
        opacity: 0,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageFourRef.current,
          start: "50% top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    /* Cover Image Animate */

    gsap.fromTo(
      coverImageRef.current,
      { opacity: 0, y: 0, x: 0 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: coverImageRef.current,
          start: "top 100%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      coverImageRef.current,
      { opacity: 1, y: 0, x: 0 },
      {
        opacity: 0,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: coverImageRef.current,
          start: "50% top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    /* Fifth Page Animate */

    gsap.fromTo(
      pageFiveRef.current,
      { opacity: 0, y: 0, x: 0 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scrollTrigger: {
          trigger: pageFiveRef.current,
          start: "top 100%",
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
      <div ref={pageThreeRef}>
        <AboutSecond />
      </div>
      {mediaBreakPoint.matches ? (
        <>
          <div ref={coverImageRef}>
            <ProjectCoverL />
          </div>
          <div ref={pageFourRef}>
            <ProjectCoverDescr />
          </div>
        </>
      ) : (
        <div ref={pageFourRef}>
          <ProjectCoverSm />
        </div>
      )}
      <div ref={pageFiveRef}>
        <ContactForm />
      </div>
    </ScrollContainer>
  );
};

export default ScrollPage;
