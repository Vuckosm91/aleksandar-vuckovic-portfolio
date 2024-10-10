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
          TSX (TypeScript XML) <br /> CSS Chakra UI <br /> ReactQuery <br />{" "}
          Zustand (State managment) <br /> Vercel (deployment)
        </ProjectCoverProt>
        <ProjectCoverPreg>
          This project is a comprehensive gaming platform where users can
          explore a wide variety of games fetched from a backend server. <br />
          <br />
          The platform provides robust filtering options allowing users to sort
          games by genre, platform, release year, title, and relevance. <br />
          <br />
          Additionally, users can search for specific game titles. Each game
          listed on the platform comes with detailed information including an
          average rating, supported platforms, and publisher details.
        </ProjectCoverPreg>
        <ProjectCoverPreg>
          When a user selects a game, they are taken to a dedicated page for
          that game, featuring a detailed description, screenshots, and a
          trailer (if available from the backend) <br />
          <br />
          This platform aims to enhance the gaming discovery experience by
          providing intuitive and user-friendly navigation and search
          capabilities, ensuring that users can find and learn about games that
          match their interests.
        </ProjectCoverPreg>
      </ProjectCoverTextBox>
    </ProjectCoverLayoutSm>
  );
};

export default ProjectCoverDescr;
