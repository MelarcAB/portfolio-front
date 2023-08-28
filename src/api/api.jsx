import axios from 'axios'


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const getProjects = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}projects`)
        return response.data
    } catch (err) {
        throw err
    }

}

const getPortfolio = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}portfolio`)
        console.log(response)
        return response.data
    } catch (err) {
        throw err
    }
}

const postContactForm = async (data) => {
    try {
        const response = await axios.post(`${BACKEND_URL}contact`, data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 429) {
            throw new Error('Demasiados intentos. Por favor, intenta más tarde.');
        }
        throw error;
    }

}

export { getProjects, getPortfolio, postContactForm }