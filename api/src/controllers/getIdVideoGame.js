const axios = require("axios");
require("dotenv").config();
const KEY = process.env.API_KEY;
const { Videogame } = require("../db");

const getIdVideoGame = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error(`ID: ${id} Error not found`);

    const { data } = await axios(
      `https://api.rawg.io/api/games/${id}?key=${KEY}`
    ); // consulto a la api la data id

    if (!data.id) {
      // si no me da la data id recurro a buscar en la DB
      const videogame = await Videogame.findOne({
        where: {
          id,
        },
      });
      if (!videogame); // si no me la da en la db me tira error
      return res.status(200).json(videogame); // si me la da retorno el obj
    }

    const videogame = {
      id: data.id,
      name: data.name,
      description: data.description,
      genres: data.genres.map((genre) => genre.name),
      plataformas: data.platforms.map((plataform) => plataform.platform.name),
      fecha: data.released,
      rating: data.rating,
      image: data.background_image,
    };

    res.status(200).json(videogame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getIdVideoGame;
