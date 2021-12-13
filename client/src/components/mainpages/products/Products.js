import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'

export const Products = () => {
    const state = useContext(GlobalState)
    const [products] = state.productsApi.products
    return (
        <>
        <h1> Productos </h1>
        <div className="products">
            {
                products.map( product => {
                    return <ProductItem key={product._id} product={product}/>
                })
            }
            
        </div>
        {/* {products.length === 0 && <Loading />} */}
        </>
    )
}
