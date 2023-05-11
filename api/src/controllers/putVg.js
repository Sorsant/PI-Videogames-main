require("dotenv").config();
const { Videogame } = require("../db");

const updateVg = async (modifc) => {
  try {
    const vgUpdate = await Videogame.update(
      {
        name: modifc.name || Videogame.name,
        description: modifc.description || Videogame.description,
        plataformas: modifc.plataformas || Videogame.plataformas,
        fecha: modifc.fecha || Videogame.fecha,
        rating: modifc.rating || Videogame.rating,
        image: modifc.image || Videogame.image,
      },
      {
        where: {
          id: modifc.id,
        },
      }
    );

    if (!vgUpdate) {
      return { message: "No se encontró el videojuego" };
    }

    return { message: "Videojuego actualizado correctamente" };
  } catch (error) {
    return { message: "Error al actualizar el videojuego" };
  }
};

module.exports = updateVg;