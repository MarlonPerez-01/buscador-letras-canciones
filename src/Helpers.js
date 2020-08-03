export const getAllData = async (artist = '', song = '') => {
  const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
  const urlArtist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
  try {
    const [dataLyrics, dataArtist] = await Promise.all([
      fetch(urlLyrics).then((resLyrics) => resLyrics.json()),
      fetch(urlArtist).then((resArtist) => resArtist.json()),
    ]);
    return { dataLyrics, dataArtist };
  } catch (e) {
    console.log(e);
  }
};
