import { Suspense } from "react"
import RecomendedSection from "../components/PopularMovies"
import { Popular } from "../lib/data-fetching"
import Loading from "../components/Loading"

const data = await Popular()

export default function Home() {
  return <Suspense fallback={<Loading />}><RecomendedSection data={data} /></Suspense>
}
