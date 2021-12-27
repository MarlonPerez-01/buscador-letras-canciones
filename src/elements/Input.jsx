import styled from 'styled-components';

import { Colors } from '../shared/Colors.js';
const { color_bg, color_shadow, color_white } = Colors;

export const Input = styled.input`
	-webkit-appearance: none;
	appearance: none;
	background-color: ${color_bg};
	border-radius: 0.5rem;
	border: 0;
	box-shadow: inset 2px 2px 5px ${color_shadow}, inset -5px -5px 10px ${color_white};
	letter-spacing: -0.2px;
	outline: 0;
	padding: 1rem;
	transition: all 0.2s ease-in-out;

	&:focus {
		box-shadow: inset 1px 1px 2px ${color_shadow}, inset -1px -1px 2px ${color_white};
	}
`;
