import { GET_APARTMENTS } from "../api/apartments"
import AppartmentCard from "./components/appartmentCard"

export default async function HomePage() {
  const appartments = await GET_APARTMENTS()

  const { result } = appartments

  return (
    <main className="p-10">
      {/* title */}
      <p className="text-4xl font-bold text-center my-10">Appartments</p>

      {/* appartments section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {result?.map((el, index) => (
          <AppartmentCard key={index} {...el} />
        ))}
      </div>
    </main>
  )
}
