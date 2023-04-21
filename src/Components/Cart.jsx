import React, { useState } from 'react'
import { Button, FormControl,
    FormLabel
     } from '@chakra-ui/react'
import {collection, getDocs, getFirestore, addDoc} from "firebase/firestore"
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { color } from 'framer-motion'


const Cart = () => {
  const [cart, setCart] = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState(null)
    
    const db = getFirestore()


    const handleSubmit = (e)=>{
        e.preventDefault()
        
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    }

    const order = {
      nombre,
      email,
      telefono,
      cart
    }

    const ordersCollection = collection(db, "orden")

    console.log(cart.map((prod) => (
      prod.name

    )))

  return (
    <div className="divForm">
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <FormLabel color="white">Ingrese su Nombre</FormLabel>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
            <FormLabel color="white">Ingrese su Email</FormLabel>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <FormLabel color="white">Ingrese su Teléfono</FormLabel>
            <input type="number" onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="buttonBox">
            <Button type='submit' size="sm" width="100%">Finalizar Compra</Button>
            </div>
        </form>
        <div>
          <h4>Su ID de compra es: {orderId}</h4>
        </div>
    </div>
  )
}

export default Cart