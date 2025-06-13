import axios from "axios";

export const registerUser = async (
    id: number,
    idType: string,
    name: string,
    email: string,
    phones: []
) => {
    return axios.post("/api/users/", {
        id,
        idType,
        name,
        email,
        phones
    });
};