import { AboutFirstBox, AboutPhoto, AboutText, AboutTextBox } from "./styled";

const AboutFirst = () => {
  return (
    <AboutFirstBox>
      <AboutPhoto />
      <AboutTextBox>
        <AboutText>
          My name is Aleksandar Vuckovic, and I have been living in Munich since
          2016. I embarked on my journey into frontend development in 2019,
          starting with learning HTML and CSS. With the help of Bootstrap, I
          began creating web pages and then proceeded to learn JavaScript.
        </AboutText>
        <AboutText>
          I attended IT Academy, where I revisited the fundamentals of HTML,
          CSS, and JavaScript, and learned how to create databases using Wamp
          server, as well as performing queries on those databases. After
          completing the course, I continued to advance my skills independently,
          learning TypeScript, and soon after, I started working with ReactTS.
        </AboutText>
      </AboutTextBox>
    </AboutFirstBox>
  );
};

export default AboutFirst;
