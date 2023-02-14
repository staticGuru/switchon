import React, { useEffect } from "react";
import { connect } from "react-redux";

function MovieDetail(props) {
  const [movieDetails, setMovieDetails] = React.useState();
  useEffect(() => {
    async function fetchData() {
      await fetch(`${process.env.REACT_APP_API}/title/${props.movieId}`, {
          mode: "cors",
        }).then((response) => console.log(response)).catch(err=>console.error(err));
    }
    fetchData();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>image</div>
      <div>title</div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    movieId: state.movie.movieId,
  };
};
export default connect(mapStateToProps, null)(MovieDetail);
