import LocalPart from "../components/LocalMovies"
import { TopRatedLocal } from "../lib/data-fetching"

const data = await TopRatedLocal()

export default function Home() {
  return <LocalPart data={data} />
}
