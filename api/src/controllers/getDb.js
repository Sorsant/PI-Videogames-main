require("dotenv").config();
const { Videogame, Genres } = require("../db");

const getDb = async () => {
  return await Videogame.findAll({
    // include: {
    //   model: Genres,
    //   attributes: ["name"],
    //   through: {
    //     attributes: [],
    //   },
    // },
  });
};
module.exports = getDb;
