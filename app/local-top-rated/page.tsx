import LocalPart from "../components/LocalMovies";
import { TopRatedLocal } from "../lib/data-fetching";
import { Suspense } from "react";
import Loading from "../components/Loading";

export const runtime = "edge";

export default async function Home() {
  const data = await TopRatedLocal();
  return (
    <Suspense fallback={<Loading />}>
      <LocalPart data={data} />
    </Suspense>
  );
}
