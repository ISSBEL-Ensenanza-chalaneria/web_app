import React, { useState } from "react";
import importanciaChalaneria from "../../assets/images/importancia_chalaneria.png";
import adiestramientoCaballos from "../../assets/images/caballos_juguetones.jpg";
import rolJinetes from "../../assets/images/7486444.jpg";
import "./blog.css";

const posts = [
  {
    titulo: "Importancia de la chalanería en la cultura colombiana",
    resumen:
      "Exploramos cómo esta tradición ecuestre ha influido en la identidad rural del país y su reconocimiento a nivel nacional.",
    imagen: importanciaChalaneria,
  },
  {
    titulo: "Técnicas de adiestramiento en caballos de paso fino",
    resumen:
      "Una guía sobre las mejores prácticas para formar un binomio armónico entre jinete y equino.",
    imagen: adiestramientoCaballos,
  },
  {
    titulo: "El rol del jinete en las exhibiciones de chalanería",
    resumen:
      "Más allá de la postura: disciplina, presencia escénica y dominio del arte ecuestre tradicional.",
    imagen: rolJinetes,
  },
];

export const Blog: React.FC = () => {
  const [postActivo, setPostActivo] = useState<null | (typeof posts)[0]>(null);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Nuestro Blog</h1>
      <div className="blog-list">
        {posts.map((post, index) => (
          <article
            key={index}
            className="blog-card"
            onClick={() => setPostActivo(post)}
          >
            <div className="card-image">
              <img src={post.imagen} alt={post.titulo} />
            </div>
            <div className="card-text">
              <h2>{post.titulo}</h2>
              <p>{post.resumen}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {postActivo && (
        <div className="modal-overlay" onClick={() => setPostActivo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setPostActivo(null)}>
              ✕
            </button>
            <img src={postActivo.imagen} alt={postActivo.titulo} />
            <h2>{postActivo.titulo}</h2>
            <p>{postActivo.resumen}</p>
          </div>
        </div>
      )}
    </div>
  );
};
