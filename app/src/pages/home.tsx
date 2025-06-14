import React from "react";
import { Info } from "lucide-react";

export const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-blue-100 to-indigo-200">
        <div className="px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Bienvenidos a la Chalanería Colombiana
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Tradición, elegancia y cultura en cada paso. Conoce el arte ecuestre
            que representa nuestras raíces.
          </p>
        </div>
        <img
          src="assets/images/portrait-4689365_1280.jpg"
          alt="Chalanería"
          className="absolute bottom-0 right-0 w-1/2 object-cover hidden md:block opacity-80"
        />
      </section>

      {/* ¿Qué es la chalanería? */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/04/18/38/horse-2372156_1280.jpg"
          alt="Caballo de paso"
          className="rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
            <Info size={28} /> ¿Qué es la chalanería?
          </h2>
          <p className="text-lg text-gray-700">
            La chalanería es una expresión ecuestre tradicional de Colombia, que
            destaca por la armonía entre jinete y caballo. Es un arte que
            resalta el manejo, la postura y el respeto por el caballo criollo
            colombiano, especialmente el caballo de paso fino. Además,
            representa una manifestación cultural viva, reconocida por su
            elegancia, destreza y profundo vínculo con nuestras raíces
            campesinas.
          </p>
        </div>
      </section>
    </div>
  );
};
