import React from 'react'
import '../index.css'
import ItemCount from '../ItemCount'
const ItemListContainer = ({greeting}) => {
  return (
    <>
    <div className='greeting'><h2>{greeting}</h2></div>
    <ItemCount/>
    </>
  )
}

export default ItemListContainer