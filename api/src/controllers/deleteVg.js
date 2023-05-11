require("dotenv").config();
const { Videogame} = require("../db");
const deleteVg= async(req,res)=>{
try {
    const {id}=req.params
    if (!id) {
        return res.status(404).json({ message: "No existe VideoGame con ese numero" });
      }
      await Videogame.destroy({
        where: {
          id,
        },
      });
      const videogames = await Videogame.findAll();
      return res.status(200).send("borraste el video game PAAAAAAAAAAAAAAAAAAA");
} catch (error) {
    return res.status(500).send("no deletea prro");
}
}
module.exports = deleteVg;



