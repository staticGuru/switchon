import { MOVIEID } from "./movie.types"

export const setMovieId=(payload)=>{
     return{
          type:MOVIEID,
          payload
     }
}