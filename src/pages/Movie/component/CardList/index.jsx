import React from "react";
import CardItem from "../CardItem";
import "./index.css"

const CardList = ({ data, title }) => {
  // console.log(data);
  return (
    <div className="category-container">
      <span className="list-text">{title}</span>

      <div className="movie-cards">
        {data?.map((item) => {
          return item.poster_path ? (
            <CardItem item={item} key={item.id} id={data.id}/>
          ) : null; // Returns only the ones with the poster
        })}
      </div>
    </div>
  );
};

export default CardList;
