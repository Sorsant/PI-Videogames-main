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
  try {
    const newVG = await Videogame.create({
      name,
      description,
      plataformas,
      fecha,
      rating,
      image,
      createInDb,
    });
    const genrNam = await Genres.findAll({
      where: {
        name: genres,
      },
    });

    await newVG.addGenres(genrNam);
    res.status(201).json({ message: "Videogame created successfully" });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

module.exports = postVG;
