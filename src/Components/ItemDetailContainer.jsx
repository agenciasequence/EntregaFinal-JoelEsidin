import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    
    const getProducts = async () => {
        const response = await fetch('../../productos.json')
        const datos = await response.json()
        return datos
    }

    const [products, setProducts] = useState([])
    

    useEffect(() => {
        getProducts().then((prod)=> setProducts(prod))

    },[])

    

  return (
    <div> 
          <ItemDetail products={products}/>  
        
    </div>
  )
}

export default ItemDetailContainer