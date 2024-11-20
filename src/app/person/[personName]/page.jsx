import { fetchMovies } from "@/api/movies";
import MovieCarousel from "@/components/movies/MovieCarousel";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const personName = decodeURI(params.personName);

  return {
    title: `Movies | Person | ${personName}`,
    description: `About ${personName}`,
    keywords: `About ${personName}`,
    author: "MFTN",
  };
};

const AboutPerson = async ({ params }) => {
  const personName = decodeURI(params.personName);
  const persons = await fetchMovies("/Movies-Persons?select=*", false);
  const movies = await fetchMovies("/Movies?select=*", 60);

  const person = persons.find((person) => person.name === personName);
  const moviesByDirector = person.isDirector
    ? movies.filter((movie) => movie.director.includes(personName))
    : null;

  return (
    <main>
      <ScrollToTop />
      <section>
        <div className="container m-auto">
          <div className="w-11/12 m-auto">
            <div className="w-full flex lg:flex-row flex-col py-5">
              <div className="md:w-1/3 w-full relative m-auto">
                <Image
                  src={person?.image}
                  alt={`${person?.name}'s image`}
                  width={350}
                  height={350}
                  className="rounded-full m-auto mb-12 object-cover"
                />
              </div>
              <div className="md:w-3/4 w-full pl-10">
                <div>
                  <h2 className="md:text-3xl text-xl font-bold mb-5">
                    {person?.name}
                  </h2>
                  <p className="text-2 text-gray-400">
                    {person.isDirector ? " Director" : "Actor"}
                  </p>
                  <p className="text-2 text-gray-400 mb-5">
                    Born {person?.birthday}
                  </p>
                </div>
                <div className="w-full">
                  <p className={""}>{person?.about.slice(0, 600)}...</p>
                  {/* <button className={` text-orange-300 font-bold`}>{lessText?'More':'Less'}</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="py-5 container m-auto md:text-start text-center">
          <h2 className="font-bold text-4xl">Known For</h2>
          <div>
            <MovieCarousel movies={moviesByDirector} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPerson;
