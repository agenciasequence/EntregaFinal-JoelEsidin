import React from 'react'
import '../index.css'

import Data from '../../productos.json'
import ItemList from './ItemList'


const ItemListContainer = ({greeting}) => {
const getData = () => {
  return new Promise ((resolve,reject)=>{
    if(Data.length === 0){
      reject(new Error ("no hay datos"))
    }
  
  setTimeout(()=>{
    resolve (Data)
  },2000)
})
 
}


async function fetchingData(){
  try{
    const dataFetched = await getData()
    console.log(dataFetched)
  }catch(err){
    console.log(err)
  }
}
fetchingData()

  return (
    <>
    <div className='greeting'><h2>{greeting}</h2></div>
    <ItemList/>
    </>
  )
}

export default ItemListContainer