import React,{useContext} from 'react';
//import { FaCheckCircle } from 'react-icons/fa';
import { Box, Flex,Text,Input, Button } from '@chakra-ui/react';
import { ContextApi } from './FirstContextApi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import axios from 'axios';

function Name() {
    const navbar=useNavigate();
    const {value,setValue}=useContext(ContextApi); 
    const handleChange=(e)=>{
        const {name,value:inputValue}= e.target;
        setValue((val)=>({...val, [name]:inputValue}));
    }
    const handleClick=()=>{
        // if(value.mobilenumber!==""){
        // axios
        // .post(`https://mock-server-r0tm.onrender.com/userData`,{...value})
        // .then((res)=>{
        //   console.log(res)
        //   navbar('/main')
        // })
        // .catch((err)=>{console.log(err)})

        // }
        if (value.mobilenumber !== "") {
          // Send a GET request to check if value.mobilenumber exists in userData
          axios
            .get(`https://mock-server-r0tm.onrender.com/userData?mobilenumber=${value.mobilenumber}`)
            .then((response) => {
              if (response.data.length === 0) {
                // The number is not in the database, so you can proceed with the POST request
                axios
                  .post(`https://mock-server-r0tm.onrender.com/userData`, { ...value,wishlist:[] })
                  .then((res) => {
                    console.log(res);
                    navbar("/main");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                // The number already exists in the database, handle accordingly
                console.log("Mobile number already exists in the database.");
                navbar("/main");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Mobile number is empty. Please enter a mobile number.");
        }
    } 

  return (
    <>
    <Navbar/>
    <div style={{margin:'auto',width:'400px',marginTop:"100px"}}>
      <Flex gap={'10px'} background={'#e6e6ff'} p={'10px 20px'} mb={'50px'}>
        <Box m={'2px'} mb={'10px'}><img style={{width:"25px",borderRadius:'50%'}} src="https://clipart-library.com/new_gallery/131-1314108_validation-circle-green-check-png.png" alt="error" /></Box>
        <Box>
            <Text fontSize={'20px'}>Welcome to ClothesStore</Text>
            <Text fontSize={'13px'}>Your account has been created</Text>
        </Box>
      </Flex>
      <Box>
        <Text ml={'40px'} mb={'10px'}>What should we call you ?</Text>
        <Input type='text' name='name' value={value.name} onChange={handleChange} ml={'40px'} mb={'20px'} placeholder='Type your name (optional)' _placeholder={{fontSize:'13px'}} width={'320px'}/>
        <Button onClick={handleClick} background={'#ff3f6c'} color={'white'} width={'320px'} ml={'40px'}>CONTINUE</Button>
      </Box>
    </div>
    </>
  )
}

export default Name
