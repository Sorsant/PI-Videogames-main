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
  const existeVg = (await Videogame.findAll()).filter(existe => existe.name === name);
  if(existeVg.length === 1){ return  res.status(201).json({ message: `Videogame Existente`}); }
  
  try {
    const newVG = await Videogame.create({
      name,
      id: nextId,
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

    return res.status(201).json({ message: `Video game created successfully and the Id to edit or delete is ${nextId}`});
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

module.exports = postVG;
