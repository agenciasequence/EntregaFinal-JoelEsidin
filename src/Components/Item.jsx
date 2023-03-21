import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {Menu, MenuButton, MenuItem, MenuList, Stack} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const Item = () => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador (contador + 1)
    }

    const restar = () => {
        if(contador < 1) {
            alert("no puedes ingresar valores negativos")
        }else {
        setContador (contador -1)
        }
    }

    const reset = () => {
        setContador (0)
    }


  return (
    <Stack spacing={2} direction='column' align='center'>
        <Stack spacing={4} direction='row' align='center'>
  <Button onClick={restar} colorScheme='teal' size='xs'>
    -
  </Button>
  <Button onClick={sumar} colorScheme='teal' size='xs'>
    +
  </Button>
  <Button colorScheme='teal' size='xs'>
    {contador}
  </Button>
  
  </Stack>
  <Button onClick={() => {alert("Producto agregado exitósamente")}} colorScheme='teal' size='xs'>
    Agregar al carrito
  </Button>
</Stack>
  )
}

export default Item