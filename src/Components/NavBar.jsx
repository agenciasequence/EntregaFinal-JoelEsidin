import React, { createRef } from 'react'
import { useState } from 'react'

import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import { Button, IconButton} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import "../index.css";
import plumaroja from "./../img/plumaroja.png"


  const NavBar = () => {

    const ref = createRef("0%")
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const openNav = () => {
      ref.current.style.width = '100%'
      setIsMenuOpen(true);

}

const closeNav = () => {
  ref.current.style.width = '0%'
  setIsMenuOpen(false);
}


  return (
    
    <header className="header">
      <div className="logo">
        
      <img  src={plumaroja} alt="logo" />
      </div>
      <nav className='navBar'>
      
      <ul className='nav-links'>
      <li>
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorías
  </MenuButton>
  <MenuList className='menu-list'>
    <MenuItem>Dados</MenuItem>
    <MenuItem>Miniaturas</MenuItem>
    <MenuItem>Libros de Rol</MenuItem>
    
  </MenuList>
</Menu>
      </li>
      <li>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Cómo Comprar
  </MenuButton>
  <MenuList className='menu-list'>
    <MenuItem>Instrucciones</MenuItem>
    <MenuItem>Envíos</MenuItem>
    <MenuItem>Métodos de pago</MenuItem>
    
  </MenuList>
</Menu>
</li>
<li>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Más Info
  </MenuButton>
  <MenuList className='menu-list'>
    <MenuItem>Preguntas Frecuentes</MenuItem>
    <MenuItem>Contacto</MenuItem>
    
  </MenuList>
</Menu>
</li>
</ul>
</nav>

<a href="" className="btn"><button>
      <CartWidget/>
      </button>
      </a>

      <a className="menu" href="#">
      <IconButton
    icon={<HamburgerIcon />}
    variant="ghost"
    onClick={openNav}
    aria-label="Open menu"
  />
        </a>
        <div id="mobile-menu" ref={ref} className={`overlay ${isMenuOpen ? "open" : ""}`}>
  <a onClick={closeNav} href="#" className="close">&times;</a>
  <div className="overlay-content">
          
          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorías
  </MenuButton>
  <MenuList ref={ref} id="categorias-menu">
    <MenuItem>Dados</MenuItem>
    <MenuItem>Miniaturas</MenuItem>
    <MenuItem>Libros de Rol</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Cómo Comprar
  </MenuButton>
  <MenuList ref={ref} id="comprar-menu">
    <MenuItem>Instrucciones</MenuItem>
    <MenuItem>Envíos</MenuItem>
    <MenuItem>Métodos de pago</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Más Info
  </MenuButton>
  <MenuList ref={ref} id="info-menu">
    <MenuItem>Preguntas Frecuentes</MenuItem>
    <MenuItem>Contacto</MenuItem>
  </MenuList>
</Menu>

            </div>

      </div>
    </header>
  )
  
}


export default NavBar