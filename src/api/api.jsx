import axios from 'axios'


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const getProjects = async () => {
    const response = await axios.get(`${BACKEND_URL}projects`)
    return response.data
}

const getPortfolio = async () => {
    const response = await axios.get(`${BACKEND_URL}portfolio`)
    return response.data
}

export { getProjects, getPortfolio }