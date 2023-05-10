const axios = require("axios");
const KEY = process.env.API_KEY;

const getGenres = async (req, res) => {
  try {
    const allGenres = await axios.get(
      `https://api.rawg.io/api/genres?key=${KEY}`
    );

    const genresMap = allGenres.data.results.map((elem) => elem.name);

    return genresMap;
  } catch (error) {
    return { error: "error no funciona" };
  }
};
module.exports = getGenres;
