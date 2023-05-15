import {GET_ALL_VIDEOGAMES,GET_VIDEOGAMES_DETAIL,ADD_VIDEOGAME,UPDATE_VIDEOGAME,DELETE_VIDEOGAME,FILTER_GENERS,ORDER_RAIINGS_AND_ALFABETICO,GET_ALL_POSTS} from './actions-types'

const initialState = {
    allvideogames:[],
    videogameDetail:{},
    posts:[],
    filterGenres:[],
}
 const reducer=(state = initialState, {type , payload})=>{
switch(type){
    case GET_ALL_VIDEOGAMES:
        return{...state,
            allvideogames:payload,
        };
        default: 
        return { ...state };
}
}
export default reducer;