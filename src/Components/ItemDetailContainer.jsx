import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { useParams } from 'react-router-dom'
import '../index.css'

const ItemDetailContainer = () => {
  
  return (
    <div> 
          <ItemDetail />  
        
    </div>
  )
}

export default ItemDetailContainer