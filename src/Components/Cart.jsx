import React, { useState } from 'react'
import { Button, FormControl,
    FormLabel
     } from '@chakra-ui/react'
import {collection, getDocs, getFirestore, addDoc} from "firebase/firestore"
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  
  const totales = cart.map((ord) => ord.total)

  const suma = totales.reduce((total,num) => total + num, 0)
  
  const vaciarCarrito = () => {
    setCart([])
  }
  
  

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState(null)
    
    const db = getFirestore()


    const handleSubmit = (e)=>{
        e.preventDefault()
        
        addDoc(ordersCollection, order)
        .then(({id}) => {
          
        setOrderId(id)
                
        Swal.fire({
          title: '<strong>¡Compra finalizada!</strong>',
          text: `Su número de compra es: ${id}`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
    }

    const order = {
      nombre,
      email,
      telefono,
      cart
    }

    const ordersCollection = collection(db, "orden")

    console.log(cart)

  return (
    <div className="divForm">
      {cart.length == 0 ? (<h2>Su carrito está vacío</h2>):
      (
        <div className='divTernario'>
        <form onSubmit={handleSubmit} className='form'>
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
        <div className='inputContainer2'>
          <h4>Su orden es la siguiente:</h4>
          {cart.map((ord, index) => <h4 key={index}>{ord.cantidad}x{ord.name}: ${ord.total}</h4>)}
          
          <h4>Total compra: ${suma}</h4>
          

          <h4>Su ID de compra es: {orderId}</h4>
        </div>
        <div className="inputContainer2">
        <Button onClick={vaciarCarrito}>
          Vaciar Carrito
        </Button>
        </div>
        </div>
)  
}
    </div>
  )
}

export default Cart