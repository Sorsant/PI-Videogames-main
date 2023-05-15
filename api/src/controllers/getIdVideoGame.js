const axios = require("axios");
require("dotenv").config();
const KEY = process.env.API_KEY;
const { Videogame,Genres } = require("../db");
// 960528

const getIdVideoGame = async (req, res) => {
    try {
        const { id } = req.params;// me tira un numero 
        
        const videogame = await Videogame.findOne({
            where: {
                id,
            },
        });
        if(!videogame){

            const { data } = await axios( // traigo el game por el numero id de data
            `https://api.rawg.io/api/games/${id}?key=${KEY}`
            );
            
            const Vg= data
            const idResults ={
              name: Vg.name,
              id: Vg.id,
              description: Vg.description,
              genres: Vg.genres.map((genre) => genre.name),
              platforms: Vg.platforms.map((platform) => platform.platform.name),
              fecha: Vg.released,
              rating: Vg.rating,
              image: Vg.background_image,
            }
                  
            return res.status(200).json(idResults);;
        
        

        } 
      

        return res.status(200).json(videogame);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getIdVideoGame;