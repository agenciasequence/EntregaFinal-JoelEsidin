import React from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

import ItemList from './ItemList'


const ItemListContainer = ({greeting}) => {
  
  const getProducts = async () => {
      const response = await fetch('../../productos.json')
      const datos = await response.json()
      return datos
  }

  const [products, setProducts] = useState([])
  

  useEffect(() => {
      getProducts().then((products)=> setProducts(products))

  },[])
  const {category} = useParams()
  const catFilter = products.filter((product) => product.category === category)

  return (
    <>
    <div className='greeting'><h2>{greeting}</h2></div>
    {category ? <ItemList products= {catFilter} /> : <ItemList products={products}/>}
    </>
  )
}

export default ItemListContainer