import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Contact.css";
import { registerUser } from "../../api/userService";

interface FormData {
  idType: string;
  id: number;
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
    id: 0,
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
      id: formData.id,
      idType: formData.idType,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phones: formData.phones
        .filter((p) => p.trim() !== "")
        .map((phone) => ({ number: phone })),
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
    <div className="contact-fullscreen">
      <div className="contact-form-wrapper">
        <h2>Contáctanos</h2>

        {responseMessage.text && (
          <p
            className={`response-message ${
              responseMessage.isError ? "error" : "success"
            }`}
          >
            {responseMessage.text}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select
              name="idType"
              value={formData.idType}
              onChange={handleChange}
              required
            >
              <option value="">Tipo de identificación</option>
              <option value="CC">Cédula</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula Extranjera</option>
              <option value="PASSPORT">Pasaporte</option>
            </select>
          </div>

          <div className="form-group">
            <input
              type="number"
              name="id"
              placeholder="Número de identificación"
              value={formData.id}
              onChange={handleChange}
              min={1}
              max={999999999999}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              minLength={3}
              maxLength={250}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {formData.phones.map((phone, index) => (
            <div className="form-group" key={index}>
              <input
                type="tel"
                placeholder="Número de teléfono"
                value={phone}
                onChange={(e) => handleChange(e, index)}
                pattern="^\\+?[0-9]{7,15}$"
                title="Ingresa un número válido"
                required
              />
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddPhone}
            className="add-phone-btn"
          >
            + Añadir teléfono
          </button>

          <button type="submit" className="submit-btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
