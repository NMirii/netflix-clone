import { NowPlaying } from "../lib/data-fetching";
import { MovieArray } from "../types/types";
import { Suspense } from "react";
import Loading from "./Loading";
import dynamic from "next/dynamic";

const DynamicCard = dynamic(() => import("./Card"), {
  loading: () => <div className="w-full h-64 bg-gray-800 animate-pulse rounded-lg" />, 
  ssr: true,
});

async function MovieList() {
  const data: MovieArray = await NowPlaying();
  
  return (
    <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
      {data.map((movie) => (
        <DynamicCard
          key={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          vote_average={movie.vote_average}
        />
      ))}
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <MovieList />
    </Suspense>
  );
}