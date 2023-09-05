import { Box,Button,Flex,Image,Text } from '@chakra-ui/react'
import React,{useEffect, useState} from 'react'

function WishlistCard({image,title,description,price,category,type,id,handleDelete,wisData,setTotal}) {
    const [quantity,setQuantity]=useState(1);
   
  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((val) => val + 1)
      setTotal((val)=> val+price)                          // price will increase
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((val) => val - 1)
      setTotal((val)=> val-price)                          // price will decrease
    }
  };

  useEffect(() => {
    const updatedTotal = wisData.reduce((total, item) => {            // way to get total price of wishlist items
      if (item.id === id) {
        return total + item.price * quantity;
      } else {
        return total + item.price;
      }
    }, 0);

    setTotal(updatedTotal);
  }, [ wisData, id, setTotal]);

  return (
    <Flex gap={'15px'} p={'20px 40px'} mb={'20px'} ml={'180px'} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'}>
      <Box><Image src={image} width={'150px'} alt='error' /></Box>
      <Box>
        <Text fontSize={'14px'} fontWeight={'bolder'}>{title}</Text>
        <Text fontSize={'14px'}>{description}</Text>
        <Text fontSize={'14px'} fontWeight={'bolder'}>₹{price}</Text>
        <Flex mt={'10px'}>
            <Box><Text mt={'8px'}>Qunatity :- </Text></Box>
            <Flex>
            <Button onClick={handleIncrement} isDisabled={quantity>=10}>Inc</Button>
            <Button disabled>{quantity}</Button>
            <Button onClick={handleDecrement} isDisabled={quantity<=1}>Dec</Button>
        </Flex>
        </Flex>
        <Button onClick={()=>handleDelete(id)} background={'#ff3f6c'} width={'300px'} height={'35px'} mt={'20px'} color={'white'}>REMOVE</Button>
      </Box>
    </Flex>
  )
}

export default WishlistCard
