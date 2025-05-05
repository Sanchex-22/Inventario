"use client";

import { useEffect, useRef } from "react";
import { Server, Shield, Monitor, Users, Database, Cpu } from "lucide-react";
import Images from "../../../assets";

export default function Services() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      className="bg-white py-12 md:py-12 text-gray-800 scroll-mt-16"
      id="services"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-700">
          Nuestros Servicios
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primera sección con imagen */}
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className="grid md:grid-cols-2 gap-12 items-center opacity-0 translate-y-4 transition-all duration-700 ease-out"
        >
          <div className="relative order-2 md:order-1 w-full max-w-sm mx-auto md:mx-0">
            <div className="relative w-full aspect-square">
              <div className="absolute -right-2 -top-2 h-full w-full rounded-2xl border-2 border-indigo-200"></div>
              <div className="absolute -left-2 -bottom-2 h-full w-full rounded-2xl border-2 border-indigo-200"></div>
              <div className="absolute bottom-0 right-0 h-20 w-20 rounded-tl-3xl bg-indigo-600/80 backdrop-blur-sm"></div>
              <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-gray-300 shadow-lg shadow-indigo-100">
                <img
                  src={Images.serviceImage || "#"}
                  alt="Servicios Administrados de Soporte"
                  className="h-full w-full object-cover transition-transform duration-500"
                  itemProp="image"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="h-1 w-24 bg-indigo-600 mb-8 rounded-full"></div>
            <h3
              className="text-2xl font-bold mb-6 text-indigo-700"
              itemProp="description"
            >
              Servicios Administrados de Soporte
            </h3>
            <div className="text-gray-700 mb-8 space-y-6">
              <p className="leading-relaxed">
                Ofrecemos servicios de soporte de primer y segundo nivel, en
                sitio, especializado, soporte bajo demanda, monitoreo y gestión
                proactiva; para la implementación, operación, gestión y soporte
                de los servicios de tecnologías de la información y
                comunicaciones TIC.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Server className="h-6 w-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Conectividad:</strong>{" "}
                    Servicios Ingeniería de Red, Servicios Media e IPTV,
                    Servicios de Homologación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="h-6 w-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Infraestructura:</strong>{" "}
                    Entorno colaborativo, Bases de Datos, Middleware, Servicios
                    de RED, Servidores, almacenamiento y back-up.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Monitor className="h-6 w-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong className="text-gray-900">Ofimática:</strong>{" "}
                    Gestión integral del puesto de trabajo, Planificación del
                    acopio, Planes de implantación, Gestión del inventario,
                    Gestión del cambio, Servicio posventa, garantía, asistencia
                    técnica y reutilización.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Segunda sección */}
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className="mt-20 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="max-w-7xl mx-auto">
            <div className="h-1 w-24 bg-indigo-600 mb-6 rounded-full"></div>
            <h3
              className="text-2xl font-bold mb-6 text-indigo-700"
              itemProp="name"
            >
              Servicios Profesionales y Especializados
            </h3>
            <div className="text-gray-700 space-y-6">
              <p className="leading-relaxed" itemProp="description">
                Ofrecemos servicios profesionales y especializados para soporte
                técnico en áreas como Networking, Seguridad Informática,
                sistemas operativos, administración de bases de datos,
                servidores, firewall entre otros.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-colors duration-300 shadow-sm">
                  <Users className="h-8 w-8 text-indigo-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Personal residente
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Profesionales y especialistas residentes en cliente para
                    brindar soporte técnico avanzado a las diferentes
                    soluciones.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-colors duration-300 shadow-sm">
                  <Server className="h-8 w-8 text-indigo-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Administración de servidores
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Gestión, mantenimiento, actualización, administración de
                    servidores virtuales y físicos.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-colors duration-300 shadow-sm">
                  <Shield className="h-8 w-8 text-indigo-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Administración de seguridad
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Gestión y administración en equipos y herramientas de
                    seguridad, FW, Kaspersky entre otros.
                  </p>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 hover:border-indigo-300 transition-colors duration-300 shadow-sm">
                  <Cpu className="h-8 w-8 text-indigo-600 mb-4" />
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    Administración directorio activo y Networking
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Gestión, administración y monitoreo del directorio activo y
                    la infraestructura Networking de una operación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tercera sección */}
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className="mt-20 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="max-w-7xl mx-auto">
            <div className="h-1 w-24 bg-indigo-600 mb-6 rounded-full"></div>
            <h3
              className="text-2xl font-bold mb-6 text-indigo-700"
              itemProp="name"
            >
              Servicios Mesa de ayuda
            </h3>
            <p
              className="text-gray-700 mb-8 leading-relaxed"
              itemProp="description"
            >
              Contamos con la capacidad para brindar un servicio de mesa de
              ayuda con un equipo dedicado a brindar asistencia a los usuarios
              en primer y segundo nivel, así como en servicios especializados de
              soporte técnico, mejorando la experiencia al usuario final.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 hover:shadow-md hover:shadow-indigo-100 transition-all duration-300">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-indigo-700">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  Primer nivel técnico
                </h4>
                <p className="text-gray-700 text-sm">
                  Realizamos descartes de primer nivel técnico, generando y
                  haciendo seguimiento a incidentes y requerimientos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 hover:shadow-md hover:shadow-indigo-100 transition-all duration-300">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-indigo-700">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  Segundo nivel técnico
                </h4>
                <p className="text-gray-700 text-sm">
                  Capacidad de resolver y escalar fallas con las áreas
                  correspondientes para dar una solución en el menor tiempo
                  posible.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 hover:shadow-md hover:shadow-indigo-100 transition-all duration-300">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-indigo-700">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  Monitoreo 7x24
                </h4>
                <p className="text-gray-700 text-sm">
                  Identificación de alarmas de manera proactiva por un monitoreo
                  constante de las herramientas dispuestas en cada cliente.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 hover:shadow-md hover:shadow-indigo-100 transition-all duration-300">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-indigo-700">4</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  Coordinación Mesa
                </h4>
                <p className="text-gray-700 text-sm">
                  Generación de planes de acción, seguimiento, control y
                  documentación a la operación y sus indicadores.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border border-indigo-100 hover:shadow-md hover:shadow-indigo-100 transition-all duration-300">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-indigo-700">5</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">
                  Auditorías de calidad
                </h4>
                <p className="text-gray-700 text-sm">
                  Gestión de calidad auditando llamadas, correos y casos de la
                  herramienta propia o asignada en la solución.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
