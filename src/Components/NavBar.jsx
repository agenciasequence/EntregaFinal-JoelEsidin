import React, { createRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import { Button, IconButton} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
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
      <div className='textLogoDiv'>
      <h1 className='textLogo'>Tienda de Rol</h1>
      <h1 className='textLogo'>La Pluma Roja</h1>
      </div>
      <div className="logo">
       <Link to="../">
      <img  src={plumaroja} alt="logo" />
      </Link>
      </div>
      <nav className='navBar'>
      
      <ul className='nav-links'>
      <li>
      <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorías
  </MenuButton>
  <MenuList className='menu-list'>
    <Link to = {`/category/${"Dados"}`}>
    <MenuItem>Dados</MenuItem>
    </Link>
    <Link to = {`/category/${"Minis"}`}>
    <MenuItem>Miniaturas</MenuItem>
    </Link>
    <Link to = {`/category/${"LibrosRol"}`}>
    <MenuItem>Libros de Rol</MenuItem>
    </Link>
    
  </MenuList>
  
</Menu>

      </li>
      <li>
      <Link to="../">
        <Button>
        Catálogo
        </Button>
        </Link>
      </li>
</ul>
</nav>

<div className="btn"><button>
      <CartWidget/>
      </button>
      </div>
      

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