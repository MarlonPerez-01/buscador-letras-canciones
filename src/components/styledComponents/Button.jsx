import styled from 'styled-components';

import { Variables } from './Variables.js';

const { color_bg, color_shadow, color_white, color_font } = Variables;

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  border: 0;
  outline: 0;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${color_bg};
  text-shadow: 1px 1px 0 ${color_white};
  color: ${color_font};
  box-shadow: -5px -5px 20px ${color_white}, 5px 5px 20px ${color_shadow};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px ${color_white}, 2px 2px 5px ${color_shadow};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${color_shadow},
      inset -1px -1px 2px ${color_white};
  }
`;
