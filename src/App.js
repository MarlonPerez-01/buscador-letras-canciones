import React, { useState } from 'react';

import Header from './components/Header';
import Artist from './components/Artist';
import Lyrics from './components/Lyrics';

function App() {
  //State con toda la informacion proveida por las APIs
  const [allData, setAllData] = useState({
    dataLyrics: {},
    dataArtist: {},
  });
  const { dataLyrics, dataArtist } = allData;

  return (
    <div className="container">
      <div className="header">
        <Header setAllData={setAllData} />
      </div>
      <div className="lyrics-container">
        <Lyrics dataLyrics={dataLyrics} />
      </div>
      <div className="artist-container">
        <Artist dataArtist={dataArtist} />
      </div>
    </div>
  );
}

export default App;
