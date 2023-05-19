require("dotenv").config();
const { Videogame, Genres } = require("../db");

const getDb = async () => {
  const cantidad = await Videogame.findAll({
    include: [{ model: Genres, through: "videogame_genres" }],
  });
//    
 const allPostDB= cantidad.map((el) => {// mapeo y  mando solo lo que quiero mostrar en la web de posteos
  return {
    name: el.name,
    id: el.id,
    description: el.description,
    genres: el.Genres.map((genre) => genre.name),
    plataformas: el.plataformas, 
    fecha: el.fecha,
    rating: el.rating,
    image: el.image,
  };})
  return allPostDB;
};
module.exports = getDb;
