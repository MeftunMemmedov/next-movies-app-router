import { fetchMovies } from "@/api/movies";
import Link from "next/link";

export const metadata = {
  title: "Movies | Genres",
  description: "",
  keywords: "",
  author: "",
};

const Genres = async () => {
  const movies = await fetchMovies("/Movies?select=*", false);

  const allGenres = Array.from(new Set(movies.flatMap((mov) => mov.genre)));

  return (
    <main>
      <section>
        <div>
          <h2 className="text-5xl font-bold text-center py-10">Categories</h2>
          <div className="container m-auto flex flex-wrap justify-center gap-x-10">
            {allGenres.map((g, i) => {
              return (
                <Link
                  href={`/genres/${g.charAt(0).toLowerCase() + g.slice(1)}`}
                  className={`w-1/6 hover:border hover:scale-110 text-white hover:text-orange-400 transition duration-300 rounded-xl h-32 my-10 flex justify-center items-center bg-black`}
                  key={i}
                >
                  <h2 className="text-2xl font-bold">{g}</h2>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Genres;
