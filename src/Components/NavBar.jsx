import React from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


const NavBar = () => {
  return (
    <div>
      <h3>La Pluma Roja</h3>

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
      <CartWidget/>
    </div>
  )
}

export default NavBar