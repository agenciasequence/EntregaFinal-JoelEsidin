import React, { createRef } from 'react'

import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import "../index.css";
import plumaroja from "./../img/plumaroja.png"


  const NavBar = () => {

    const ref = createRef(null)
    

    const openNav = () => {
      ref.current.style.width = '100%'
      document.querySelector("#categorias-menu").style.display = "block"
      document.querySelector("#comprar-menu").style.display = "block"
      document.querySelector("#info-menu").style.display = "block"
    }
    
    const closeNav = () => {
      ref.current.style.width = '0%'
      document.querySelector("#categorias-menu").style.display = "none"
      document.querySelector("#comprar-menu").style.display = "none"
      document.querySelector("#info-menu").style.display = "none"
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

      <a className="menu" href="#"><button onClick={openNav}>Menu</button></a>
      <div id="mobile-menu" ref={ref} className="overlay">
      <a onClick={closeNav} href="#" className="close">&times;</a>
          <div className="overlay-content">
          
          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorías
  </MenuButton>
  <MenuList id="categorias-menu">
    <MenuItem>Dados</MenuItem>
    <MenuItem>Miniaturas</MenuItem>
    <MenuItem>Libros de Rol</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Cómo Comprar
  </MenuButton>
  <MenuList id="comprar-menu">
    <MenuItem>Instrucciones</MenuItem>
    <MenuItem>Envíos</MenuItem>
    <MenuItem>Métodos de pago</MenuItem>
  </MenuList>
</Menu>

<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Más Info
  </MenuButton>
  <MenuList id="info-menu">
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