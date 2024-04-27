import axios from 'axios'
import { environment } from '../environments/enviroment.development'

const apiUrl = environment.apiUrl

const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
})
const serializeHeaders = (headers) => {
    return headers.toJSON()
}
export const get = async (endpoint, headers = {}) => {
    try {
        const response = await axiosInstance.get(endpoint, { headers })
        return response
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export const post = async (endpoint, data, headers = {}) => {
    try {
        const response = await axiosInstance.post(endpoint, data, { headers })
        return response
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export const put = async (endpoint, data, headers = {}) => {
    try {
        const response = await axiosInstance.put(endpoint, data, { headers })
        return response
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

export const del = async (endpoint, headers = {}) => {
    try {
        const response = await axiosInstance.delete(endpoint, { headers })
        return response
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}
