import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { Card, CardHeader, CardBody, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Image, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import '../index.css'



const ItemDetail = () => {
  const {id} = useParams()
  
  const [product, setProduct] = useState({
    id: "",
    pictureUrl: "",
    Item: "",
    description: "",
    price: "",
    stock: ""


})

  useEffect(()=>{

const db = getFirestore()

const oneItem = doc(db, "productos", id)

getDoc(oneItem).then((snapshot)=>{
if (snapshot.exists()){
setProduct({id: snapshot.id, ...snapshot.data()})

}


})



  },[id])
   
  return (
    <>
    
    <div className='itemDetail' key={product.id}>
      <ChakraProvider>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={product.pictureUrl}
      
      borderRadius='lg'
      boxSize='xs'
    />
    <Stack mt='6' spacing='1'>
      <Heading size='xs'>{product.item}</Heading>
      <Text>
        {product.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <ItemCount stock={product.stock} id={product.id} price={product.price} name={product.item}/>
    </ButtonGroup>
  </CardFooter>
</Card>

</ChakraProvider>
    </div>
    
    </>
  )
}

export default ItemDetail