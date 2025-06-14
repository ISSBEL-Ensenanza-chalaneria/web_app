import React from "react";
import { BadgeCheck, School, Users } from "lucide-react";

const servicios = [
  {
    titulo: "Eventos y Exhibiciones",
    descripcion:
      "Organización de presentaciones de chalanería en ferias, eventos culturales y celebraciones locales.",
    icono: <BadgeCheck size={32} className="text-indigo-600" />,
  },
  {
    titulo: "Formación y Talleres",
    descripcion:
      "Capacitación en técnicas de monta, postura del jinete y cuidado del caballo criollo colombiano.",
    icono: <School size={32} className="text-indigo-600" />,
  },
  {
    titulo: "Club de Chalanería",
    descripcion:
      "Espacios de práctica y comunidad para jóvenes apasionados por la tradición ecuestre colombiana.",
    icono: <Users size={32} className="text-indigo-600" />,
  },
];

export const Servicios: React.FC = () => {
  return (
    <div className="grid gap-12 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Nuestros Servicios
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((servicio, i) => (
          <div
            key={i}
            className="rounded-xl border p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{servicio.icono}</div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {servicio.titulo}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
