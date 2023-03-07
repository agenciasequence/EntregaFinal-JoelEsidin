import React, { createRef } from 'react'
import { useRef, useEffect, useState } from 'react'
import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import "../../src/index.css"
import plumaroja from "./../img/plumaroja.png"


  const NavBar = () => {

    const ref = createRef(null)

    const openNav = () => {
      ref.current.style.width = '100%'
    }

    const closeNav = () => {
      ref.current.style.width = '0%'
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
  <MenuList>
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
  <MenuList>
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
  <MenuList>
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

            </div>

      </div>
    </header>
  )
  
}


export default NavBar