const express = require("express");
const router = express.Router();

const { Videogame } = require("../../db");
const postVG = require("../../controllers/postvideogame");
const deleteVg = require("../../controllers/deleteVg");
const putvg = require("../../controllers/putVg");

router.get("/", async (req, res) => {
  try {
   const cantidad=await Videogame.findAll()// traigo de la DB un array de todos los posteos
   if (cantidad.length===0) return res.status(200).send('no se encuentra ningun videogame subido');
//    
   const allPostDB= cantidad.map((el) => {// mapeo y  mando solo lo que quiero mostrar en la web de posteos
    return {
      name: el.name,
      id: el.id,
      description: el.description,
      genres: el.genres,
      plataformas: el.plataformas,
      fecha: el.released,
      rating: el.rating,
      image: el.background_image,
    };})
    return res.status(200).json(allPostDB);
  } catch (error) {
    res.status(404).send("not found");
  }
});
router.post("/", async (req, res) => {
  postVG(req, res);
});

router.delete("/:id", async (req, res) => {
  deleteVg(req, res);
});
router.put("/", async (req, res) => {
  const modifc =req.body;
try {

  if(!modifc.id) throw Error(" se requiere el id para modificar el Video Game");

  const modificador= await putvg(modifc)
  if(modificador.error) throw Error("error en modificador");
  return res.status(200).send(modificador);
} catch (error) {
    return res.status(404).send(error.message);
}
})

module.exports = router;
