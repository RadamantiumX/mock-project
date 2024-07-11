import axios from 'axios'

// Vercel URL: `https://scraping-server.vercel.app`

const axiosClientAuth = axios.create({
    baseURL: import.meta.env.VITE_API_AUTH_URL
})

axiosClientAuth.interceptors.request.use((config)=>{
    const token = localStorage.getItem('auth-token')
    config.headers.Authorization = `Bearer ${token}`

    return config
})

axiosClientAuth.interceptors.response.use((response)=>{
    return response
},(error)=>{
        try{
            const {response} = error
            if(response.status === 401){
                localStorage.removeItem('auth-token')
            }
        }catch(e){
            console.log(e)
        }

        throw error
})

export default axiosClientAuth