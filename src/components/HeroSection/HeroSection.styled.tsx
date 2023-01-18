import styled, { keyframes } from 'styled-components';
import {
  darkToLight,
  lightToDark,
  invert,
} from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

const lineUpAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
`;

const fadeAnimation = keyframes`
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
`;

export const HiWrapper = styled.div<Props>`
  overflow: hidden;
  border-bottom: 1px solid;
  border-color: ${(props) => darkToLight(props.myTheme)};
  opacity: 0.8;
  &:nth-child(1) h2 {
    animation: 1s ${lineUpAnimation} ease-in-out;
  }
  &:nth-child(2) h2 {
    animation: 1.2s ${lineUpAnimation} ease-in-out;
  }
  &:nth-child(3) h2 {
    animation: 1.4s ${lineUpAnimation} ease-in-out;
  }
  &:nth-child(4) h2 {
    animation: 1.8s ${lineUpAnimation} ease-in-out;
  }
`;

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transition: all 0.6s ease;

  @media (min-width: 768px) {
    height: 100vh;
  }

  h2 {
    line-height: 1.6;
    letter-spacing: -0.025em;
    font-weight: 500;
    font-size: 1.2em;
    color: ${(props) => darkToLight(props.myTheme)};

    @media (min-width: 768px) {
      font-size: 2em;
    }

    @media (min-width: 1280px) {
      font-size: 3.5em;
    }
  }

  .based {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 3.4s ${fadeAnimation} ease-in;

    p {
      color: #22222296;
      font-weight: 200;
      filter: ${(props) => invert(props.myTheme)};
    }
    .based-ubication {
      display: inline-block;
      margin-left: 0.6em;
      font-weight: 400;
      padding: 7px;
      border: 1px solid rgba(0, 0, 0, 0.18);
      border-radius: 0.5em;
      color: #222;
      letter-spacing: -0.02em;
    }
    @media (min-width: 768px) {
      font-size: 1.6em;
    }
  }
`;
