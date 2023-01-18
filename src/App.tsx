import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import Projects from './components/ProjectContainer/ProjectContainer';
import ToolContainer from './components/ToolContainer/ToolContainer';
import Biography from './components/Biography/Biography';
import Contact from './components/Contact/Contact';
import styled from 'styled-components';
import { lightToDark } from './Helper/changeTheme.helper';
import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <GlobalStyle myTheme={theme} />
      <NavBar />
      <Container>
        <HeroSection />
        <Projects />
        <ToolContainer />
        <Biography />
        <Contact />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100vw;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1280px) {
    width: 75%;
  }
`;

interface Props {
  myTheme: string;
}

const GlobalStyle = createGlobalStyle<Props>`
  body {
    background-color: ${(props) => lightToDark(props.myTheme)};
    transition: all 0.6s ease;
  }
`;
