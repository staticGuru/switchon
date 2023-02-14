import { MOVIEID } from "./movie.types";

const INITIAL_STATE = {
  movieId: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIEID:
      return {
        ...state,
        movieId: action.payload,
      };
   default:{
     return state;
   }
  }
};

export default reducer;
