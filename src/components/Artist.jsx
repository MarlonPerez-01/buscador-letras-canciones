import React from 'react';
import { A } from './styledComponents/A';
import PropTypes from 'prop-types';

const Artist = ({ dataArtist }) => {
  let artistFound = dataArtist.artists ? true : false;
  let message = '';

  if (dataArtist.artists === null) {
    message = 'Artista no encontrado';
  }

  return (
    <div>
      {artistFound ? (
        <>
          <h2 className="text-center">Información Artista</h2>
          <img src={dataArtist.artists[0].strArtistThumb} alt="artist-thumb" />
          <p>{dataArtist.artists[0].strBiographyES}</p>
          <div className="container-icons">
            <A href={dataArtist.artists[0].strLastFMChart} target="_blank">
              <i className="icon-lastfm" />
            </A>
            <A
              href={'https://' + dataArtist.artists[0].strFacebook}
              target="_blank"
            >
              <i className="icon-facebook" />
            </A>
            <A
              href={'https://' + dataArtist.artists[0].strTwitter}
              target="_blank"
            >
              <i className="icon-twitter" />
            </A>
          </div>
        </>
      ) : (
        <h2 className="text-center">{message}</h2>
      )}
    </div>
  );
};

export default Artist;

Artist.propTypes = {
  dataArtist: PropTypes.object.isRequired
};
