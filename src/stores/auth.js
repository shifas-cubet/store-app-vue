import { defineStore } from 'pinia';
import config from '@/config';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        status: ''
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
                this.status = 'Success';
                this.token = token;
                localStorage.setItem('token', token);
            } catch(error) {
                this.status = 'error';
                localStorage.removeItem('token');
                throw error;
            }
        }
    }
})