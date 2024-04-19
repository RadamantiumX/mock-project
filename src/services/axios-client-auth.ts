import axios from 'axios'

const axiosClientAuth = axios.create({
    baseURL: `http://localhost:4000`
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