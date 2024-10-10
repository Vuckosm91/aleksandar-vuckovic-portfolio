import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  GrayBox1,
  LandingPageBox,
  LandRotHeadAbs,
  LogoBox,
  SocialBox,
  SocialIconBox,
} from "./styled";

import { GitIcon, InstagramIcon, FacebookIcon } from "../Icons";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 1, y: 0, x: 0, rotate: 0 },
      {
        opacity: 0,
        y: 0,
        x: 0,
        rotate: 180,
        scrollTrigger: {
          trigger: logoRef.current,
          start: "30% 20%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <LandingPageBox>
      <SocialBox>
        <SocialIconBox>{FacebookIcon}</SocialIconBox>
        <SocialIconBox>{InstagramIcon}</SocialIconBox>
        <SocialIconBox>{GitIcon}</SocialIconBox>
      </SocialBox>
      <LogoBox ref={logoRef} />
      <GrayBox1>
        <LandRotHeadAbs>reach out to me</LandRotHeadAbs>
      </GrayBox1>
    </LandingPageBox>
  );
};

export default LandingPage;
