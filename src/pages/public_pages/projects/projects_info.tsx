import { Star } from "lucide-react"
import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { projects } from "../../../data/projects"

function ProjectsInfo() {
  const { id } = useParams()
  const projectId = parseInt(id || "", 10)

  const data = useMemo(() => {
    return projects.find((p) => p.id === projectId)
  }, [projectId])

  return (
    <section className="w-full bg-white min-h-screen py-12 px-4 sm:px-10">
      <div className="bg-white text-black p-8 rounded-md max-w-7xl mx-auto shadow-md border border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-gray-100 h-full flex items-center justify-center">
            {data ? (
              <>
                <img
                  src={data.image || "/placeholder.svg?height=600&width=600"}
                  alt={data.title}
                  className="w-full h-auto object-cover aspect-square lg:aspect-[4/3]"
                />
              </>
            ) : (
              <div className="text-center text-gray-500 text-xl font-semibold">
                Producto no encontrado
              </div>
            )}
          </div>

          <div className="space-y-8">
            {data && (
              <>
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-px w-8 bg-indigo-600"></div>
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Producto</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{data.title}</h1>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-6">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-indigo-600 text-indigo-600" />
                        ))}
                        <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">1624 reviews</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-600 leading-relaxed mb-6">{data.description}</p>

                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12L10 17L20 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-800">Premium</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M5 12L10 17L20 7"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-800">Disponible</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <a
                    className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 transition-colors"
                    href={data.link || "#"}
                  >
                    Visitar
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsInfo
