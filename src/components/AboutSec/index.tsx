import { ContentText } from "../AboutFirst/styled";
import { FlexContainerRow, PageContainer } from "../LandingPage/styled";
import {
  BuildingPicContainer,
  FlexContainerAboutSec,
  FlexContainerAboutSecText,
  GrayContainer2,
  GrayContainer3,
} from "./styled";

const AboutSec = () => {
  return (
    <>
      <PageContainer>
        <FlexContainerRow>
          <FlexContainerAboutSec>
            <BuildingPicContainer />
            <FlexContainerAboutSecText>
              <ContentText>
                By the end of 2022, I began my professional career as a ReactTS
                developer with DeltaDigit LLC, a company based in Novi Sad,
                Serbia, where I currently work remotely on a part-time basis.
              </ContentText>
              <ContentText>
                On this page, you can also find a section dedicated to my
                projects, where you can view a demo application built with
                React. The project includes a detailed description of all the
                technologies and tools used in its development. This section
                aims to provide a comprehensive understanding of my capabilities
                and the extent of my expertise in creating modern, responsive
                web applications.
              </ContentText>
            </FlexContainerAboutSecText>
            <GrayContainer2 />
          </FlexContainerAboutSec>
          <GrayContainer3 />
        </FlexContainerRow>
      </PageContainer>
    </>
  );
};

export default AboutSec;
