"use client";
import React from "react";
import SingleMovie from "@/components/movies/SingleMovie";
import { useSearchParams } from "next/navigation";
import ScrollToTop from "@/components/ScrollToTop";
import { fetchMovies } from "@/api/movies";


const SearchPage = async () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const searchRes = await fetchMovies('/Movies?select=*',0);
  const results = searchRes.filter((mov) =>
    mov.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <main>
      <ScrollToTop />
      <section>
        {results.length === 0 ? (
          <div className="h-screen flex justify-center items-center">
            <h2 className="text-5xl">No Results</h2>
          </div>
        ) : (
          <div className="container m-auto grid lg:grid-cols-4 md:grid-cols-3">
            {results.map((mov, index) => {
              return <SingleMovie movie={mov} key={index} />;
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default SearchPage;
