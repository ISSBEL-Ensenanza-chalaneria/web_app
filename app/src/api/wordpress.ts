import axios from "axios";

export const getPageBySlug = async (slug: string) =>{
    const response = await axios.get(`/api/wordpress/${slug}`);
    return response.data;
}

export const getPosts = async () => {
    const res = await axios.get("/api/wordpress/posts");
    return res.data;
};