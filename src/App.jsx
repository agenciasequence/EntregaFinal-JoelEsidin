import './index.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './Components/ItemDetailContainer'
import Cart from './Components/Cart'
import { CartContextProvider } from './Context/CartContext'
import ItemCount from './Components/ItemCount'
import CartWidget from './Components/CartWidget'
import React from 'react'
import 'sweetalert2/dist/sweetalert2.min.css'


const App = () => {
const greeting = "Bienvenido a la tienda de Rol La Pluma Roja"


  return (
    <BrowserRouter>
   <ChakraProvider className="body">
   <CartContextProvider>
    <NavBar />
    
    <Routes>
      <Route exact path="/" element={<ItemListContainer greeting={greeting} />}/>
      <Route
      
      exact path="/category/:category"
      
      element={<ItemListContainer />}
      
      />
      <Route exact path="/item/:id" element={<ItemDetail />}/>
      <Route exact path="/Cart" element={<Cart />}/>

      <React.Fragment>
      
        
      
      </React.Fragment>

    </Routes>
    </CartContextProvider>
   </ChakraProvider> 
   
   </BrowserRouter>
   
  )
}
export default App
