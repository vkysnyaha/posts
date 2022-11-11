import axios from 'axios'

const api = axios.create({
    baseURL:'https://conduit.productionready.io/api/',
    headers: {
        'Content-type': 'application/json'
    }
})

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers = {
            'authorization': `Bearer ${token}`
        }
    }
    return config
  })
  

export default api