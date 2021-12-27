export const getAllData = async (artist = '', song = '') => {
	const urlLyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`;
	const urlArtist = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;

	try {
		const [dataLyrics, dataArtist] = await Promise.allSettled([
			fetch(urlLyrics).then((resLyrics) => resLyrics.json()),
			fetch(urlArtist).then((resArtist) => resArtist.json()),
		]);

		console.log(dataArtist);

		return { dataLyrics: dataLyrics.value, dataArtist: dataArtist.value };
	} catch (e) {
		console.log(e);
	}
};
