import { useEffect, useRef } from "react";
import { AboutFirstContainer, PageContainer } from "../LandingPage/styled";
import {
  ContentAboutContainer,
  ContentPlaceholder,
  ContentText,
  GrayContainer,
  PictureContainer,
  TextContainer,
} from "./styled";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutFirst = () => {
  const mediaQuery = window.matchMedia("(max-width: 1024px)");
  const mediaQuerySmall = window.matchMedia("(max-width: 480px)");
  const grayBoxRef = useRef(null);
  const picBoxRef = useRef(null);
  const textFirstRef = useRef(null);
  const textSecRef = useRef(null);

  useEffect(() => {
    if (!mediaQuery.matches) {
      gsap.fromTo(
        grayBoxRef.current,
        { opacity: 0, x: -100 }, // Početak bez rotacije
        {
          opacity: 1,
          x: 0, // Rotacija u punom krugu po Z osi
          scrollTrigger: {
            trigger: grayBoxRef.current,
            start: "15% 25%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        picBoxRef.current,
        { opacity: 0, x: -200 }, // Početak bez rotacije
        {
          opacity: 1,
          x: 0, // Rotacija u punom krugu po Z osi
          scrollTrigger: {
            trigger: picBoxRef.current,
            start: "30% 60%",
            end: "55% 70%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textFirstRef.current,
        { opacity: 0, x: -200 }, // Početak bez rotacije
        {
          opacity: 1,
          x: 0, // Rotacija u punom krugu po Z osi
          scrollTrigger: {
            trigger: textFirstRef.current,
            start: "10% 70%",
            end: "75% 70%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textSecRef.current,
        { opacity: 0, x: -200 }, // Početak bez rotacije
        {
          opacity: 1,
          x: 0, // Rotacija u punom krugu po Z osi
          scrollTrigger: {
            trigger: textSecRef.current,
            start: "10% 70%",
            end: "75% 70%",
            scrub: true,
          },
        }
      );
    }

    if (mediaQuery.matches) {
      gsap.fromTo(
        grayBoxRef.current,
        { opacity: 0, x: -900 }, // Početak bez rotacije
        {
          opacity: 1,
          x: 0,
          // Rotacija u punom krugu po Z osi
          scrollTrigger: {
            trigger: grayBoxRef.current,
            start: "-15% 100%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        picBoxRef.current,
        { opacity: 0, x: -800 }, // Početak bez rotacije
        {
          opacity: 1,
          x: 0, // Rotacija u punom krugu po Z osi
          scrollTrigger: {
            trigger: picBoxRef.current,
            start: "-50% 75%",
            end: "20% 85%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textFirstRef.current,
        { opacity: 0, x: -200 }, // Početak bez rotacije
        {
          opacity: 1,
          x: 0, // Rotacija u punom krugu po Z osi
          scrollTrigger: {
            trigger: textFirstRef.current,
            start: "10% 70%",
            end: "75% 70%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        textSecRef.current,
        { opacity: 0, x: -200 }, // Početak bez rotacije
        {
          opacity: 1,
          x: 0, // Rotacija u punom krugu po Z osi
          scrollTrigger: {
            trigger: textSecRef.current,
            start: "10% 70%",
            end: "55% 70%",
            scrub: true,
          },
        }
      );

      /*   if (mediaQuerySmall.matches) {
        gsap.fromTo(
          picBoxRef.current,
          { opacity: 0, x: -200 }, // Početak bez rotacije
          {
            opacity: 1,
            x: 0, // Rotacija u punom krugu po Z osi
            scrollTrigger: {
              trigger: picBoxRef.current,
              start: "-20% 80%",
              end: "50% 80%",
              scrub: true,
              markers: true,
            },
          }
        );
      } */
    }
  }, []);

  return (
    <>
      <PageContainer>
        <AboutFirstContainer>
          <GrayContainer ref={grayBoxRef} />
          <PictureContainer ref={picBoxRef} />
          <ContentAboutContainer>
            <ContentPlaceholder />
            <TextContainer>
              <ContentText ref={textFirstRef}>
                My name is Aleksandar Vuckovic, and I have been living in Munich
                since 2016. I embarked on my journey into frontend development
                in 2019, starting with learning HTML and CSS. With the help of
                Bootstrap, I began creating web pages and then proceeded to
                learn JavaScript.
              </ContentText>
              <ContentText ref={textSecRef}>
                I attended IT Academy, where I revisited the fundamentals of
                HTML, CSS, and JavaScript, and learned how to create databases
                using Wamp server, as well as performing queries on those
                databases. After completing the course, I continued to advance
                my skills independently, learning TypeScript, and soon after, I
                started working with ReactTS.
              </ContentText>
            </TextContainer>
          </ContentAboutContainer>
        </AboutFirstContainer>
      </PageContainer>
    </>
  );
};

export default AboutFirst;
