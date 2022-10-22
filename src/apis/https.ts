import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

export const StatusCode = {
  Unauthorized: 401,
  Forbidden: 403,
  TooManyRequests: 429,
  InternalServerError: 500,
}

const injectJWToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = window.localStorage.getItem('accessToken')

    if (token !== null && config) {
      if (token?.trim() !== '') {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
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

  public baseURL: string = import.meta.env.DEV ? '' : 'https://dev.dalda.shop'
  // public baseURL: string = 'https://api.dalda.shop'

  get http(): AxiosInstance {
    return this.instance ?? this.initHttp()
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseURL,
      withCredentials: true,
      timeout: 4000,
      timeoutErrorMessage: '네트워크 상황을 확인 해주세요',
    })

    http.interceptors.request.use(injectJWToken, (error) => Promise.reject(error))

    http.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          await axios.post('/api/user-auth/refresh')
        }
        return Promise.reject(error)
      }
    )
    this.instance = http
    return http
  }
}

export const { http, baseURL } = new Http()
