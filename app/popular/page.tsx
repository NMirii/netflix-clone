import { Suspense } from "react";
import RecomendedSection from "../components/PopularMovies";
import { Popular } from "../lib/data-fetching";
import Loading from "../components/Loading";

export const runtime = "edge";

export default async function Home() {
  const data = await Popular();
  return (
    <Suspense fallback={<Loading />}>
      <RecomendedSection data={data} />
    </Suspense>
  );
}
