import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import { setMovieId } from "../redux/movie/movie.actions";
function Home(props) {
  const [titleValue, setTitleValue] = React.useState("");
  const [searchResult, setSearchResult] = React.useState();
  let history = useHistory();
  const debouncedSearch= _.debounce(async function() {
     await fetch(`${process.env.REACT_APP_API}/search?query=${titleValue}`, {
          mode: "cors",
        })
          .then((res) => {
            return res.json();
          })
          .then((response) => setSearchResult(response?.results))
          .catch((err) => console.error(err));
          },500);
  

  React.useEffect(() => {
    async function fetchData() {
     debouncedSearch();
      
    }
    fetchData();
  }, [titleValue]);
  console.log(searchResult)
  function getMovieDetails(movie){
     props.setMovieId(movie.id);
     history.push(`/Details/${movie.id}`);

  }
  return (
    <div>
      <input
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <div>
        {searchResult?.map((movie, index) => (
          <MovieItem item={movie} index={index} onPress={()=>getMovieDetails(movie)}/>
        ))}
      </div>
    </div>
  );
}
const mapDispatchToProps=(dispatch)=>{
     return{
          setMovieId:(e)=>dispatch(setMovieId(e))
     }
}

export default connect(null,mapDispatchToProps)(Home);
