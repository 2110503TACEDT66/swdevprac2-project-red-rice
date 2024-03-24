import { FormData } from '@/components/auth/RegisterForm';

const register = async (formData: FormData) => {
    try {
        const response = await fetch(
            'https://redrice-backend-go.onrender.com/api/v1/auth/register',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Registration error:', error);
    }
};

const login = async (email: string, password: string) => {
    try {
        console.log(email, password);
        const response = await fetch(
            'https://redrice-backend-go.onrender.com/api/v1/auth/signin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            }
        );
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Login error:', error);
    }
};

export { register, login };
