const express = require("express");
const router = express.Router();
const videoGames = require("./VG/videogames");
const getGenres = require("./Genres/genres");
const posts=require ('./posteados/posteados')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videoGames);
router.use("/genres", getGenres);
router.use('/posteados',posts);

module.exports = router;
