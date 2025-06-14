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
  const response = await axios.post(`${API_URL}/api/users/`, payload);

  return response.data;
}
