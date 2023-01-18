import styled from 'styled-components';
import { darkToLight } from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

export const Container = styled.div<Props>`
  padding: 75px 0;
  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(10%);
    z-index: 100;
  }

  @media (min-width: 768px) {
    padding: 100px 0;
    width: 80%;
    margin: 0 auto;
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

  .tools-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin: 50px 12% 100px 12%;

    @media (min-width: 768px) {
      gap: 50px;
      margin: 0 12%;
    }
  }
`;
