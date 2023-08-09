import axios from 'axios'


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const getProjects = async () => {
    const response = await axios.get(`${BACKEND_URL}projects`)
    return response.data
}

const getPortfolio = async () => {
    try{
      const response = await axios.get(`${BACKEND_URL}portfolio`)
        console.log(response)
        return response.data
    }catch(err){
        console.log("Error en la llamada a la API")
        console.log(err.response.data)
    }
  
}

export { getProjects, getPortfolio }