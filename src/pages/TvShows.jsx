import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "./ImageSlider";
import "./Home/Home.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAiringShows,GetOnAirShows, GetPopularShows, GetTopRatedShows
} from "../store/tv-shows/apiActions";
import CardList from "./CardList";

const TvShows = () => {
  const [slides, setSlides] = useState([]);
  const [apiAiringShows, setApiAiringShows] = useState(false);
  const [apiOnAirShows, setApiOnAirShows] = useState(false);
  const [apiPopularShows, setApiPopularShows] = useState(false);
  const [apiTopRatedShows, setApiTopRatedShows] = useState(false);
  const slidesArr = [];
  const [isSuccessCall, setIsSuccessCall] = useState(false);
  const airingShowsData = useSelector((state) => state.airingShows.playing);
  const onAirShowsData = useSelector((state) => state.onAirShows.playing);
  const popularShowsData = useSelector((state) => state.popularShows.playing);
  const topRatedShowsData = useSelector((state) => state.topRatedShows.playing);
  
  const dispatch = useDispatch();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/tv/top_rated",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2Q1N2FlY2NlMmRiZjhlN2UwMDVkNzliMDNjY2UwNCIsInN1YiI6IjY0NGUxYWQ3OWFmZmMwMDJmYmRmZGMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dx7oZt0jO5BJK4FmCJK71irizs-3Lshv-x11ts6H55A",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        response.data.results.map((item, index) => {
          if (index < 8) {
            slidesArr.push(item);
          }
        });
        setSlides(slidesArr);
        setIsSuccessCall(true);
      })
      .catch(function (error) {
        console.error(error);
      });

    // GetAiringShows API
    dispatch(GetAiringShows())
      .then(() => {
        setApiAiringShows(true); // Set the state to true when data is loaded
      })
      .catch((error) => {
        console.log("Unable to load data", error);
      });

    // GetOnAirShows API
    dispatch(GetOnAirShows())
      .then(() => {
        setApiOnAirShows(true); // Set the state to true when data is loaded
      })
      .catch((error) => {
        console.log("Unable to load data", error);
      });

      // GetPopularShows API
    dispatch(GetPopularShows())
      .then(() => {
        setApiPopularShows(true); // Set the state to true when data is loaded
      })
      .catch((error) => {
        console.log("Unable to load data", error);
      });
      // GetTopRatedShows API
    dispatch(GetTopRatedShows())
      .then(() => {
        setApiTopRatedShows(true); // Set the state to true when data is loaded
      })
      .catch((error) => {
        console.log("Unable to load data", error);
      });

    
    // console.log("Home>>DATA >>>>>", nowplayingData);
  }, [dispatch]);

  const containerStyles = {
    width: "100%",
    height: "80vh",
    margin: "0 auto",
  };
  // console.log("HOME SECTION >>", nowplayingData.data);

  return (
    <div className="home">
      <div style={containerStyles}>
        {isSuccessCall ? <ImageSlider slides={slides} /> : null}
      </div>
      <main id="main" style={{ ...containerStyles, height: "max-content" }}>
        {
          apiTopRatedShows ? (<CardList data={topRatedShowsData.data}title={"Top Rated Shows"}/>) : ( <div>Loading...</div>)
        }
        {
          apiPopularShows ? (<CardList data={popularShowsData.data}title={"Popular Shows"}/>) : ( <div>Loading...</div>)
        }

        {
          apiAiringShows ? (<CardList data={airingShowsData.data}title={"Airing Today"}/>) : ( <div>Loading...</div>)
        }
        {
          apiOnAirShows ? (<CardList data={onAirShowsData.data}title={"On The Air"}/>) : ( <div>Loading...</div>)
        }
        
        
      </main>
    </div>
  );
};




export default TvShows;