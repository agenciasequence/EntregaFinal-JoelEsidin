import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import "../../src/index.css"
import plumaroja from "./../img/plumaroja.png"


  const NavBar = () => {

  return (
    <div className='header'>
      <img className='logo' src={plumaroja} alt="logo" />
      <nav className='navBar'>
      
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorías
  </MenuButton>
  <MenuList>
    <MenuItem>Dados</MenuItem>
    <MenuItem>Miniaturas</MenuItem>
    <MenuItem>Libros de Rol</MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Cómo Comprar
  </MenuButton>
  <MenuList>
    <MenuItem>Instrucciones</MenuItem>
    <MenuItem>Envíos</MenuItem>
    <MenuItem>Métodos de pago</MenuItem>
    
  </MenuList>
</Menu>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Más Info
  </MenuButton>
  <MenuList>
    <MenuItem>Preguntas Frecuentes</MenuItem>
    <MenuItem>Contacto</MenuItem>
    
  </MenuList>
</Menu>
      <CartWidget/>
      </nav>
    </div>
  )
}


export default NavBar