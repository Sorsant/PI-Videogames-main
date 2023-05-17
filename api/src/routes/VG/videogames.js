const express = require("express");
const getIdVideoGame = require("../../controllers/getIdVideoGame");
const getAllVG = require("../../controllers/getAll");


const router = express.Router();

router.get("/:id",async(req,res)=>{
  await getIdVideoGame(req,res)
} );

router.get("/", async (req, res) => {
  const name = req.query.name;
  const allVG = await getAllVG();
  const uniqueSet = new Set(allVG);
      const uniqueArray = Array.from(uniqueSet);
 
  if (name) {
    const filterNameVG = uniqueArray.filter((elm) =>
      elm.name.toLowerCase().includes(name.toLowerCase())
    );
    filterNameVG.length
      ? res.status(200).send(filterNameVG)
      : res.status(404).send("No esta el videogame");
  } else {
    res.status(200).send(uniqueArray);
  }
});




module.exports = router;
