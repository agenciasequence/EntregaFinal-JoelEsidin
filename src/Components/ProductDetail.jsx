import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Image, Text } from '@chakra-ui/react'

const ProductDetail = ({title, price, description, image}) => {
    
  return (
    <div className='card'>
      <ChakraProvider>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      boxSize='xs'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <ItemCount/>
    </ButtonGroup>
  </CardFooter>
</Card>

</ChakraProvider>
    </div>
  )
}

export default ProductDetail