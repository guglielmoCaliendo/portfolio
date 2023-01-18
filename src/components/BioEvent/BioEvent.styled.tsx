import styled from 'styled-components';

import { invert } from '../../Helper/changeTheme.helper';

interface Props {
  myTheme: string;
}

export const Container = styled.div<Props>`
  filter: ${(props) => invert(props.myTheme)};
  padding: 50px 0;
  border-bottom: 1px solid #00000047;
  &:last-child {
    border-bottom: none;
  }
  h4 {
    font-size: 1.6em;
    line-height: 1;
    font-weight: 500;
    letter-spacing: -0.015em;
    align-self: flex-start;
    margin-bottom: 20px;
    @media (min-width: 1280px) {
      font-size: 3em;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: #222222c0;
    @media (min-width: 1280px) {
      font-size: 2em;
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
`;
