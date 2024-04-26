import axios from 'axios'

import { environment } from '../environments/enviroment.development'
const apiUrl = environment.apiUrl
// Function to make a GET request
export const get = async (endpoint) => {
    try {
        const response = await axios.get(`${apiUrl}/${endpoint}`)
        return response
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

// Function to make a POST request
export const post = async (endpoint, data) => {
    try {
        const response = await axios.post(`${apiUrl}/${endpoint}`, data)
        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

// Function to make a PUT request
export const put = async (endpoint, data) => {
    try {
        const response = await axios.put(`${apiUrl}/${endpoint}`, data)
        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

// Function to make a DELETE request
export const del = async (endpoint) => {
    try {
        const response = await axios.delete(`${apiUrl}/${endpoint}`)
        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}
