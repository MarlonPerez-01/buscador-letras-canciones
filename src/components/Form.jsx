import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../elements/Input';
import { Button } from '../elements/Button';
import { getAllData } from '../Helpers';
import Error from '../elements/Error';
import styled from 'styled-components';
import { Colors } from '../shared/Colors';

const FormStyled = styled.form`
	display: flex;
	flex-wrap: wrap;

	input {
		margin-bottom: 1.5rem;
		margin-right: 0;
		color: ${Colors.color_input};
	}

	input,
	button {
		flex-basis: 100%;
	}

	@media only screen and (min-width: 768px) {
		display: flex;
		flex-wrap: wrap;

		input {
			margin-right: 2em;
			margin-bottom: auto;
		}

		input,
		button {
			flex-basis: auto;
			flex-grow: 1;
		}
	}
`;

const Form = ({ setAllData }) => {
	const [error, setError] = useState(false);
	const [terms, setTerms] = useState({ artist: '', song: '' });
	const { artist, song } = terms;

	const handleChange = (e) => {
		setTerms({ ...terms, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (artist.trim() === '' || song.trim() === '') {
			setError(true);
			return;
		}

		setError(false);

		try {
			getAllData(artist, song).then(setAllData);
		} catch (e) {
			console.log('El error es: ', e);
		}
	};

	return (
		<>
			<FormStyled onSubmit={handleSubmit}>
				<Input
					type="text"
					placeholder="Canción"
					className="mr-3"
					name="song"
					onChange={handleChange}
					autoComplete="off"
				/>
				<Input
					type="text"
					placeholder="Artista"
					className="mr-3"
					name="artist"
					onChange={handleChange}
					autoComplete="off"
				/>
				<Button className="btn-search">
					Buscar <i className="icon-search" />
				</Button>
			</FormStyled>
			{error && <Error />}
		</>
	);
};

Form.propTypes = {
	setAllData: PropTypes.func.isRequired,
};

export default Form;
