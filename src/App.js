import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movie";
import Footer from "./components/Footer";
import TvShows from "./pages/TVShow";
// import CardDetails from "./pages/TVShow/component/CardDetail";
import SearchResults from "./pages/SearchResults";
import TvShowsDetail from "./pages/TVShow/component/CardDetail";
import MoviesDetail from "./pages/Movie/component/CardDetail"
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetail />} />
        <Route path="/tv-shows" element={<TvShows />} />
        <Route path="/tv-shows/:id" element={<TvShowsDetail />} />
        {/* <Route path="/card/:id" element={<CardDetails />} /> */}
        <Route path="/search/:keyword" element={<SearchResults />} />

        {/* Must work on Home Section 
            Similiar Movie or TV Shows list on Card Details Page
         */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
