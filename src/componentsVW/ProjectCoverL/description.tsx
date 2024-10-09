import {
  ProjectCoverGrayBox,
  ProjectCoverH1,
  ProjectCoverLayoutSm,
  ProjectCoverPreg,
  ProjectCoverProt,
  ProjectCoverTextBox,
} from "./styled";

const ProjectCoverDescr = () => {
  return (
    <ProjectCoverLayoutSm>
      <ProjectCoverGrayBox>
        <ProjectCoverH1>Project Games</ProjectCoverH1>
      </ProjectCoverGrayBox>
      <ProjectCoverTextBox>
        <ProjectCoverProt>
          TSX (TypeScript XML) <br /> CSS Chakra UI <br /> ReactQuery Zustand
          (State managment) <br /> Vercel (deployment)
        </ProjectCoverProt>
        <ProjectCoverPreg>
          This project is a comprehensive gaming platform where users can
          explore a wide variety of games fetched from a backend server.
        </ProjectCoverPreg>
        <ProjectCoverPreg>
          When a user selects a game, they are taken to a dedicated page for
          that game, featuring a detailed description, screenshots, and a
          trailer (if available from the backend)
        </ProjectCoverPreg>
      </ProjectCoverTextBox>
    </ProjectCoverLayoutSm>
  );
};

export default ProjectCoverDescr;
