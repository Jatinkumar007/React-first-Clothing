import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

function AmountPage({length,total}) {
    const navigate=useNavigate();
    const handleMove=()=>{
        navigate(`/address?total=${total}&length=${length}`)
     }
  return (
    length !==0 && (<Box ml={'50px'}>
    <Text mb={'25px'} ml={'20px'} fontSize={'20px'} fontWeight={'bold'}>Amount Details</Text>
    <Flex m={'20px'} gap={'200px'}><Text>Items</Text><Text>{length}</Text></Flex>
    <Flex m={'20px'} gap={'120px'}><Text>Delivery Charges</Text><Text color={'green'}>Free</Text></Flex>
    <Flex m={'20px'} gap={'165px'}><Text>Total Price</Text><Text>₹{total}</Text></Flex>
    <Button onClick={handleMove} borderRadius={'0px'} mt={'25px'} ml={'20px'} width={'290px'} background={'#ff3f6c'} color={'white'}>Place Order</Button>
    </Box>)
    
  )
}

export default AmountPage
