import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ dataLyrics }) => {
	let lyricsFound = dataLyrics.hasOwnProperty('lyrics') ? true : false;
	let message = '';

	if (dataLyrics.error === 'No lyrics found') message = 'Letras no encontradas';

	return (
		<div>
			{lyricsFound ? (
				<>
					<h2 className="text-center">Letras</h2>
					<p className="lyrics-parr">{dataLyrics.lyrics}</p>
				</>
			) : (
				<h2 className="text-center">{message}</h2>
			)}
		</div>
	);
};

export default Lyrics;

Lyrics.propTypes = {
	dataLyrics: PropTypes.object.isRequired,
};
