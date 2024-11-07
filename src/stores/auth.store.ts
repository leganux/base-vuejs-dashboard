import { defineStore } from 'pinia'
import axios from 'axios'
import environmentConfig from '../config/env.config'

import { useHoldOn } from '@/stores/dimmed.store'

const HoldOn = useHoldOn()

interface User {
  _id: string
  name: string
  email: string
  role: string
}

interface RegisterData {
  name: string
  email: string
  password: string
}

interface UpdateProfileData {
  name: string
  email: string
  password?: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async login(email: string, password: string) {
      try {
        this.loading = true
        this.error = null
        const response = await axios.post(
          environmentConfig.baseUrlAPI + 'auth/login',
          {
            email,
            password,
          },
        )
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', response.data.token)
        return response
      } catch (error) {
        console.error(error)
        this.error = error.response?.data?.message || 'Login failed'
        return { error: error }
      } finally {
        this.loading = false
      }
    },

    async register(data: RegisterData) {
      try {
        this.loading = true
        this.error = null
        const response = await axios.post(
          environmentConfig.baseUrlAPI + 'auth/register',
          data,
        )
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', response.data.token)
        return true
      } catch (error) {
        console.error(error)
        this.error = error.response?.data?.message || 'Registration failed'
        return false
      } finally {
        this.loading = false
      }
    },

    async updateProfile(data: UpdateProfileData) {
      try {
        this.loading = true
        this.error = null
        const response = await axios.put(
          environmentConfig.baseUrlAPI + `users/${this.user?._id}`,
          data,
        )
        this.user = response.data
        return true
      } catch (error) {
        console.error(error)
        this.error = error.response?.data?.message || 'Profile update failed'
        return false
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    },
  },

  getters: {
    isAuthenticated: state => !!state.token,
  },
})
