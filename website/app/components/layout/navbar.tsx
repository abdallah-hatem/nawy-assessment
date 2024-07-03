import Link from "next/link"

export default function Navbar() {
  const links = [
    {
      name: "Apartments",
      href: "/",
    },
    {
      name: "Create Apartment",
      href: "/createApartment",
    },
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <div className="flex space-x-4">
            {links.map((el, index) => (
              <Link key={index} href={el.href}>
                <p className="text-gray-700 hover:text-gray-900 font-semibold">
                  {el.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
