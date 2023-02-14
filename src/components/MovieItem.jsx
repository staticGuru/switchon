import React from "react";

function MovieItem({ item, index,onPress}) {
  return (
    <div
      key={index}
      style={{
        marginTop: "20px",
        border: 1,
        borderColor: "red",
        borderWidth: 5,
      }}
      onClick={onPress}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
      <img alt="movie" src={item?.image} style={{width:"100px",height:"100px"}}/>
      <div style={{display: "flex", flexDirection: "column",textAlign: "left"}}>
        <span>{item?.title}</span>
        <span>{item?.year}</span>
       
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
