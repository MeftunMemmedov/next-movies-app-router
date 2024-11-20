import React from "react";
import GenreDescription from "@/components/movies/GenreDescription";
import SingleMovie from "@/components/movies/SingleMovie";
import ScrollToTop from "@/components/ScrollToTop";
import { fetchMovies } from "@/api/movies";

export const generateMetadata = async ({ params }) => {
  return {
    title: `Movies | ${
      params.genre.charAt(0).toUpperCase() + params.genre.slice(1)
    } Movies`,
    description: `${params.genre} movies`,
    keywords: `${params.genre} movies`,
    author: "MFTN",
  };
};



const MoviesByGenre = async ({ params }) => {
  const movies = await fetchMovies('/Movies?select=*', 60)
  const moviesByGenre = movies.filter((mov) =>
    mov.genre.includes(
      params.genre.charAt(0).toUpperCase() + params.genre.slice(1)
    )
  );
  return (
    <main>
      <ScrollToTop />
      <section>
        <div className="h-screen relative overflow-hidden  category-page-banner">
          <div className="container m-auto  h-full px-10">
            <div className="w-1/2 h-full flex flex-col justify-center items-start">
              <h2 className="text-5xl font-bold mb-5">
                {params.genre.charAt(0).toUpperCase() + params.genre.slice(1)}{" "}
                Movies
              </h2>
              <GenreDescription param={params.genre} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto grid lg:grid-cols-4 md:grid-cols-3 mt-10">
          {moviesByGenre.map((movie, index) => {
            return <SingleMovie movie={movie} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default MoviesByGenre;
