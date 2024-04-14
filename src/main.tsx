import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contexts/ContextProvider.tsx'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
// import { client } from './gqlClient/client.ts'
// import { ApolloProvider } from '@apollo/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <CookiesProvider>
      <Provider store={store}>
          <ContextProvider>
             <RouterProvider router={router}/>
          </ContextProvider>
      </Provider>
    </CookiesProvider>
  ,
)
