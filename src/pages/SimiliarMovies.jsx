import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./CardList";

const SimiliarMovies = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const option1 = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${props.id}/similar`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
    },
  };

  useEffect(() => {

    axios
      .request(option1)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        setLoading(false)
      })
      .catch(function (error) {
        console.error(error);
      });
      
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <CardList data={data} title={"Similiar"}/>}
      
    </div>
  );
};

export default SimiliarMovies;
