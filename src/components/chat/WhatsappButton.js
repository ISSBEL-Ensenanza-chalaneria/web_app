import React from "react";
import "./WhatsappButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const whatsappNumber = "1234567890";
  const message =
    "¡Hola! vengo desde la página 'ISS-BEL', me gustaría obtener más información.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}

export default WhatsAppButton;
