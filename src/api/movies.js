const apiUrl = process.env.NEXT_PUBLIC_MOVIE_API_URL;
const apiKey = process.env.NEXT_PUBLIC_MOVIE_API_KEY;

export const options = {
  headers: {
    apikey: apiKey,
    Authorization: `Bearer ${apiKey}`,
  },
  next: {
    revalidate: 60,
  },
};

export const fetchMovies = async (params, revalidateTime) => {
  const response = await fetch(apiUrl + params, {
    headers: {
      apikey: apiKey,
      Authorization: `Bearer ${apiKey}`,
    },
    next: {
      revalidate: revalidateTime,
    },
  }).then((res) => res.json());

  return response;
};
