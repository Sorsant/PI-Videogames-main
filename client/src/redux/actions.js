import {GET_ALL_VIDEOGAMES,
    FILTER
    ,GET_NAME_VIDEOGAMES
    ,GET_VIDEOGAMES_DETAIL
    ,FILTER_GENERS_DB
    ,ADD_VIDEOGAME,
    UPDATE_VIDEOGAME,
    DELETE_VIDEOGAME,
    FILTER_GENERS,
     ORDER_ALFABETICO,
     ORDER_RATINGS,
     GET_ALL_POSTS} from "./actions-types";
import axios from "axios";




export const addVG = (videogame)=>{ // post
    const endpoint =("http://localhost:3001/posteados")
    return async (dispatch)=>{
        try {
            const {data} = await axios.post(endpoint,videogame);

        
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
            
            return dispatch ({
                type:DELETE_VIDEOGAME,
                payload:data
            })
           } catch (error) {
            console.log(error)
           }
            
        }
   }


export const getVGDetail = (id) => { // detail
    const endpoint= `http://localhost:3001/videogames/${id}`
    return async(dispatch)=>{    
       try {
        const {data} = await axios.get(endpoint);
        
        return dispatch ({
            type:GET_VIDEOGAMES_DETAIL,
            payload:data
        })
       } catch (error) {
        
       }
        
    }
}
export const getVGName = (name) => { // get name vg
    const endpoint=`http://localhost:3001/videogames/?name=${name}`
    return async(dispatch)=>{    
       try {
        const {data} = await axios.get(endpoint);
            
        return dispatch ({
            type:GET_NAME_VIDEOGAMES,
            payload:data
        })
       } catch (error) {
        console.log(error)
       }
        
    }
}
export function filterCards(genre) {
    const endpoint='http://localhost:3001/videogames'
    return async(dispatch)=>{    
       try {
        const {data} = await axios.get(endpoint);
        if(genre ==="AllGeners"){
            return dispatch ({
                type: FILTER,
                 payload: data})
        }
        const newFilter = data.filter((vg) =>vg.genres.includes(genre));
          return dispatch ({
            type: FILTER,
             payload: newFilter
        })
       } catch (error) {
        console.log(error)
       }
        
    }
}
export function OrderCardsAz(order) {
    const endpoint='http://localhost:3001/videogames'
    return async(dispatch)=>{    
       try {
        const {data} = await axios.get(endpoint);
        if(order ==="Default"){
            return dispatch ({
                type:  ORDER_ALFABETICO,
                 payload: data})
        }
        else if (order === "A-Z"){
            const acendente = data.sort((a,b)=>a.name.localeCompare(b.name));
            return dispatch ({
                type:  ORDER_ALFABETICO,
                 payload: acendente})
        }
        else if( order === "Z-A"){
            const decendente = data.sort((a,b)=>b.name.localeCompare(a.name));
            
              return dispatch ({
                type:  ORDER_ALFABETICO,
                 payload: decendente
            })

        }
       } catch (error) {
        console.log(error)
       }
        
    }
}
export const getAllVG = () => { // get all vg
    const endpoint='http://localhost:3001/videogames'
    return async(dispatch)=>{    
       try {
        const {data} = await axios.get(endpoint);
       
        
        
        return dispatch ({
            type:GET_ALL_VIDEOGAMES,
            payload:data
        })
       } catch (error) {
        console.log(error)
       }
        
    }
}

export const getAllPosts= () => { // get all posts
const endpoint= 'http://localhost:3001/posteados'
try {
    return async(dispatch)=>{
        const {data} = await axios.get(endpoint);
        
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
       
        return dispatch ({
            type:FILTER_GENERS,
            payload:data
        })
    }
} catch (error) {
    console.log(error)
}
}
export const getGenresDB = () => { // get genres
    const endpoint= 'http://localhost:3001/genres/db'
    try {
        return async(dispatch)=>{
            const {data} = await axios.get(endpoint);
           
            return dispatch ({
                type:FILTER_GENERS_DB,
                payload:data
            })
        }
    } catch (error) {
        console.log(error)
    }
    }


    export const OrderRating = (order) => { // obtener calificaciones de la orden
        const endpoint = 'http://localhost:3001/videogames';
        return async (dispatch) => {
            try {
                const { data } = await axios.get(endpoint);
                const ratingsvalue = data;
                if (order === "Default") {
                    return dispatch({
                        type: ORDER_RATINGS,
                        payload: ratingsvalue
                    });
                }
                if (order === "MinRating") {
                    const acendente = ratingsvalue.sort((a, b) => a.rating - b.rating);
                    return dispatch({
                        type: ORDER_RATINGS,
                        payload: acendente
                    });
                } else if (order === "MaxRating") {
                    const decendente = ratingsvalue.sort((a, b) => b.rating - a.rating);
                    return dispatch({
                        type: ORDER_RATINGS,
                        payload: decendente
                    });
                }
            } catch (error) {
                console.error('Error de red:', error.message);
            }
        }
    } 
    
    