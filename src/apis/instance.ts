import axios from 'axios'

const createAxiosInstance = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URI,
  })
}

const instance = createAxiosInstance()

export default instance
