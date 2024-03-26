import axios from 'axios';
import { register } from '../lib/auth';
import { FormData } from '../components/auth/RegisterForm';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('register', () => {
  it('successfully registers a user', async () => {

    mockedAxios.post.mockResolvedValue({
      data: { message: 'User registered successfully' },
    });

    const formData: FormData = {
      username: 'testUser',
      email: 'testPassword',
      telephone: '1234567890',
      password: 'testPassword',
      role: 'user',
    };

    const result = await register(formData);

    // Expect the Axios post method to have been called with the correct URL and formData
    expect(mockedAxios.post).toHaveBeenCalledWith(
      'https://redrice-backend-go.onrender.com/api/v1/auth/register',
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Expect the register function to return the correct data
    expect(result).toEqual({ message: 'User registered successfully' });
  });

});
