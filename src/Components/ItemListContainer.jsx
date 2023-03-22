import React from 'react'
import '../index.css'


import ItemList from './ItemList'


const ItemListContainer = ({greeting}) => {


  return (
    <>
    <div className='greeting'><h2>{greeting}</h2></div>
    <ItemList/>
    </>
  )
}

export default ItemListContainer