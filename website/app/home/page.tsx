"use client"
import { useEffect, useState } from "react"
import { GET_APARTMENTS } from "../api/apartments"
import AppartmentCard from "./components/appartmentCard"
import { Appartment } from "../interface"

export default function HomePage() {
  // const appartments = await GET_APARTMENTS()

  // const { result } = appartments

  const [data, setData] = useState<Appartment[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    GET_APARTMENTS()
      .then((res) => setData(res.result))
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <main className="p-10">
      {/* title */}
      <p className="text-4xl font-bold text-center my-10">Appartments</p>

      {/* appartments section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((el, index) => (
          <AppartmentCard key={index} {...el} />
        ))}
      </div>
    </main>
  ) : (
    <div>loading</div>
  )
}
