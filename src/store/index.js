import { configureStore } from "@reduxjs/toolkit";
import {
  nowPLayingReducer,
  popularMoviesReducer,
  topRatedMoviesReducer,
  upcomingMoviesReducer,
} from "./movies";
import {
  airingShowsReducer,
  onAirShowsReducer,
  popularShowsReducer,
  topRatedShowsReducer,
  getTVShowByIdReducer,
} from "./tv-shows";

const store = configureStore({
  reducer: {
    nowPLaying: nowPLayingReducer,
    popularMovies: popularMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    airingShows: airingShowsReducer,
    onAirShows: onAirShowsReducer,
    popularShows: popularShowsReducer,
    topRatedShows: topRatedShowsReducer,
    getTVShowById: getTVShowByIdReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
