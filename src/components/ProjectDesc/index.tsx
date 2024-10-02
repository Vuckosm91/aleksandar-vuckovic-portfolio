import { PageContainer } from "../LandingPage/styled";
import {
  DescriptionWrapper,
  GrayContainer5,
  TextBanner,
  TextContainerDesc,
  TextContainerDescRot,
  TextDescReg,
  TextDescRot,
} from "./styled";

const ProjectDesc = () => {
  return (
    <PageContainer>
      <GrayContainer5>
        <TextBanner>Project Games</TextBanner>
      </GrayContainer5>
      <DescriptionWrapper>
        <TextContainerDescRot>
          <TextDescRot>
            TSX (TypeScript XML) <br /> CSS Chakra UI <br /> ReactQuery <br />{" "}
            Zustand (State managment) <br /> Vercel (deployment)
          </TextDescRot>
        </TextContainerDescRot>
        <TextContainerDesc>
          <TextDescReg>
            This project is a comprehensive gaming platform where users can
            explore a wide variety of games fetched from a backend server.
            <br />
            <br /> The platform provides robust filtering options allowing users
            to sort games by genre, platform, release year, title, and
            relevance. <br />
            <br />
            Additionally, users can search for specific game titles. Each game
            listed on the platform comes with detailed information including an
            average rating, supported platforms, and publisher details.
          </TextDescReg>
        </TextContainerDesc>
        <TextContainerDesc>
          <TextDescReg>
            When a user selects a game, they are taken to a dedicated page for
            that game, featuring a detailed description, screenshots, and a
            trailer (if available from the backend) <br />
            <br /> This platform aims to enhance the gaming discovery experience
            by providing intuitive and user-friendly navigation and search
            capabilities, ensuring that users can find and learn about games
            that match their interests.
          </TextDescReg>
        </TextContainerDesc>
      </DescriptionWrapper>
    </PageContainer>
  );
};

export default ProjectDesc;
