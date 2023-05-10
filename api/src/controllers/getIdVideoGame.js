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
            const cantidadDeGames= await Videogame.count();
            let newId = cantidadDeGames +1;// me tira un num  de la db y le sumo 1 para alojar el nuevo id 
            
            const newVG = await Videogame.create({ // creo el game en la DB 

                
            id: newId, //
            name: data.name,
            description: data.description_raw,
            plataformas: data.platforms.map((plataform) => plataform.platform.name).join(', '),
            fecha: data.released,
            rating: data.rating,
            image: data.background_image,
            createInDb:true,
          });
          
          
          const genrNam = await Genres.findAll({
            where: {
              name: data.genres.map((genre) => genre.name),
            },
          });
          await newVG.addGenres(genrNam);
          const getNewVgID = await Videogame.findOne({
            where: {
                id:newId,
            },
        });
        
        if (!res.headersSent) {
            return res.status(200).json(getNewVgID);;
        }
        

        } 
      

        return res.status(200).json(videogame);
  } catch (error) {
    returnres.status(500).json({ message: error.message });
  }
};

module.exports = getIdVideoGame;