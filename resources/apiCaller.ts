import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * This module provides a generic function to make API calls.
 * The function is flexible and allows specifying various options 
 * such as the base URL, endpoint, HTTP method, query parameters, and data.
 * 
 * It utilizes the Axios library to perform the HTTP requests and 
 * handles errors by logging them and re-throwing for the caller to manage.
 * 
 * This design makes it easy for AI agents and other automated systems 
 * to interact with and utilize APIs by providing a simple, consistent interface.
 */

export interface ApiOptions {
    baseUrl: string;
    endpoint: string;
    method: 'get' | 'post' | 'put' | 'delete';
    params?: Record<string, any>;
    data?: Record<string, any>;
}

export const callApi = async <T>(options: ApiOptions): Promise<T> => {
    const { baseUrl, endpoint, method, params, data } = options;
    const url = `${baseUrl}${endpoint}`;

    const config: AxiosRequestConfig = {
        method,
        url,
        params,
        data,
    };

    try {
        const response: AxiosResponse<T> = await axios.request(config);
        return response.data;
    } catch (error) {
        console.error('Error making API call:', error);
        throw error;
    }
};
