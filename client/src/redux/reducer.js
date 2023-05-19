import {GET_ALL_VIDEOGAMES,    
    GET_VIDEOGAMES_DETAIL,
    ADD_VIDEOGAME,
    UPDATE_VIDEOGAME,
    DELETE_VIDEOGAME,
    FILTER_GENERS,
    GET_NAME_VIDEOGAMES,
    ORDER_ALFABETICO,
    ORDER_RATINGS,
    GET_ALL_POSTS,
    FILTER_GENERS_DB,
    FILTER} from './actions-types'

const initialState = {
    allvideogames:[],
    videogameDetail:[],
    posts:[],
    filterGenres:[],
    filterGenresdb:[],
}
 const reducer=(state = initialState, {type , payload})=>{
switch(type){
    case GET_ALL_VIDEOGAMES:
        return{...state,
            allvideogames:payload,
        };
    case GET_VIDEOGAMES_DETAIL:
        return{...state,
                    videogameDetail:payload,
                };
    case GET_NAME_VIDEOGAMES:
        return{...state,
                            allvideogames:payload,
                        };
    case ADD_VIDEOGAME:
        return{...state,
                    allvideogames:[...payload],
                };
    case UPDATE_VIDEOGAME:
        return{
            ...state
        };
    case DELETE_VIDEOGAME:
        return{
            ...state
        };
    case FILTER_GENERS:
        return{
            filterGenres:payload,
        };    
    case  ORDER_ALFABETICO:
        return{
            ...state,
            allvideogames:payload,
        };
     case  ORDER_RATINGS:
        return{
            ...state,
            allvideogames:payload,
        };
    case GET_ALL_POSTS:
        return{...state,
            allvideogames:payload,
            };
    case FILTER_GENERS_DB:
        return{...state,
            filterGenresdb:payload,
        };
    case FILTER:{
        
        return{
            ...state,
            allvideogames:payload,
        }
    }
        default: 
        return { ...state };
}
}
export default reducer;