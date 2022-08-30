import { getCookie } from '@/utils'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const StatusCode = {
  Unauthorized: 401,
  Forbidden: 403,
  TooManyRequests: 429,
  InternalServerError: 500,
}

const injectJWToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = getCookie('access-token')

    if (token != null && config) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }

    return config
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error
    }
  }
  throw new Error('Error from not Axios')
}

class Http {
  private instance: AxiosInstance | null = null

  get http(): AxiosInstance {
    return this.instance ?? this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      // baseURL: 'https://api.dalda.shop',
      withCredentials: true,
    })

    http.interceptors.request.use(injectJWToken, (error) => Promise.reject(error))

    // http.interceptors.response.use(
    //   (response) => response,
    //   (error) => error
    // )

    this.instance = http
    return http
  }
}

export const { http } = new Http()
