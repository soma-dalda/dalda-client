import axios from 'axios'

const createAxiosInstance = () => {
  return axios.create({
    withCredentials: true,
  })
}

const instance = createAxiosInstance()

export default instance
