import { AboutFirstBox, AboutPhoto, AboutText, AboutTextBox } from "./styled";

const AboutFirst = () => {
  return (
    <AboutFirstBox>
      <AboutPhoto />
      <AboutTextBox>
        <AboutText>
          My name is Aleksandar Vuckovic, and I live in Munich, Germany. I
          embarked on my professional journey into frontend development in 2019,
          when I began creating web and mobile user interfaces around the React
          ecosystem.. Since childhood I've been in love with technology, but it
          took me a while until I decided to shape up my career in that
          direction. I attended IT Academy, where I learned the fundamentals of
          CSS and JavaScript, but also got familiar with relational databases
          and back-end development. After completing the course, I decided to
          lean towards the front-end development and continued to advance my
          skills independently. I hold a Bachelor Degree in business
          administration.
        </AboutText>
      </AboutTextBox>
    </AboutFirstBox>
  );
};

export default AboutFirst;
