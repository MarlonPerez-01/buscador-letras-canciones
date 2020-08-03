import styled from 'styled-components';

import { Variables } from './Variables.js';
const { color_bg, color_shadow, color_white } = Variables;

export const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: -0.2px;
  border: 0;
  outline: 0;
  border-radius: 0.5rem;
  background-color: ${color_bg};
  text-shadow: 1px 1px 0 ${color_white};
  box-shadow: inset 2px 2px 5px ${color_shadow},
    inset -5px -5px 10px ${color_white};
  padding: 1rem;
  appearance: none;
  -webkit-appearance: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: inset 1px 1px 2px ${color_shadow},
      inset -1px -1px 2px ${color_white};
  }
`;
