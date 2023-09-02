import $api from 'utils/http/settings'
import { AxiosResponse } from 'axios'

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse> {
    return $api.post('/auth/login', { email, password })
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse> {
    return $api.post('/auth/registration', { email, password })
  }

  static async logout(): Promise<void> {
    return $api.post('/auth/logout')
  }

  static async refresh(): Promise<AxiosResponse> {
    return $api.get('/auth/refresh', {
      withCredentials: true,
    })
  }
}
