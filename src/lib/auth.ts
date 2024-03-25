import axios from 'axios';
import { FormData } from '@/components/auth/RegisterForm';

const register = async (formData: FormData) => {
    try {
        const response = await axios.post(
            'https://redrice-backend-go.onrender.com/api/v1/auth/register',
            formData, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
    }
};

const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(
            'https://redrice-backend-go.onrender.com/api/v1/auth/signin',
            { email, password }, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
    }
};

const getme = async (token: string) => {
    try {
        const response = await axios.get(
            'https://redrice-backend-go.onrender.com/api/v1/me',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const { data } = response;
        return data;
    } catch (error) {
        console.error('Get all restaurant error:', error);
    }
};
const getusers = async (token: string) => {
    try {
        const response = await axios.get(
            'https://redrice-backend-go.onrender.com/api/v1/users',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const { data } = response;
        return data;
    } catch (error) {
        console.error('Get all restaurant error:', error);
    }
};

const getUserById= async (token: string,id:string) => {
    try {
        const response = await axios.get(
            `https://redrice-backend-go.onrender.com/api/v1/users/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const { data } = response;
        return data;
    } catch (error) {
        console.error('Get all restaurant error:', error);
    }
};

export { register, login,getme,getusers,getUserById};
