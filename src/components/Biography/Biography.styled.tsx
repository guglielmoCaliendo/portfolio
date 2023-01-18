import styled from 'styled-components';

import { invert } from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

export const Container = styled.div<Props>`
  margin: 0 auto;
  padding: 75px 0 0 0;
  width: 80%;
  @media (min-width: 1024px) {
    width: 70%;
    display: flex;
    flex-direction: row-reverse;
  }

  .hidden {
    opacity: 0;
    filter: blur(5px);
    /* transform: translateY(5%); */
    z-index: 100;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    /* transform: translateY(0); */
    transition: all 1.5s;
  }

  .portrait {
    width: 70vw;
    height: 60vh;
    object-fit: cover;
    object-position: top;
    border-radius: 0.1em;
    ${(props) =>
      props.myTheme === 'light'
        ? `box-shadow: 0 50px 90px -80px #000000b2;`
        : `box-shadow: 0 50px 90px -80px #ffffff42;`}

    @media (min-width: 768px) {
      width: 30vw;
      height: 40vh;
    }

    @media (min-width: 1024px) {
      margin-left: 60px;
      margin-bottom: 60px;
      position: sticky;
      top: 100px;
      width: 15vw;
      height: fit-content;
    }

    @media (min-width: 1280px) {
      margin-left: 60px;
      margin-bottom: 60px;
      position: sticky;
      top: 100px;
      width: 20vw;
      height: fit-content;
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;

    filter: ${(props) => invert(props.myTheme)};

    .title {
      align-self: flex-start;
      margin-top: 20px;
      font-weight: 300;
      letter-spacing: 0.2em;
      font-size: 1.4em;
      @media (min-width: 768px) {
        display: none;
      }
    }

    .sun {
      width: 40px;
      margin-top: 20px;
      align-self: flex-end;
      opacity: 0.5;
      @media (min-width: 1280px) {
        width: 100px;
      }
    }

    .birth {
      @media (min-width: 1280px) {
        margin: 100px 0;
      }
      h3:nth-child(1) {
        margin-left: 40px;
        align-self: flex-start;
        border-bottom: 1.5px solid #00000037;
        margin-top: 40px;
        font-weight: 300;
        letter-spacing: 0.2em;
        font-size: 1.6em;
        span {
          font-weight: 500;
        }
        @media (min-width: 768px) {
          font-size: 4em;
        }
        @media (min-width: 1280px) {
          font-size: 6em;
        }
      }

      h3:nth-child(2) {
        margin-left: 40px;
        margin-top: 10px;
        align-self: flex-start;
        font-weight: 300;
        letter-spacing: 0.2em;
        font-size: 1.4em;
        @media (min-width: 768px) {
          font-size: 2em;
        }
        @media (min-width: 1280px) {
          font-size: 3em;
        }
      }
    }
  }

  .bio-events-container {
    padding: 50px auto;
  }
`;
