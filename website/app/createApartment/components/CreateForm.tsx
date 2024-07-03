"use client"

import { CREATE_APARTMENT } from "@/app/api/apartments"
import FormInput from "@/app/components/core/formItem"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    price: 0,
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target

    const newValue = name === "price" ? Number(value) : value

    setFormData({
      ...formData,
      [name]: newValue,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    CREATE_APARTMENT(formData).then((res) => res.result && router.push("/"))
  }

  const inputFields = [
    {
      label: "Name",
      id: "name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Location",
      id: "location",
      name: "location",
      type: "text",
      required: true,
    },
    {
      label: "Description",
      id: "description",
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      label: "Price",
      id: "price",
      name: "price",
      type: "number",
      required: false,
    },
  ]

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-custom rounded-lg">
      {/* title */}
      <h2 className="text-2xl font-bold mb-6">Create Apartment</h2>

      {/* form fields */}
      <form onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <FormInput
            key={field.id}
            label={field.label}
            id={field.id}
            name={field.name}
            type={field.type}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            required={field.required}
          />
        ))}

        {/* submit button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
