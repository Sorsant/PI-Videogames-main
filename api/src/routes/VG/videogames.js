const express = require("express");
const getIdVideoGame = require("../../controllers/getIdVideoGame");
const getAllVG = require("../../controllers/getAll");
const postVG = require("../../controllers/postvideogame");

const router = express.Router();

router.get("/:id", getIdVideoGame);

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

module.exports = router;
