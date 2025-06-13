import { useState, ChangeEvent, FormEvent } from "react";
import { registerUser } from "../api/user";
import horseImage from "../assets/images/horse-4720178_1280.jpg";
import "./Contact.css";

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

const Contact: React.FC = () => {
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
    const { name, value } = e.target;

    if (index !== null) {
      const updatedPhones = formData.phones.map((phone, i) =>
        i === index ? value : phone
      );
      setFormData({ ...formData, phones: updatedPhones });
    } else {
      setFormData({ ...formData, [name]: value });
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
    <div className="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <span className="company__logo">
              <img src={horseImage} alt="Ejemplar" className="img-fluid" />
            </span>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login_form">
            <div className="container-fluid">
              <div className="row mt-3 company_title">
                <h2>
                  Déjanos tus datos, te contactaremos lo antes posible
                </h2>
              </div>
              {responseMessage.text && (
                <div
                  className={`response-message ${
                    responseMessage.isError ? "error" : "success"
                  }`}
                >
                  {responseMessage.text}
                </div>
              )}
              <div className="row mb-3">
                <form onSubmit={handleSubmit} className="form-group">
                  <div className="form-row">
                    <select
                      name="idType"
                      className="form__input"
                      value={formData.idType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Tipo de identificación</option>
                      <option value="CC">CC</option>
                      <option value="TI">TI</option>
                      <option value="CE">CE</option>
                      <option value="PASSPORT">PASAPORTE</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <input
                      type="text"
                      name="id"
                      className="form__input"
                      placeholder="Número de identificación"
                      value={formData.id}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      className="form__input"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      className="form__input"
                      placeholder="Correo electrónico"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {formData.phones.map((phone, index) => (
                    <div className="form-row" key={index}>
                      <input
                        type="text"
                        name={`phone${index}`}
                        className="form__input"
                        placeholder="Número de teléfono"
                        value={phone}
                        onChange={(e) => handleChange(e, index)}
                        required
                      />
                    </div>
                  ))}
                  <div className="form-row">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={handleAddPhone}
                    >
                      Añadir teléfono
                    </button>
                  </div>
                  <div className="row mt-3 d-flex">
                    <span className="text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-dark btn-sm submit-btn"
                      >
                        Enviar
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
