/* eslint-disable @next/next/no-img-element */
import React from "react"

interface Props {
  name: string
  location: string
  description: string
  price?: number
}

export default function DetailsPage({
  name,
  location,
  description,
  price,
}: Props) {
  return (
    <div className="w-[800px] mx-auto bg-white shadow-custom rounded-lg overflow-hidden my-10">
      {/* image */}
      <img
        className="w-full h-64 object-cover"
        src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt={name}
      />

      {/* detaisl */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>
        <p className="text-gray-600 text-sm mb-4">{location}</p>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="text-lg font-semibold text-indigo-600">
          ${price !== 0 ? `${price}` : " N/A"}
        </div>
      </div>
    </div>
  )
}
