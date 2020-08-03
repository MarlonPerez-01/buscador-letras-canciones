import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from './styledComponents/Input';
import { Button } from './styledComponents/Button';
import { getAllData } from '../Helpers';

const Header = ({ setAllData }) => {
  const [terms, setTerms] = useState({ artist: '', song: '' });
  const { artist, song } = terms;

  const handleChange = (e) => {
    setTerms({ ...terms, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (artist.trim() === '' || song.trim() === '') {
      return;
    }

    try {
      getAllData(artist, song).then(setAllData);
    } catch (e) {
      console.log('El error es: ', e);
    }
  };

  return (
    <>
      <h1 className="text-center">Buscador de letras</h1>
      <form className="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Canción..."
          className="mr-3"
          name="song"
          onChange={handleChange}
          autoComplete="off"
        />
        <Input
          type="text"
          placeholder="Artista..."
          className="mr-3"
          name="artist"
          onChange={handleChange}
          autoComplete="off"
        />
        <Button className="btn-search">
          Buscar <i className="icon-search" />
        </Button>
      </form>
    </>
  );
};

export default Header;

Header.propTypes = {
  setAllData: PropTypes.func.isRequired
};
