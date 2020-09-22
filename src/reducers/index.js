// import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE } from "../actions/index.js"
const initialState = {
movies: [],
moviesLoaded: [],
movieDetail: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
          ...state,
          movies: state.movies.concat(action.payload)
        }
    }
    if (action.type === "GET_MOVIES") {
        console.log(action.payload.Search)
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === "GET_MOVIE_DETAIL") {
      return {
        ...state,
        movieDetail: action.payload
      }
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
      return {
        ...state,
        movies: state.movies.filter(peli => peli.title !== action.payload.title)
      }
    }
    return state;
  }
  export default rootReducer;