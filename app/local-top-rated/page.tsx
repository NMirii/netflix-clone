import LocalPart from "../components/LocalMovies"
import { TopRatedLocal } from "../lib/data-fetching"
import { Suspense } from "react"
import Loading from "../components/Loading"

const data = await TopRatedLocal()

export default function Home() {
  return <Suspense fallback={<Loading />}><LocalPart data={data} /></Suspense>
}
