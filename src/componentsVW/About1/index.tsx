import { AboutFirstBox, AboutPhoto, AboutText, AboutTextBox } from "./styled";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutFirst = () => {
  const mediaBreakPoint = window.matchMedia("(min-width: 1024px)");

  const imageRef = useRef(null);

  useEffect(() => {
    {
      mediaBreakPoint.matches
        ? gsap.fromTo(
            imageRef.current,
            { opacity: 0, y: 0, x: -100 },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scrollTrigger: {
                trigger: imageRef.current,
                start: "20% 60%",
                end: "50% 55%",
                scrub: true,
              },
            }
          )
        : gsap.fromTo(
            imageRef.current,
            { opacity: 0, y: 0, x: -100 },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scrollTrigger: {
                trigger: imageRef.current,
                start: "10% 60%",
                end: "50% 55%",
                scrub: true,
              },
            }
          );
    }
  }, []);

  return (
    <AboutFirstBox>
      <AboutPhoto ref={imageRef} />
      <AboutTextBox>
        <AboutText>
          My name is Aleksandar Vuckovic, and I live in Munich, Germany. I
          embarked on my professional journey into frontend development in 2019,
          when I began creating web and mobile user interfaces around the React
          ecosystem. <br /> Since childhood I've been in love with technology,
          but it took me a while until I decided to shape up my career in that
          direction. <br /> I attended IT Academy, where I learned the
          fundamentals of CSS and JavaScript, but also got familiar with
          relational databases and back-end development. After completing the
          course, I decided to lean towards the front-end development and
          continued to advance my skills independently. <br /> I hold a Bachelor
          Degree in business administration.
        </AboutText>
      </AboutTextBox>
    </AboutFirstBox>
  );
};

export default AboutFirst;
