import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {Card, Stack, CardBody, Heading, Divider, CardFooter, ButtonGroup,Button} from "@chakra-ui/react"
import { Image, Text, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../index.css'


const Item = ({id,item, price, description, image, stock, category}) => {
    

   


  return (
   <>
    <div className='card' key={id}>
      <ChakraProvider>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      boxSize='xs'
    />
    <Stack mt='6' spacing='1'>
      <Heading size='xs'>{item}</Heading>
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
      <Button>
      <Link to={`/item/${id}`}>
      Detalles
      </Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

</ChakraProvider>
    </div>
   </>
  )
}

export default Item