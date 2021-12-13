import React, {createContext, useEffect, useState} from 'react'
import ProductsApi from './api/ProductsApi'
import UserApi from './api/UserApi'
import CategoriesApi from './api/CategoriesApi'

import axios from 'axios'


export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    
    const [token, setToken] = useState(false)

    const refreshToken = async () => {
        const res = await axios.get('/usuario/refresh_token')
        setToken(res.data.accessToken)
        // console.log(token)
    }

    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin)  refreshToken()        
    }, [])

    const state = {
        token: [token, setToken],
        productsApi: ProductsApi(),
        userApi: UserApi(token),
        categoriesApi: CategoriesApi()
    }

    return (
        <GlobalState.Provider value={ state }>
            {children}
        </GlobalState.Provider>
            
    )
}
