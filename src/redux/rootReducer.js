import {combineReducers} from "redux";
import movieReducer from "./movie/movie.reducers"
const rootReducer=combineReducers({
     movie:movieReducer,
});
export default rootReducer;