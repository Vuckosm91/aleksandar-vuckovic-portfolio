import {
  GrayBox1,
  LandingPageBox,
  LogoBox,
  SocialBox,
  SocialIconBox,
} from "./styled";

const LandingPage = () => {
  return (
    <LandingPageBox>
      <SocialBox>
        <SocialIconBox>1</SocialIconBox>
        <SocialIconBox>2</SocialIconBox>
        <SocialIconBox>3</SocialIconBox>
      </SocialBox>
      <LogoBox />
      <GrayBox1>1111</GrayBox1>
    </LandingPageBox>
  );
};

export default LandingPage;
