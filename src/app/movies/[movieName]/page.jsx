import React from "react";
// next
import Image from "next/image";
import Link from "next/link";
// next

// components
import TrailerPlayer from "@/components/movies/TrailerPlayer";
import TrailerBtn from "@/components/TrailerBtn";
import WatchListBTN from "@/components/movies/WatchListBTN";
import ImageCarousel from "@/components/movies/ImageCarousel";
import CastCarousel from "@/components/movies/CastCarousel";
import MovieCarousel from "@/components/movies/MovieCarousel";
// components

// icons
import { LiaImdb } from "react-icons/lia";
import ScrollToTop from "@/components/ScrollToTop";
import { fetchMovies, options } from "@/api/movies";
// icons

const getSingleMovie = async (title) => {
  const response = await fetch(
    `https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/Movies?title=eq.${title}&select=*`,
    options
  ).then((res) => res.json());
  return response[0];
};

//generate
export const generateStaticParams = async () => {
  const movies = await fetchMovies("/Movies?select=*", false);

  return movies.map((mov) => ({
    movieName: mov.title,
  }));
};

export const generateMetadata = async ({ params }) => {
  const title = decodeURIComponent(params.movieName);
  const movie = await getSingleMovie(title);

  return {
    title: `Movies | ${movie.title}`,
    description: movie.description,
    keywords: `${movie.genre.map((genre) => `${genre} movies`)}`,
    author: "",
  };
};
//generate

const MovieDetails = async ({ params }) => {
  const { movieName } = params;
  const movies = await fetchMovies("/Movies?select=*", 60);
  const title = decodeURIComponent(movieName);
  const movie = await getSingleMovie(title);

  const fileredForSimilarToMovie = movies.filter(
    (mov) =>
      mov.genre.includes(movie.genre[0]) ||
      mov.genre.includes(movie.genre[1]) ||
      mov.genre.includes(movie.genre[2])
  );
  const similarToMovie = fileredForSimilarToMovie.filter(
    (mov) => mov.title != movie.title
  );
  const filteredMoviesBySameDirector = movies.filter((mov) =>
    mov.director.includes(movie.director[0])
  );
  const moviesBySameDirector = filteredMoviesBySameDirector.filter(
    (mov) => mov.title != movie.title
  );

  return (
    <main className="container m-auto">
      <ScrollToTop />
      <section>
        <div className="flex lg:flex-row flex-col py-5">
          <div className="poster-box lg:w-1/5 w-full lg:px-0 px-5">
            <div className="">
              <Image
                src={movie.poster}
                width={1920}
                height={1080}
                alt={`${movie.title} poster`}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="movie-info-box lg:w-4/5 w-full py-5 px-12">
            <h2 className="text-4xl font-bold mb-1">{movie.title}</h2>
            <p className="mb-4 text-gray-300">
              Directed by{" "}
              {movie.director.map((director, i) => {
                return (
                  <Link
                    href={`/person/${director}`}
                    className="text-white hover:text-orange-400"
                    key={i}
                  >
                    {director}
                  </Link>
                );
              })}
            </p>
            <p className="mb-2">{movie.year}</p>
            <div className="flex mb-2">
              {movie.genre.map((genre, i) => {
                return (
                  <h4 className="mr-2 text-orange-300 font-semibold" key={i}>
                    {genre}
                  </h4>
                );
              })}
            </div>
            <div className="flex items-center">
              <LiaImdb size={40} color="gold" className="inline mr-2" />
              <h5 className="font-bold">{movie.rating}</h5>
            </div>
            <div className="my-10 flex md:flex-row flex-col md:justify-start justify-center">
              <TrailerBtn />
              <WatchListBTN
                movie={movie}
                btnTitle={true}
                styles={
                  "hover:text-orange-400 hover:scale-105 transition duration-400"
                }
                iconSize={30}
              />
            </div>
            <div className="">
              <p>{movie.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <TrailerPlayer trailerUrl={movie.trailer_url} />
      </section>

      <section>
        <div className="bg-black my-4">
          <h2 className="text-4xl font-bold md:text-start text-center text-orange-400 lg:ml-5 my-5">
            Scenes
          </h2>
          <div className="">
            <ImageCarousel images={movie.images} movie={movie} />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-black">
          <h2 className="text-4xl font-bold md:text-start text-center text-orange-400 lg:ml-5 my-5">
            Cast
          </h2>
          <CastCarousel cast={movie.cast} />
        </div>
      </section>

      {similarToMovie.length !== 0 ? (
        <section>
          <div className="relative w-full bg-black py-16 ">
            <h2 className="text-4xl font-bold md:text-start text-center lg:ml-5 text-orange-400">
              Similar to {movie.title}
            </h2>
            <div className="container m-auto">
              <MovieCarousel movies={similarToMovie} />
            </div>
          </div>
        </section>
      ) : null}

      {moviesBySameDirector.length !== 0 ? (
        <section>
          <div className="relative w-full bg-black h-[90vh] py-16 ">
            <h2 className="text-4xl font-bold md:text-start text-center lg:ml-5 text-orange-400">
              Other movies by {movie.director}
            </h2>
            <div className="container m-auto">
              <MovieCarousel movies={moviesBySameDirector} />
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
};

export default MovieDetails;
