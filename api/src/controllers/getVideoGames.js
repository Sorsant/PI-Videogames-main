const axios = require("axios");
require("dotenv").config();
const KEY = process.env.API_KEY;

const getVideoGames = async () => {
  const promises = [];
  for (let i = 1; i < 10; i++) {
    const promise = axios.get(
      `https://api.rawg.io/api/games?key=${KEY}&page=${i}`
    );
    promises.push(promise); //en este ciclo for itero 10 paginas trayendome un gran objeto
  }

  const responses = await Promise.all(promises); // en una variable cargo esperando todas las promesas

  const apiInfo = responses
    .map((response) => response.data.results)
    .flat()
    .map((el) => {
      return {
        name: el.name,
        id: el.id,
        description: el.description,
        genres: el.genres.map((genre) => genre.name),
        platforms: el.platforms.map((platform) => platform.platform.name),
        fecha: el.released,
        rating: el.rating,
        image: el.background_image,
        createInDb:"Api"
      };
    });
    
  return apiInfo;
};

module.exports = getVideoGames;
