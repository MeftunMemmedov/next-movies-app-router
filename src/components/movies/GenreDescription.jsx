const GenreDescription = ({ param }) => {
  return (
    <>
      <p className="mb-5">
        {(param === "action" &&
          "Welcome to the edge of your seat, because it's time to dive into the action. From classic westerns and war films to modern action hero adventures, it’s all right here on Plex.") ||
          (param === "crime" &&
            "Ever wonder what makes a comedy great? We put together a collection of the best comedies we could find so you can watch and learn from the best in the biz.") ||
          (param === "drama" &&
            "Dramatic movies often defy classification. If it isn't funny or scary then it may be a drama. While there will always be crossovers, Plex has put together the best dramatic movies and shows we could find for you to enjoy.") ||
          (param === "comedy" &&
            "Ever wonder what makes a comedy great? We put together a collection of the best comedies we could find so you can watch and learn from the best in the biz.") ||
          (param === "thriller" &&
            "The best thrillers will evoke suspense, mystery and will lead to shocking endings that leave your heart racing. Explore the dark corners of the world and discover secrets and unexpected twists that will always bring you back for more.") ||
          (param === "horror" &&
            "Check out the best horror movies and shows, complete with maniacs, slashers, ghosts, goblins, and everything in between.") ||
          (param === "sci-fi" &&
            "Sci-fi movies can take us to distant worlds and reveal fantastic futures beyond belief. Time-traveling cyborgs, dystopian futures, and more are here for you to discover. Grab some popcorn and head into adventure.")}
      </p>
    </>
  );
};

export default GenreDescription;
