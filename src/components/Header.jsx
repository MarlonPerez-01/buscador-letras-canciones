import React from 'react';
import styled from 'styled-components';
import { Colors } from '../shared/Colors';

const H1 = styled.h1`
	text-align: center;
	font-size: 2em;
	color: ${Colors.color_title};
	font-weight: 600;
	letter-spacing: -0.5px;
	margin: 1em;
`;

const Header = () => <H1>Buscador de letras</H1>;

export default Header;
