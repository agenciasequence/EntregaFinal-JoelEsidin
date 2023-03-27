import './index.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer'


const App = () => {
const greeting = "Bienvenido a la tienda de Rol La Pluma Roja"


  return (
    <BrowserRouter>
   <ChakraProvider className="body">
    <NavBar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer greeting={greeting} />}/>
      <Route
      
      exact path="/category/:category"
      
      element={<ItemListContainer />}
      
      />
      <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
    
    </Routes>
    
   </ChakraProvider> 
   
   </BrowserRouter>
  )
}
export default App
