import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/specialist";

export const getSpecialists = async (params) => {
    const response = await axios.get(`${API_URL}/filter`, { params });
    return response.data;
};
