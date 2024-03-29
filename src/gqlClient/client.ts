import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const getAuth = () => {
    const token:any= localStorage.getItem('vanilla-leaks-token')
    return token ? `bearer ${token}` : null
}

export const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
        headers: {
            authorization: getAuth()
        },
        uri: 'http://localhost:4000'
    })
})