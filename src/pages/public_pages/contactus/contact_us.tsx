"use client"

import type React from "react"
import { useState } from "react"
import { Send, Check, AlertCircle } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attending: "yes",
    dietaryRestrictions: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("http://localhost:3001/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const text = await response.text()
        let error
        try {
          error = JSON.parse(text)
        } catch {
          throw new Error("Respuesta inesperada del servidor")
        }
        throw new Error(error.message || "Hubo un error al enviar tu confirmación")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "1",
        attending: "yes",
        dietaryRestrictions: "",
      })

      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Hubo un error al enviar tu confirmación")
      setTimeout(() => {
        setStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-4 text-indigo-600">
          Contactanos
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          llena este formulario para contactarte
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-display text-2xl text-indigo-700 mb-4">¡Gracias por escribirnos!</h3>
                <p className="text-gray-600">
                  Hemos recibido tu correo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                    Algo mas que quieras agregar
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Indícanos si tienes alguna restricción alimenticia o alergia"
                  ></textarea>
                </div>

                {status === "error" && (
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
