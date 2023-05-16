const { Videogame, Genres } = require("../db");

const postVG = async (req, res) => {

  const {
    name,
    description,
    plataformas,
    fecha,
    rating,
    image,
    genres,
    createInDb,
  } = req.body;
  if (!name ||!description ||!plataformas ||!fecha ||!rating ||!image ||!genres) {
      res.status(400).send({ error: "Datos insuficientes" });
    }
  const count = await Videogame.count();
const nextId = count + 960529;
  try {
    const newVG = await Videogame.create({
      id: nextId,
      name,
      description,
      plataformas,
      fecha,
      
      rating,
      image,
      createInDb,
    });
    const genrNam = await Genres.create({
    
        name: genres,
      
    });

    await newVG.addGenres(genrNam);
    res.status(201).json({ message: `Video game created successfully and the Id to edit or delete is ${nextId}`});
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = postVG;
