import axios from "axios"

const baseURL = import.meta.env.VITE_API_BASE_URL
if (!baseURL) {
    throw new Error('No base URL in .env file')
}

const api = axios.create({
    baseURL: baseURL
})

export default api