import RecomendedSection from "../components/PopularMovies"
import { Popular } from "../lib/data-fetching"

const data = await Popular()

export default function Home() {
  return <RecomendedSection data={data} />
}
