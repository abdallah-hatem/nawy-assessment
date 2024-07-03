import React from "react"

interface Props {
  label: string
  id: string
  name: string
  type: string
  value: string | number
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  required?: boolean
}

export default function FormInput({
  label,
  id,
  name,
  type,
  value,
  onChange,
  required = false,
}: Props) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value as string}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          required={required}
        />
      )}
    </div>
  )
}
