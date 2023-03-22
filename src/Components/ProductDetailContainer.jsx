import React, { useEffect, useState } from 'react'
import Data from '../../productos.json'
import ProductDetail from './ProductDetail'

const ProductDetailContainer = () => {
    const getProducts = async () => {
        const response = await fetch('../../productos.json')
        const datos = await response.json()
        return datos
    }

    const [product, setProduct] = useState([])
    

    useEffect(() => {
        getProducts().then((product)=> setProduct(product))

    },[])

  return (
    <div className='divProductDetail'> 
        {product.map((prod)=> {
            return (
                
            <ProductDetail key={prod.id} title={prod.item} price={prod.price} description={prod.description} image={prod.pictureUrl}    />


            )
        })
        
        }
    </div>
  )
}

export default ProductDetailContainer