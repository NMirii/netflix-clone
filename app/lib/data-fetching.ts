const TMDB_API_KEY = "8265bd1679663a7ea12ac168da84d2e8"; // Public demo key
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

import { Region } from "./Region";

export async function TopRatedLocal() {
  const region = await Region();
  console.log(region);
  //   const baseURL = process.env.NEXT_PUBLIC_API_URL
  //   const API_KEY = process.env.TMDB_API_KEY
  if (!TMDB_BASE_URL || !TMDB_API_KEY) {
    throw new Error("Error");
  }
  const url = `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&region=${region}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error");
  }
  const data = await res.json();
  return data.results;
}

export async function NowPlaying() {
  //   const baseURL = process.env.NEXT_PUBLIC_API_URL;
  //   const API_KEY = process.env.TMDB_API_KEY;
  if (!TMDB_BASE_URL || !TMDB_API_KEY) {
    throw new Error("Error");
  }
  const url = `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error");
  }
  const data = await res.json();
  return data.results;
}

export async function Popular() {
//   const baseURL = process.env.NEXT_PUBLIC_API_URL;
//   const API_KEY = process.env.TMDB_API_KEY;
  if (!TMDB_BASE_URL || !TMDB_API_KEY) {
    throw new Error("Error");
  }
  const url = `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=1`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error");
  }
  const data = await res.json();
  return data.results;
}
