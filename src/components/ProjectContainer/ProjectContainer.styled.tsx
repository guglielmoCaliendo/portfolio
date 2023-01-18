import styled from 'styled-components';
import { darkToLight } from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

export const Container = styled.div<Props>`
  padding: 75px 0;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(20%);
    z-index: 100;
    transition: all 0.6 ease;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transition: all 1.5s;
  }
  .title {
    align-self: flex-start;
    margin-left: 40px;
    margin-top: 20px;
    font-weight: 300;
    letter-spacing: 0.2em;
    font-size: 1.4em;
    color: ${(props) => darkToLight(props.myTheme)};

    @media (min-width: 768px) {
      display: none;
    }
  }
  .projects-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 100px;
    margin: 50px 0 100px 0;
  }
`;
