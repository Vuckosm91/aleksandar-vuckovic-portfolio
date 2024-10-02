import { FlexContainerRow, PageContainer } from "../LandingPage/styled";
import { GrayContainer4, ProjectCoverPhoto } from "./styled";

const ProjectCover = () => {
  return (
    <>
      <PageContainer>
        <ProjectCoverPhoto />
        <FlexContainerRow>
          <GrayContainer4 />
        </FlexContainerRow>
      </PageContainer>
    </>
  );
};

export default ProjectCover;
