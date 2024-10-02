import {
  ContainerCover,
  ContainerInner,
  DescPageContainer,
  DescPageContainer2,
  DescPageSecContainer,
  GrayContainer6,
  RotatedText,
  TextDesc1reg,
  TextDesc1soft,
} from "./styled";

const ProjectDescSM = () => {
  const mediaBreakpoint = window.matchMedia("(max-width: 780px)");
  return (
    <DescPageContainer>
      {!mediaBreakpoint.matches && <GrayContainer6 />}
      <DescPageContainer2>
        <RotatedText>{!mediaBreakpoint.matches && "Project Games"}</RotatedText>
        <DescPageSecContainer>
          <ContainerInner>
            <ContainerCover />
            <TextDesc1soft>
              TSX (TypeScript XML) | CSS Chakra UI | ReactQuery | ustand (State
              managment) | Vercel (deployment)
            </TextDesc1soft>
            <>
              <TextDesc1reg>
                This project is a comprehensive gaming platform where users can
                explore a wide variety of games fetched from a backend server.
                The platform provides robust filtering options allowing users to
                sort games by genre, platform, release year, title, and
                relevance. Additionally, users can search for specific game
                titles. Each game listed on the platform comes with detailed
                information including an average rating, supported platforms,
                and publisher details. When a user selects a game, they are
                taken to a dedicated page for that game, featuring a detailed
                description, screenshots, and a trailer (if available from the
                backend)
              </TextDesc1reg>
            </>
          </ContainerInner>
        </DescPageSecContainer>
      </DescPageContainer2>
    </DescPageContainer>
  );
};

export default ProjectDescSM;
