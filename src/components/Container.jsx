import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	column-gap: 4rem;
	display: grid;
	margin: 0 auto;
	max-width: 90%;

	grid-template-areas:
		'header'
		'form'
		'artist'
		'lyrics';
	grid-template-columns: 1fr;

	.header-container {
		grid-area: header;
	}

	.artist-container {
		grid-area: lyrics;
	}

	.lyrics-container {
		grid-area: artist;
	}

	.form-container {
		grid-area: form;
	}

	// Media queries
	@media only screen and (min-width: 576px) {
		max-width: 540px;
	}

	@media only screen and (min-width: 768px) {
		max-width: 720px;
	}

	@media only screen and (min-width: 992px) {
		max-width: 960px;
	}

	@media only screen and (min-width: 1200px) {
		max-width: 1140px;

		grid-template-areas:
			'header header'
			'form form'
			'lyrics artist';
		grid-template-columns: repeat(2, 1fr);
		max-width: 80vw;
	}

	@media only screen and (min-width: 1400px) {
		max-width: 1320px;
	}
`;

const Container = ({ children }) => <Div>{children}</Div>;

export default Container;
