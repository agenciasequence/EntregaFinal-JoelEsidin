import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {

const [contador, setContador] = useState(0)
const [carrito, setCarrito] = useState([])
const [registrado, setRegistrado] = useState(false)

  return (
    <div className='bodyPag'>
   <ChakraProvider>
    <NavBar />
    <ItemListContainer greeting="Bienvenido a La Pluma Roja, tienda de accesorios de Rol"/>
   </ChakraProvider> 
   </div>
  )
}
export default App
