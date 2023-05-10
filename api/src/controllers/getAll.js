const getDb = require("./getDb");
const getVideogame = require("./getVideoGames");

const getAllGames = async () => {
  const infoApi = await getVideogame();
  const infoDb = await getDb();
  const infoAll = infoApi.concat(infoDb);
  return infoAll;
};
module.exports = getAllGames;
