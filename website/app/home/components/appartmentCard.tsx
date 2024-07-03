/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

interface Props {
  id: number
  name: string
  location: string
  description: string
  price?: number
}

export default function AppartmentCard({
  id,
  name,
  location,
  description,
  price,
}: Props) {
  return (
    <div className="w-[450px] mx-auto bg-white shadow-custom rounded-lg hover:cursor-pointer">
      <Link href={`/apartmentDetails/${id}`}>
        {/* top section */}
        <div className="relative">
          {/* image */}
          <img
            src={
              "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="pic"
            className="w-full max-h-1/2 object-cover"
          />

          {/* price pill */}
          <div className="absolute bottom-0 right-0 m-4">
            <span className="bg-gray-800 text-white text-xs font-bold rounded-full px-3 py-2 leading-none flex items-center">
              {price ? `$${price}` : "N/A"}
            </span>
          </div>
        </div>

        {/* bot section */}
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-xl">{name}</h1>
          <p className="text-gray-600 text-sm">{location}</p>
          <p className="mt-2 text-gray-600 text-sm truncate">
            {description}
          </p>
        </div>
      </Link>
    </div>
  )
}
