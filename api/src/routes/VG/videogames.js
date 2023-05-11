const express = require("express");
const getIdVideoGame = require("../../controllers/getIdVideoGame");
const getAllVG = require("../../controllers/getAll");
const postVG = require("../../controllers/postvideogame");
const deleteVg = require("../../controllers/deleteVg");
const putvg = require("../../controllers/putVg");


const router = express.Router();

router.get("/:id",async(req,res)=>{
  await getIdVideoGame(req,res)
} );

router.get("/", async (req, res) => {
  const name = req.query.name;
  const allVG = await getAllVG();

  if (name) {
    const filterNameVG = allVG.filter((elm) =>
      elm.name.toLowerCase().includes(name.toLowerCase())
    );
    filterNameVG.length
      ? res.status(200).send(filterNameVG)
      : res.status(404).send("No esta el videogame");
  } else {
    res.status(200).send(allVG);
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
