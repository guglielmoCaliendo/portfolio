import styled from 'styled-components';

import { darkToLight, invert } from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0px auto;
  padding: 40% 0;

  @media (min-height: 590px) {
    padding: 20% 0;
  }

  @media (min-height: 610px) {
    padding: 40% 0;
  }

  @media (min-height: 800px) {
    padding: 60% 0;
  }

  @media (min-width: 768px) {
    width: 70%;
    padding: 80% 0;
  }

  @media (min-width: 912px) {
    padding: 90% 0;
  }

  @media screen {
  }

  @media (min-width: 1280px) {
    width: 50%;
    padding: 20%;
  }
  .title {
    align-self: flex-start;
    h2 {
      font-weight: 700;
      letter-spacing: -0.025em;
      font-size: 2.5em;
      color: ${(props) => darkToLight(props.myTheme)};
      padding-bottom: 20px;
      @media (min-width: 1280px) {
        font-size: 4em;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 0.5em;
    background-color: #fff;
    box-shadow: 0 20px 60px -40px rgb(0 0 0 / 40%);

    ${(props) =>
      props.myTheme === 'light'
        ? `box-shadow: 0 20px 60px -40px #000;`
        : `box-shadow: 0 20px 60px -40px #ffffff6e;`}

    @media (min-width: 1280px) {
      padding: 40px;
    }

    label {
      font-weight: 400;
      font-size: 1.61em;
    }

    input {
      padding-left: 1em;
      border: 1px solid #acadad;
      border-radius: 0.3em;
      height: 1.5em;
      margin: 0.3em 0 0.5em 0;
      font-size: 1.4rem;
      color: #222;
      @media (min-width: 1280px) {
        height: 2em;
      }
    }

    textarea {
      padding: 0.3em 1em;
      border: 1px solid #acadad;
      border-radius: 0.3em;
      height: 2.5em;
      max-width: 97%;
      margin: 0.5em 0 0.5em 0;
      font-size: 1.4rem;
      color: #222;
      @media (min-width: 1280px) {
        height: 3em;
      }
    }

    .button {
      height: 2em;
      padding: 0px 1.2em;
      border-radius: 0.2em;
      margin-top: 1em;
      background-color: #222;
      color: #fff;
      font-weight: 500;
      font-size: 1.5em;

      &:hover {
        cursor: pointer;
        background-color: #0a0a0a;
      }

      &:active {
        background-color: #222;
      }

      @media (min-width: 1280px) {
        align-self: flex-end;
        width: 30%;
      }
    }
  }

  .logos-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;

    img {
      width: 40px;
      cursor: pointer;
      filter: ${(props) => invert(props.myTheme)};
    }
  }

  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(10%);
    z-index: 100;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
    transition: all 1.5s;
  }

  .message {
    margin-top: 2px;
    color: #ff0000ab;
    display: none;
  }

  .grateful-message {
    font-size: 1em;
    font-weight: 600;
    text-align: center;
    display: none;
  }

  .show-message {
    display: block;
  }
`;
