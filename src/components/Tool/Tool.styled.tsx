import styled from 'styled-components';

import { darkToLight } from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

export const Container = styled.div<Props>`
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

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .img-container {
    padding: 20px;
    border-radius: 50%;
    box-shadow: 0 25px 74px -30px #00000088;
    ${(props) =>
      props.myTheme === 'light'
        ? `box-shadow: 0 25px 74px -30px #000000b2;`
        : `box-shadow: 0 25px 74px -30px #ffffff42;`}
    background: #5a5959;
    background: -webkit-linear-gradient(
      50deg,
      #7271712b 50%,
      rgb(77 157 197 / 5%) 80%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      padding: 20px;
    }

    @media (min-width: 1280px) {
      padding: 25px;
    }
  }

  p {
    margin-top: 10px;
    font-weight: 600;
    letter-spacing: -0.04em;
    font-size: 1.3em;
    color: ${(props) => darkToLight(props.myTheme)};

    @media (min-width: 1280px) {
      font-size: 2em;
    }
  }

  img {
    width: 40px;

    /* @media (min-width: 768px) {
      width: 85px;
    } */

    @media (min-width: 1280px) {
      width: 90px;
    }
  }
`;
