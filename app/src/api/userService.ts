import axios from "axios";

export interface Phone {
  number: string;
}

export interface RegisterUserPayload {
  idType: string;
  id: number;
  name: string;
  email: string;
  phones: Phone[];
}

const API_URL = process.env.REACT_APP_BACKEND_URL;

export async function registerUser(payload: RegisterUserPayload) {
  const response = await axios.post(`${API_URL}/api/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200) {
    throw new Error("Error en la solicitud");
  }

  return await response.data();
}
