import styled from 'styled-components';

import { Colors } from '../shared/Colors.js';
const { color_shadow, color_white } = Colors;

export const A = styled.a`
	border-radius: 0.5rem;
	border: 0;
	box-shadow: -5px -5px 20px ${color_white}, 5px 5px 20px ${color_shadow};
	color: ${Colors.color_shadow};
	cursor: pointer;
	font-weight: 600;
	outline: 0;
	padding: 1rem;
	transition: all 0.2s ease-in-out;

	&:hover {
		box-shadow: -2px -2px 5px ${color_white}, 2px 2px 5px ${color_shadow};
	}

	&:active {
		box-shadow: inset 1px 1px 2px ${color_shadow}, inset -1px -1px 2px ${color_white};
	}
`;
