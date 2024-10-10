import { AboutText } from "../About1/styled";
import {
  AboutSecLayout,
  AboutSecTextBox,
  BuildingPhoto,
  FlexRowBox100,
  GrayBox3,
} from "./styled";

const AboutSecond = () => {
  return (
    <AboutSecLayout>
      <FlexRowBox100>
        <AboutSecTextBox>
          <AboutText>
            Since 2020 , I've been working as a front-end developer with
            DeltaDigit LLC, a company based in Novi Sad, Serbia, currently on a
            part-time basis. <br /> Technologies included but not limited to:
            React, TypeScript, NextJS, Bootstrap, Tailwind, Chakra UI. <br />
            <br /> On this page, you can also find a section dedicated to my
            projects, where you can view a demo application built with React.
            The project includes a detailed description of all the technologies
            and tools used in its development. This section aims to provide a
            comprehensive understanding of my skills and the extent of my
            expertise in creating modern, responsive user interfaces. <br />
            <br /> If you’re looking for help on a project or eventually hiring
            on a full-time basis in the Munich area, feel free to reach out.
          </AboutText>
        </AboutSecTextBox>
      </FlexRowBox100>
      <GrayBox3 />
      <BuildingPhoto />
    </AboutSecLayout>
  );
};

export default AboutSecond;
