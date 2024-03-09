import { Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import { Suspense, lazy } from 'react';
import {
  getCastsMovie,
  getReviews,
  getSingleMovie,
} from 'Api/serviseMovies/serviseMovies';
const HomePage = lazy(() => import('../pages/Homepage/HomePage'));
const MoviesSearch = lazy(() => import('../pages/MoviesPage/MoviesSearch'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesSearch />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
