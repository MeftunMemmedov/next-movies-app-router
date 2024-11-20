// import HeroVid from "@/components/movies/HeroVid";
import { fetchMovies } from "@/api/movies";
import HeroSlideShow from "@/components/movies/HeroSlideShow";
import MovieCarousel from "@/components/movies/MovieCarousel";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";

export const metadata = {
  title: "Movies | Home",
  description: "",
  keywords: "",
  author: "",
};

export default async function Home() {
  const data = await fetchMovies("/Movies?select=*",80);
  return (
    <>
      <main className="">
      <ScrollToTop />
        <section className="">
          <div className="md:h-auto h-[600px] relative flex justify-end items-center mb-12">
            <div className="w-full h-full absolute z-40 home-box-1">
              <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center items-center h-full ">
                <div className="w-4/5 md:mr-8 text-center lg:text-start md:text-start">
                  <h2 className="font-bold  text-4xl mb-8">
                    Go ahead, stream free
                  </h2>
                  <p className=" mb-12">
                    With Plex you can watch over 20,000 free movies and shows,
                    plus Live TV on almost any device. What are you waiting for?
                  </p>
                  <Link
                    href={"/movies"}
                    className=" py-3 px-10 rounded-3xl bg-amber-500 text-black font-bold"
                  >
                    Go and Watch Movies
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 md:w-3/4 md:block relative hidden h-[500px] flex justify-center">
              <div className="w-full h-full box absolute z-30"></div>
              {/* <HeroVid /> */}
              <HeroSlideShow />
            </div>
          </div>
        </section>

        <section className="">
          <div className="container m-auto">
            <h2 className="ml-5 text-3xl font-bold text-orange-400">
              Top Movies
            </h2>
            <MovieCarousel movies={data.filter((mov) => mov.rating > 7)} />
          </div>
        </section>
        <section className="">
          <div className="container m-auto my-5">
            <h2 className="ml-5 text-3xl font-bold text-orange-400">
              Crime Time
            </h2>
            <MovieCarousel
              movies={data.filter((mov) => mov.genre.includes("Crime"))}
            />
          </div>
        </section>
      </main>
    </>
  );
}
