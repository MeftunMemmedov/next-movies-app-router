import { fetchMovies } from "@/api/movies";
import SingleMovie from "@/components/movies/SingleMovie";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";

export const metadata = {
  title: "Movies | All Movies",
  description: "",
  keywords: "",
  author: "",
};

const AllMovies = async () => {
  const movies = await fetchMovies("/Movies?select=*", 80);

  return (
    <>
      <main>
        <ScrollToTop />
        <section>
          <div className="container m-auto grid lg:grid-cols-4 md:grid-cols-3">
            {movies.map((movie, index) => {
              return <SingleMovie movie={movie} key={index} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default AllMovies;
