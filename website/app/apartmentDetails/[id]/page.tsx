import React from "react"
import DetailsPage from "./components/detailsPage"
import { GET_APARTMENT_BY_ID } from "@/app/api/apartments"

export default async function ApartmentDetails({ params }: { params: any }) {
  const id = params.id

  const apartment = await GET_APARTMENT_BY_ID(id)

  const { result } = apartment

  return <DetailsPage {...result} />
}
