import React from 'react'
import Item from './Item'
import '../index.css'


const ItemList = ({products}) => {
  return (
    <div className='itemList'>
      {products?.map((prod) => (
      <Item
      id={prod.id}
      key={prod.id}
      item={prod.item}
      description={prod.description}
      price={prod.price}
      stock={prod.stock}
      category={prod.category}
      image={prod.pictureUrl}      
      />
      ))}
    </div>
  )
}

export default ItemList