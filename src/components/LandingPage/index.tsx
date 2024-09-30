import {
  ContactBoxText,
  ContactContainer,
  FacebookIcon,
  FlexContainerMax,
  GitHubIcon,
  InstagramIcon,
  LogoContainer,
  LogoImage,
  PageContainer,
  SocialContainer,
  SocialIconContainer,
} from "./styled";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const logoRef = useRef(null);
  const socBoxRef = useRef(null);
  const iconBoxRef = useRef(null);

  const mediaQuery = window.matchMedia("(max-width: 768px)");

  useEffect(() => {
    // Animacija za logo, uvek se pokreće
    gsap.fromTo(
      logoRef.current,
      { rotationZ: 0 }, // Početak bez rotacije
      {
        rotationZ: 180, // Rotacija u punom krugu po Z osi
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      }
    );

    // Animacija za socBox samo ako je ekran veći od 768px
    if (!mediaQuery.matches) {
      gsap.fromTo(
        socBoxRef.current,
        { opacity: 1, x: 0, y: 0 }, // Početak bez pomeranja
        {
          opacity: 0,
          x: 100,
          y: 100,
          scrollTrigger: {
            trigger: socBoxRef.current,
            start: "top 15%",
            end: "bottom 15%",
            scrub: true,
          },
        }
      );
    }

    // Animacija za iconBox, uvek se pokreće
    gsap.fromTo(
      iconBoxRef.current,
      { opacity: 1, x: 0, y: 0 }, // Početak bez pomeranja
      {
        opacity: 0,
        x: 0,
        y: 100,
        scrollTrigger: {
          trigger: iconBoxRef.current,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      }
    );
  }, [mediaQuery]);

  return (
    <>
      <PageContainer>
        <FlexContainerMax>
          <SocialContainer ref={iconBoxRef}>
            <SocialIconContainer>
              <FacebookIcon />
            </SocialIconContainer>
            <SocialIconContainer>
              <InstagramIcon />
            </SocialIconContainer>
            <SocialIconContainer>
              <GitHubIcon />
            </SocialIconContainer>
          </SocialContainer>
          <LogoContainer ref={logoRef}>
            <LogoImage />
          </LogoContainer>
          <ContactContainer ref={socBoxRef}>
            <ContactBoxText>reach out to me</ContactBoxText>
          </ContactContainer>
        </FlexContainerMax>
      </PageContainer>
    </>
  );
};

export default LandingPage;
