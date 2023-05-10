const express = require("express");
const router = express.Router();
const videoGames = require("./VG/videogames");
const getGenres = require("./Genres/genres");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videoGames);
router.use("/genres", getGenres);

module.exports = router;
