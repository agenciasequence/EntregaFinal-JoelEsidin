import React, { useContext } from 'react'
import { Stack} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { useState } from 'react'
import '../index.css'
import { CartContext } from '../Context/CartContext'
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'

const ItemCount = ({stock, id, price, name}) => {

    const [cart, setCart] = useContext(CartContext)
    const [contador, setContador] = useState(0)

    const sumar = () => {
        if(contador == stock){
          alert("Máxima cantidad disponible")
        }else{
        setContador (contador + 1)
      }
    }

    const restar = () => {
        if(contador < 1) {
            alert("no puedes ingresar valores negativos")
        }else {
        setContador (contador -1)
        }
    }

   const addCarrito = () => {
    Swal.fire({
      title: '<strong>¡Producto agregado al carrito con éxito!</strong>',
      html: 'Ve al carrito para terminar tu compra o agrega más productos',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    setCart((items) => {
      const itemFound = items.find((item) => item.id === id)
      if (itemFound) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + contador}
          } else {
            return item
          }


          })



      } else {
        return [...items, {id, cantidad: contador, price, name, total: price * contador}]
      }
       
    })
   }


  return (
    <Stack spacing={2} direction='column' align='center'>
        <Stack spacing={4} direction='row' align='center'>
  <Button onClick={restar} colorScheme='teal' size='xs'>
    -
  </Button>
  <Button>
  {contador}
  </Button>
  
  <Button onClick={sumar} colorScheme='teal' size='xs'>
    +
  </Button>
  <Button onClick={() => addCarrito()} colorScheme='teal' size='xs'>
     Agregar al carrito
  </Button>
  <h6>Stock: {stock}</h6>
  </Stack>
  
</Stack>
  )
}

export default ItemCount