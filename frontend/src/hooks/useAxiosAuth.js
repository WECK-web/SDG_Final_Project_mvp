import { useEffect } from 'react';
import api from '../api/axios'; // Assuming this is your base, unconfigured Axios instance
import { useAuth } from '@clerk/clerk-react';

/**
 * Custom hook to configure the Axios instance with Clerk authorization.
 * It ensures every API request includes the current user's session token.
 */
const useAxiosAuth = () => {
    const { getToken } = useAuth(); 

    useEffect(() => {
        const requestInterceptor = api.interceptors.request.use(
            async (config) => {
                // Set the correct base URL for the backend
                config.baseURL = 'http://localhost:5000/api'; 
                
                // Get the Clerk session token
                const token = await getToken();

                // Attach the token as a Bearer token in the Authorization header
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Cleanup: remove the interceptor when the component unmounts
        return () => {
            api.interceptors.request.eject(requestInterceptor);
        };
    }, [getToken]);

    return api;
};

export default useAxiosAuth;