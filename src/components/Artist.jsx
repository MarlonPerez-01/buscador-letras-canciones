import React from 'react';
import { A } from '../elements/A';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArtistContainer = styled.div`
	.container-icons {
		display: flex;
		justify-content: space-between;
		margin-top: 2em;
		margin-bottom: 2em;

		a {
			flex-grow: 0;
		}
	}

	img {
		max-width: 100%;
		border-radius: 0.5rem;
		box-shadow: -5px -5px 20px white, 5px 5px 20px #babecc;
		filter: grayscale(25%);
	}
`;

const Artist = ({ dataArtist }) => {
	let artistFound = dataArtist.artists ? true : false;
	let message = '';

	if (dataArtist.artists === null) message = 'Artista no encontrado';

	return (
		<ArtistContainer>
			{artistFound ? (
				<>
					<h2 className="text-center">Artista</h2>
					<img src={dataArtist.artists[0].strArtistThumb} alt="artist-thumb" />
					<p>{dataArtist.artists[0].strBiographyES}</p>
					<div className="container-icons">
						<A href={dataArtist.artists[0].strLastFMChart} target="_blank">
							<i className="icon-lastfm" />
						</A>
						<A href={'https://' + dataArtist.artists[0].strFacebook} target="_blank">
							<i className="icon-facebook" />
						</A>
						<A href={'https://' + dataArtist.artists[0].strTwitter} target="_blank">
							<i className="icon-twitter" />
						</A>
					</div>
				</>
			) : (
				<h2 className="text-center">{message}</h2>
			)}
		</ArtistContainer>
	);
};

export default Artist;

Artist.propTypes = {
	dataArtist: PropTypes.object.isRequired,
};
