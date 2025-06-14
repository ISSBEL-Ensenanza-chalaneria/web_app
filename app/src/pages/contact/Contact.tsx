import React, { useState, ChangeEvent, FormEvent } from "react";
import { registerUser } from "../../api/userService";

interface FormData {
  idType: string;
  id: string;
  name: string;
  email: string;
  phones: string[];
}

interface ResponseMessage {
  text: string;
  isError: boolean;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    idType: "",
    id: "",
    name: "",
    email: "",
    phones: [""],
  });

  const [responseMessage, setResponseMessage] = useState<ResponseMessage>({
    text: "",
    isError: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number | null = null
  ) => {
    if (index !== null) {
      const updatedPhones = formData.phones.map((phone, i) =>
        i === index ? e.target.value : phone
      );
      setFormData({ ...formData, phones: updatedPhones });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleAddPhone = () => {
    setFormData({ ...formData, phones: [...formData.phones, ""] });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      idType: formData.idType,
      id: formData.id,
      name: formData.name,
      email: formData.email,
      phones: formData.phones.map((phone) => ({ number: phone })),
    };

    try {
      const response = await registerUser(payload);
      setResponseMessage({
        text: response.message || "¡Registro exitoso!",
        isError: false,
      });
    } catch (error) {
      console.error("Error en el registro:", error);
      setResponseMessage({
        text: "Error en el registro. Intenta de nuevo.",
        isError: true,
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 py-8 items-center">
      <img
        src={
          "https://cdn.pixabay.com/photo/2018/05/02/20/54/horse-3367014_1280.jpg"
        }
        alt="Chalanería"
        className="rounded-xl shadow-lg"
      />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Déjanos tus datos, te contactaremos lo antes posible
        </h2>

        {responseMessage.text && (
          <p
            className={`text-sm font-medium px-4 py-2 rounded-md ${
              responseMessage.isError
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {responseMessage.text}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="idType"
            className="w-full border rounded px-4 py-2"
            value={formData.idType}
            onChange={handleChange}
            required
          >
            <option value="">Tipo de identificación</option>
            <option value="CC">CC</option>
            <option value="TI">TI</option>
            <option value="CE">CE</option>
            <option value="PASSPORT">PASSPORT</option>
          </select>

          <input
            type="text"
            name="id"
            placeholder="Número de identificación"
            className="w-full border rounded px-4 py-2"
            value={formData.id}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            className="w-full border rounded px-4 py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full border rounded px-4 py-2"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {formData.phones.map((phone, index) => (
            <input
              key={index}
              type="text"
              placeholder="Número de teléfono"
              className="w-full border rounded px-4 py-2"
              value={phone}
              onChange={(e) => handleChange(e, index)}
              required
            />
          ))}

          <button
            type="button"
            onClick={handleAddPhone}
            className="text-blue-600 hover:underline text-sm"
          >
            + Añadir teléfono
          </button>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
