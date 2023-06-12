import { defineStore } from 'pinia';
import config from '@/config';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        apiResponseStatus: '',
        apiResponseMessage: ''
    }),
    getters: {
        isAuthenticated: (state) => !!state.token
    },
    actions: {
        async login(email, password) {
            this.status = 'loading';
            try {
                const response = await axios.post(`${config.apiBaseURL}/login`, {email, password})
                const token = response.data.data.token;
                this.apiResponseStatus = true;
                this.apiResponseMessage = response.data.message;
                this.token = token;
                localStorage.setItem('token', token);
            } catch(error) {
                this.apiResponseStatus = false;
                this.apiResponseMessage = error?.response?.data?.message;
                localStorage.removeItem('token');
                throw error;
            }
        }
    }
})