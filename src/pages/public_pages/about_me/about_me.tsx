"use client";

import { useEffect, useRef } from "react";
import { Server, Shield, Monitor, Users, Database, Cpu } from "lucide-react";
import Images from "../../../assets";

export default function AboutMe() {
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
      id="about-us"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <h1 className="text-4xl font-bold my-2 text-indigo-700">Nosotros</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primera sección*/}

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
              Sobre CiberSoft
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
                    Vision
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
                    Mision
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Gestión, mantenimiento, actualización, administración de
                    servidores virtuales y físicos.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
