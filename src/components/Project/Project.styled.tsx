import styled from 'styled-components';

import { invert } from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px 0 0 0;
  position: relative;
  width: 80vw;
  cursor: pointer;
  gap: 20px;
  margin-bottom: 5%;

  @media (min-width: 768px) {
    width: 50vw;
  }

  .hidden {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(10%);
    z-index: 100;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
    transition: all 1.5s;
  }

  .img-gradient {
    max-width: 90vw;
    border-radius: 10px;
    min-height: 250px;
    object-fit: cover;
    ${(props) =>
      props.myTheme === 'light'
        ? `box-shadow: 0 80px 120px -120px #000;`
        : `box-shadow: 0 80px 120px -120px #ffffff6e;`}

    &:after {
      content: '';
      border-radius: 10px;
      display: block;
      position: relative;
      ${(props) =>
        props.myTheme === 'light'
          ? `background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0,
        #ffffff 200%
      );`
          : `background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0,
        #7c7c7c9e 200%
      );`}
      margin-top: -150px;
      height: 410px;
      width: 100%;
    }

    @media (min-width: 1280px) {
      &:after {
        display: none;
        margin-top: -352px;
        height: 350px;
        background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0,
          #c0bbbbd6 50%
        );
      }
    }
  }

  img {
    max-width: 90vw;
    border-radius: 10px 10px 0 0;
    object-fit: cover;

    @media (min-width: 768px) {
      max-width: 40vw;
    }

    @media (min-width: 1280px) {
      border-radius: 10px;
      max-width: 50vw;
    }

    @media (min-width: 1600px) {
      max-width: 60vw;
    }
  }

  .project-info {
    max-width: 80vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    bottom: 20px;
    padding: 20px;

    @media (min-width: 768px) {
      padding: 20px;
    }

    @media (min-width: 1280px) {
      padding: 40px;
    }

    @media (min-width: 1280px) {
      opacity: 0;
      transform: translateY(10%);
      transition: opacity 0.3s ease-in-out 0s, transform 300ms ease-in-out 0s;
      h3,
      p {
        display: none;
      }
    }

    h3 {
      letter-spacing: -0.025em;
      font-weight: 700;
      font-size: 1.3em;
      color: #272727;
      align-self: flex-start;
      filter: ${(props) => invert(props.myTheme)};

      @media (min-width: 1280px) {
        font-size: 2em;
        filter: none;
      }
    }

    p {
      margin: 0;
      color: #202020;
      font-weight: 200;
      font-size: 0.9em;
      filter: ${(props) => invert(props.myTheme)};

      @media (min-width: 1280px) {
        font-size: 1em;
        filter: none;
      }

      @media (min-width: 1600px) {
        font-size: 1.6em;
        filter: none;
      }
    }
  }

  &:hover {
    .img-gradient::after {
      display: block;
      transition: all 1s ease;
    }

    .project-info {
      opacity: 1;
      h3,
      p {
        display: block;
      }
    }
  }

  .techs {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    p {
      font-size: 0.6em;
      background-color: black;
      color: white;
      font-weight: 500;
      border-radius: 5px;
      padding: 2px 8px;
      @media (min-width: 1280px) {
        font-size: 0.8em;
      }
    }
  }
`;
