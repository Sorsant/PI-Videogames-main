const express = require("express");
const getGenres = require("../../controllers/getGenres");
const router = express.Router();
const { Genres } = require("../../db");

router.get("/", async (req, res) => {
  try {
    const genresG = await getGenres();
    genresG.forEach((elem) => {
      Genres.findOrCreate({
        where: { name: elem },
      });
    });
    const allGenres = await Genres.findAll();
    res.status(200).json(allGenres);
  } catch (error) {
    res.status(404).send("not found");
  }
});

module.exports = router;
