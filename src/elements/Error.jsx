import React from 'react';
import styled from 'styled-components';
import { Colors } from '../shared/Colors';

const Error = () => {
	const Contenedor = styled.div`
		border-radius: 0.5em;
		border: 0.05em solid ${Colors.color_border};
		box-shadow: 6px 6px 12px ${Colors.color_shadow}, -6px -6px 12px ${Colors.color_white};
		margin-top: 2em;
		padding: 1em;

		p {
			color: ${Colors.color_error};
			margin: 0;
			padding: 0;
			text-align: center;
		}
	`;

	return (
		<Contenedor>
			<p>Ambos campos son requeridos</p>
		</Contenedor>
	);
};

export default Error;
