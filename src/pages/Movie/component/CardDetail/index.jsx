import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetMovieById } from "../../../../store/movies/apiActions";
const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.getMovieById);
  useEffect(() => {
    dispatch(GetMovieById({ id }));
  }, []);
  console.log("MOVIE DATA",id);
  const convertMinsToHours = (minutes) => {
    if (isNaN(minutes) || minutes < 0) {
      return "Invalid input";
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes} mins`;
    } else if (remainingMinutes === 0) {
      return `${hours} hr`;
    } else {
      return `${hours}hr ${remainingMinutes}mins`;
    }
  };
  if (loading) {
    return "loading...";
  }
  if (error) {
    return "error";
  }

  return (
    <>
      {/* <div className="popular-movie-slider-content">
      <ul className="category">
        Genres:
        {data?.genres?.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <ul className="category">
        Countries:
        {data?.production_countries?.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <ul className="category">
        Languages:
        {data?.spoken_languages?.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <p className="desc">{data?.overview}</p>
      <div className="movie-info">
        <i className="fa fa-clock-o">
          &nbsp;&nbsp;&nbsp;
          <span>
            {data?.runtime
              ? convertMinsToHours(data?.runtime)
              : data?.number_of_seasons}
          </span>
        </i>
        <i className="fa fa-circle">
          &nbsp;&nbsp;&nbsp;
          <span>
            Imdb: <b>{data?.vote_average}/10</b>
          </span>
        </i>
      </div>
      {data?.homepage ? (
        <div className="movie-btns">
          <button>
            <a href={data?.homepage} target="blank">
              <i className="fa fa-info"></i> &nbsp; More Info
            </a>
          </button>
        </div>
      ) : null}
    </div> */}
      <div
        className="card-detail-holder"
        style={
          !data.adult
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
              }
            : null
        }
      >
        <div className="popular-movie-slider">
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            className="poster"
          />
          <div className="popular-movie-slider-content">
            <h2 className="movie-name">
              {data.title ? data.title : data.name}
            </h2>
            <p className="movie-name">
              {data.tagline ? data.tagline : data.type}
            </p>
            <p className="release">
              Released:{" "}
              {data.release_date
                ? data.release_date?.slice(0, 4)
                : data.first_air_date?.slice(0, 4)}
            </p>
            <ul className="category">
              Genres:
              {data.genres?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Countries:
              {data.production_countries?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <ul className="category">
              Languages:
              {data.spoken_languages?.map((item) => {
                return <li>{item.name}</li>;
              })}
            </ul>
            <p className="desc">{data.overview}</p>
            <div className="movie-info">
              <i className="fa fa-clock-o">
                &nbsp;&nbsp;&nbsp;
                <span>
                  {data.runtime
                    ? convertMinsToHours(data.runtime)
                    : data.number_of_seasons}
                </span>
              </i>
              <i className="fa fa-circle">
                &nbsp;&nbsp;&nbsp;
                <span>
                  Imdb: <b>{data.vote_average}/10</b>
                </span>
              </i>
            </div>
            {data.homepage ? (
              <div className="movie-btns">
                <button>
                  <a href={data.homepage} target="blank">
                    <i className="fa fa-info"></i> &nbsp; More Info
                  </a>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
