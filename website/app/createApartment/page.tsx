import React from "react"
import CreateForm from "./components/CreateForm"

export default function CreateAppartment() {
  return (
    <div>
      {/* title */}
      <p className="text-4xl font-bold text-center my-10">Create Appartment</p>

      {/* form */}
      <CreateForm />
    </div>
  )
}
