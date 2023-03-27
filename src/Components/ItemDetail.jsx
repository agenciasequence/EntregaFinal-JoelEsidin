import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Image, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const ItemDetail = ({products}) => {
  const {id} = useParams()
  console.log(id);

  const [producto, setProducto] = useState([])

  const prodFilter = products.filter((prod) => prod.id == id)
    
  return (
    <>
    {prodFilter.map((prod) => (
    <div key={prod.id}>
      <ChakraProvider>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={prod.pictureUrl}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      boxSize='xs'
    />
    <Stack mt='6' spacing='1'>
      <Heading size='xs'>{prod.Item}</Heading>
      <Text>
        {prod.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {prod.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <ItemCount stock={prod.stock}/>
    </ButtonGroup>
  </CardFooter>
</Card>

</ChakraProvider>
    </div>
    ))}
    </>
  )
}

export default ItemDetail