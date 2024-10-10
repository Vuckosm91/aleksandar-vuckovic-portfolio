import {
  ProjectCoverDescBox,
  ProjectCoverSmLayout,
  ProjectPhotoSm,
  RotatedHeadlineAbs,
} from "./styled";
import { AboutText, AboutTextLight } from "../About1/styled";

const ProjectCoverSm = () => {
  return (
    <ProjectCoverSmLayout>
      <RotatedHeadlineAbs>Project Games</RotatedHeadlineAbs>

      <ProjectCoverDescBox>
        <ProjectPhotoSm />
        <div>
          <AboutTextLight>
            TSX (TypeScript XML) | CSS Chakra UI | ReactQuery | Zustand (State
            managment) | Vercel (deployment)
          </AboutTextLight>
          <AboutText>
            This project is a comprehensive gaming platform where users can
            explore a wide variety of games fetched from a backend server.
          </AboutText>
          <AboutText>
            The platform provides robust filtering options allowing users to
            sort games by genre, platform, release year, title, and relevance.
          </AboutText>
          <AboutText>
            Additionally, users can search for specific game titles. Each game
            listed on the platform comes with detailed information including an
            average rating, supported platforms, and publisher details.
          </AboutText>
          <AboutText>
            When a user selects a game, they are taken to a dedicated page for
            that game, featuring a detailed description, screenshots, and a
            trailer (if available from the backend)
          </AboutText>
        </div>
      </ProjectCoverDescBox>
    </ProjectCoverSmLayout>
  );
};

export default ProjectCoverSm;
