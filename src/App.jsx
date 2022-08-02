import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "Layout/SharedLayout";

const Home = lazy(() => import("pages/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/MovieDetails/Cast/Cast"));
const Reviews = lazy(() => import("pages/MovieDetails/Reviews/Reviews"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
