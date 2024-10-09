import { AboutText } from "../About1/styled";
import {
    AboutSecLayout,
    AboutSecTextBox,
    BuildingPhoto,
    FlexRowBox100,
    GrayBox3
} from "./styled";

const AboutSecond = () => {
  return (
    <AboutSecLayout>
      <FlexRowBox100>
        <AboutSecTextBox>
          <AboutText>
            By the end of 2022, I began my professional career as a ReactTS
            developer with DeltaDigit LLC, a company based in Novi Sad, Serbia,
            where I currently work remotely on a part-time basis.
          </AboutText>
          <AboutText>
            On this page, you can also find a section dedicated to my projects,
            where you can view a demo application built with React. The project
            includes a detailed description of all the technologies and tools
            used in its development. This section aims to provide a
            comprehensive understanding of my capabilities and the extent of my
            expertise in creating modern, responsive web applications.
          </AboutText>
        </AboutSecTextBox>
      </FlexRowBox100>
      <GrayBox3 />
      <BuildingPhoto />
    </AboutSecLayout>
  );
};

export default AboutSecond;
