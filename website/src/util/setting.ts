
const settings = {
    apiUrl: process.env.NODE_ENV === 'production' ? process.env.PROD_API_URL : "http://127.0.0.1:3001",
}

export default settings;