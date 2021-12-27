import styled from 'styled-components';

import { Colors } from '../shared/Colors.js';

const { color_bg, color_shadow, color_white, color_font } = Colors;

export const Button = styled.button`
	background-color: ${color_bg};
	border-radius: 0.5em;
	border: 0;
	box-shadow: -5px -5px 20px ${color_white}, 5px 5px 20px ${color_shadow};
	color: ${color_font};
	cursor: pointer;
	font-weight: 600;
	letter-spacing: -0.3px;
	outline: 0;
	padding: 1em;
	text-shadow: 1px 1px 0 ${color_white};
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: -2px -2px 5px ${color_white}, 2px 2px 5px ${color_shadow};
	}

	&:active {
		box-shadow: inset 1px 1px 2px ${color_shadow}, inset -1px -1px 2px ${color_white};
	}
`;
