import {GET_ALL_VIDEOGAMES,GET_VIDEOGAMES_DETAIL,ADD_VIDEOGAME,UPDATE_VIDEOGAME,DELETE_VIDEOGAME,FILTER_GENERS, ORDER_RAIINGS_AND_ALFABETICO ,GET_ALL_POSTS} from "./actions-types";
import axios from "axios";




export const addVG = (videogame)=>{ // post
    const endpoint =("http://localhost:3001/posteados")
    return async (dispatch)=>{
        try {
            const {data} = await axios.post(endpoint,videogame);

        if(!data.length) throw new Error ("No se pudo crear el videogames")
        return dispatch ({
            type:ADD_VIDEOGAME,
            payload:data
        })
        
        } catch (error) {
            console.error(error)
        }
    }
}
export const putVG = (videogame)=>{ // put
    const endpoint =("http://localhost:3001/posteados")
    return async (dispatch)=>{
        try {
            const {data} = await axios.put(endpoint,videogame);

        if(!data.length) throw new Error ("No se pudo modificar el videogames")
        return dispatch ({
            type:UPDATE_VIDEOGAME,
            payload:data
        })
        
        } catch (error) {
            console.error(error)
        }
    }
}

export const removeVG = (id) => {
    const endpoint=  `http://localhost:3001/posteados/${id}`
        return async(dispatch)=>{    
           try {
            const {data} = await axios.delete(endpoint);
            if(!data.length) throw new Error ('No se pudo borrar el videogames');
            return dispatch ({
                type:DELETE_VIDEOGAME,
                payload:data
            })
           } catch (error) {
            console.log(error)
           }
            
        }
   }


export const getVGrDetail = (id) => { // detail
    const endpoint= ` http://localhost:3001//videogames/${id}`
    return async(dispatch)=>{    
       try {
        const {data} = await axios.get(endpoint);
        if(!data.length) throw new Error ('No se pudo traer con el id');
        return dispatch ({
            type:GET_VIDEOGAMES_DETAIL,
            payload:data
        })
       } catch (error) {
        
       }
        
    }
}
export const getAllVG = () => { // get all vg
    // const endpoint='http://localhost:3001/videogames'
    // return async(dispatch)=>{    
    //    try {
    //     const {data} = await axios.get(endpoint);
       
    //     if(!data.length) throw new Error ('No se pudo traer los videogames');
        
    //     return dispatch ({
    //         type:GET_ALL_VIDEOGAMES,
    //         payload:data
    //     })
    //    } catch (error) {
    //     console.log(error)
    //    }
        
    // }
   return async (dispatch) => {
    const response = await axios("http://localhost:3001/videogames")
    return dispatch ({
        type:GET_ALL_VIDEOGAMES,
        payload:response.data,
    })
   }
}

export const getAllPosts= () => { // get all posts
const endpoint= 'http://localhost:3001/posteados'
try {
    return async(dispatch)=>{
        const {data} = await axios.get(endpoint);
        if(!data.length) throw new Error ('No se pudo traer los posts');
        return dispatch ({
            type:GET_ALL_POSTS,
            payload:data
        })
    }
} catch (error) {
    console.log(error)
}
}
export const getGenres = () => { // get genres
const endpoint= 'http://localhost:3001/genres'
try {
    return async(dispatch)=>{
        const {data} = await axios.get(endpoint);
        if(!data.length) throw new Error ('No se pudo traer los genres');
        return dispatch ({
            type:FILTER_GENERS,
            payload:data
        })
    }
} catch (error) {
    console.log(error)
}
}
export const Order = (order) => { // get order
return {type:ORDER_RAIINGS_AND_ALFABETICO,payload:order}
}