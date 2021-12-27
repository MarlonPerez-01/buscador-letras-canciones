import React, { useState } from 'react';

import Header from './components/Header';
import Artist from './components/Artist';
import Lyrics from './components/Lyrics';
import Form from './components/Form';
import Container from './components/Container';

function App() {
	//State con toda la informacion proveida por las APIs
	const [allData, setAllData] = useState({
		dataLyrics: {},
		dataArtist: {},
	});
	const { dataLyrics, dataArtist } = allData;

	return (
		<Container>
			<div className="header-container">
				<Header />
			</div>
			<div className="form-container">
				<Form setAllData={setAllData} />
			</div>
			<div className="lyrics-container">
				<Lyrics dataLyrics={dataLyrics} />
			</div>
			<div className="artist-container">
				<Artist dataArtist={dataArtist} />
			</div>
		</Container>
	);
}

export default App;
