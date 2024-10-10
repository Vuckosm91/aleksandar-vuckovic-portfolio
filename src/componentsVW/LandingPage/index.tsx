import {
  GrayBox1,
  LandingPageBox,
  LandRotHeadAbs,
  LogoBox,
  SocialBox,
  SocialIconBox,
} from "./styled";

import { GitIcon, InstagramIcon, FacebookIcon } from "../Icons";

const LandingPage = () => {
  return (
    <LandingPageBox>
      <SocialBox>
        <SocialIconBox>{FacebookIcon}</SocialIconBox>
        <SocialIconBox>{InstagramIcon}</SocialIconBox>
        <SocialIconBox>{GitIcon}</SocialIconBox>
      </SocialBox>
      <LogoBox />
      <GrayBox1>
        <LandRotHeadAbs>reach out to me</LandRotHeadAbs>
      </GrayBox1>
    </LandingPageBox>
  );
};

export default LandingPage;
