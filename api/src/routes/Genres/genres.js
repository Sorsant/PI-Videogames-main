const express = require("express");
const getGenres = require("../../controllers/getGenres");
const router = express.Router();
const { Genres } = require("../../db");

router.get("/", async (req, res) => {
  try {
    const genresG = await getGenres();
   
   
    res.status(200).json(genresG);
  } catch (error) {
    res.status(404).send("not found");
  }
});
router.get('/db',async (req, res) => {
  try {
    const dbG = await Genres.findAll();
    res.status(200).json(dbG);
  } catch (error) {
    res.status(404).send("not found");
  }
})

module.exports = router;
