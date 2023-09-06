import axios from 'axios'
import React,{useState,useContext, useEffect} from 'react'
import { ContextApi } from '../login/FirstContextApi'
import Navbar from '../navbar/Navbar';
import { Flex, Box } from '@chakra-ui/react';
import WishlistCard from './WishlistCard';

import AmountPage from './AmountPage';

function Wishlist() {
    const {value}=useContext(ContextApi);              // context api
    const [wisData,setWisData]=useState([]);           // updated wishlist data like after deleting
    const [total,setTotal]=useState(0);                // total price
  
    const dataFetch=()=>{
        axios
        .get(`https://mock-server-r0tm.onrender.com/userData?mobilenumber=${value.mobilenumber}`)
        .then((res)=>{setWisData(res.data[0].wishlist)})
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        dataFetch();
    },[])
    const handleDelete=(id)=>{
        axios
        .get(`https://mock-server-r0tm.onrender.com/userData?mobilenumber=${value.mobilenumber}`)
        .then((res)=>{
            const updatedWishlist = res.data[0].wishlist.filter((item)=>(item.id!==id))
            console.log(updatedWishlist)

            axios
          .put(`https://mock-server-r0tm.onrender.com/userData/${res.data[0].id}`, { ...res.data[0], wishlist: updatedWishlist }) //always enter data.id 
          .then(() => {
            setWisData(updatedWishlist);
          })
          .catch((err) => console.log(err));
        })
        .catch((err)=>console.log(err))
    }
    
     console.log(total)
    return (
    <>
     <Navbar/> 
     <Flex mt={'30px'}>
        <Box>
            {
                wisData.map((item)=>(
                    <WishlistCard key={item.id} {...item} handleDelete={handleDelete} wisData={wisData} setTotal={setTotal}/>
                ))
            }
        </Box>
        <AmountPage length={wisData.length} total={total} style/>
     </Flex>
    </>
  )
}

export default Wishlist
