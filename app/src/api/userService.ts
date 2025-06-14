import axios from "axios";

export interface Phone {
  number: string;
}

export interface RegisterUserPayload {
  idType: string;
  id: string;
  name: string;
  email: string;
  phones: Phone[];
}

export const registerUser = async (payload: RegisterUserPayload) => {
  const response = await axios.post("/api/users", payload);
  return response.data;
};
