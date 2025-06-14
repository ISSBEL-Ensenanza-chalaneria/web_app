import React from "react";

const posts = [
  {
    titulo: "Importancia de la chalanería en la cultura colombiana",
    resumen:
      "Exploramos cómo esta tradición ecuestre ha influido en la identidad rural del país y su reconocimiento a nivel nacional.",
    imagen:
      "https://cdn.pixabay.com/photo/2020/03/28/08/12/horse-4976067_1280.jpg",
  },
  {
    titulo: "Técnicas de adiestramiento en caballos de paso fino",
    resumen:
      "Una guía sobre las mejores prácticas para formar un binomio armónico entre jinete y equino.",
    imagen:
      "https://cdn.pixabay.com/photo/2016/07/23/00/44/horse-1536043_1280.jpg",
  },
  {
    titulo: "El rol del jinete en las exhibiciones de chalanería",
    resumen:
      "Más allá de la postura: disciplina, presencia escénica y dominio del arte ecuestre tradicional.",
    imagen:
      "https://cdn.pixabay.com/photo/2015/09/09/18/46/horse-932786_1280.jpg",
  },
];

export const Blog: React.FC = () => {
  return (
    <div className="space-y-8 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">Blog</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post, index) => (
          <article
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
          >
            <img
              src={post.imagen}
              alt={post.titulo}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {post.titulo}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {post.resumen}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
