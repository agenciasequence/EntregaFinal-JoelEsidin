import React from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import ItemList from './ItemList'


const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])

  useEffect (()=>{
  
  const db = getFirestore()
  
  const itemsCollection= collection(db, "productos")
  getDocs(itemsCollection).then((snapshot)=>{
    setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
  
  
  
  })
  
    
  },[]) 

  console.log(products)
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