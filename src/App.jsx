import { useState } from 'react'
import './index.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './Components/About'
import ProductDetail from './Components/ProductDetail'
import ProductDetailContainer from './Components/ProductDetailContainer'


const App = () => {



  return (
    <BrowserRouter>
   <ChakraProvider>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<ItemListContainer />}/>
      <Route exact path="/category/:id" element={<ItemListContainer />}/>
      <Route exact path="/item/:id" element={<ItemListContainer />}/>
    
    </Routes>
    <Footer/>
   </ChakraProvider> 
   
   </BrowserRouter>
  )
}
export default App
