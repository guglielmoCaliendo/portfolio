import styled from 'styled-components';
import {
  darkToLight,
  lightToDark,
  invert,
} from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px;
  position: fixed;
  z-index: 50;
  width: 100%;
  background-color: ${(props) => lightToDark(props.myTheme)};
  transition: all 0.6s ease;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    height: 100vh;
    width: initial;
    background-color: none;
  }

  @media (min-width: 912px) {
    padding: 0 25px;
  }

  @media (min-width: 1280px) {
    padding: 0 50px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
      width: 50px;
      border-radius: 50%;
    }
    h1 {
      font-size: 1.2em;
      color: ${(props) => darkToLight(props.myTheme)};
      font-weight: 400;
      span {
        font-weight: 300;
      }
    }

    @media (min-width: 768px) {
      flex-direction: column;
      margin-top: 50px;

      h1 {
        font-size: 1.6em;
      }
      img {
        width: 80px;
        transition: all 0.6s ease;
      }
    }

    @media (min-width: 1280px) {
      h1 {
        font-size: 2em;
      }
      img {
        width: 120px;
        transition: all 0.6s ease;
      }
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => darkToLight(props.myTheme)};
    font-size: 1.2em;
    font-weight: 600;
    padding: 15px;
    cursor: pointer;

    width: 100%;
    /* &:hover {
      background-color: ${(props) => darkToLight(props.myTheme)};
      color: ${(props) => lightToDark(props.myTheme)};
    } */

    @media (min-width: 1280px) {
      font-size: 1.5em;
    }
  }

  .active {
    @media (min-width: 768px) {
      background-color: ${(props) => darkToLight(props.myTheme)};
      color: ${(props) => lightToDark(props.myTheme)};
      transition: all 0.6 ease;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    top: 80px;
    left: -5000px;
    right: 0;
    text-align: center;
    transition: all 0.6s ease;
    background-color: ${(props) => lightToDark(props.myTheme)};
    z-index: 100;
    @media (min-width: 768px) {
      transition: none 0 ease;
      top: 35%;
      left: 0;
    }
  }

  .links.active {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    top: 80px;
    left: 0;
    right: 0;
    text-align: center;
    height: 100%;
    @media (min-width: 768px) {
      transition: none 0 ease;
      top: 35%;
      left: 0;
      position: absolute;
    }
  }

  .burger-button {
    filter: ${(props) => invert(props.myTheme)};
    padding-right: 20px;
    z-index: 100;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .theme {
    width: 30px;
    cursor: pointer;
    filter: ${(props) => invert(props.myTheme)};
  }

  .language {
    cursor: pointer;
    color: ${(props) => darkToLight(props.myTheme)};
    font-size: 25px;
    margin: 0;
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin-top: 40px;
  }
`;
