import React,{useContext} from 'react'
import Navbar from '../navbar/Navbar';
import myimage from '../Icons/19197201.jpg';
import { Box, Flex,Text,Input } from '@chakra-ui/react';
import style from './Login.module.css';
import { ContextApi } from './FirstContextApi';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const {value,setValue}=useContext(ContextApi);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    const {name,value:inputValue}= e.target;

    setValue({...value, [name]:inputValue});
  }
  const handleSubmit=()=>{
    if(value.mobilenumber.length===10){
      toast.success('Login Successfully!', {
        position: 'top-right', // Adjust the position as needed
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false, // Show a progress bar
      });
      navigate('/otp')
    }else{
      toast.error('Wrong Number. Please try again.', {
        position: 'top-right', // Adjust the position as needed
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false, // Show a progress bar
      });
    }
  }
  return (
    <>
      <Navbar />
      <Box width={'550px'} margin={'auto'} mt={'50px'}>
        <Flex justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Text fontSize={'24px'} ><b>Flat ₹400 OFF +<br />Free Shipping</b></Text>
          <h3 style={{color:'#bbafb3'}}>On First Order</h3><br />
          <h3>Code: <div style={{display:"inline",border:'1px dashed black', padding:'1px 10px'}}>JATIN400</div></h3>  
        </Box>
        <Box>
          <img style={{width:'250px'}} src={myimage} alt="error" />
        </Box>
        </Flex>
        <Box paddingLeft={'55px'}>
        <Text fontSize={'24px'} mt={'5px'} mb={'20px'} color={'#bbafb3'} ><b style={{color:'#4d505d'}}>Login</b> or <b style={{color:'#4d505d'}}>Signup</b></Text>
        <Input name='mobilenumber' value={value.mobilenumber} onChange={handleChange} type='number' placeholder='+91 | Mobile Number' width={'400px'} height={'35px'} mb={'20px'} />
        <Text fontSize={'12px'} mb={'20px'} color={'#bbafb3'}>By continuing, I agree to the <b style={{color:'#ff3f6c'}}>Terms of Use</b> & <b style={{color:'#ff3f6c'}}>Privacy Policy</b></Text>
        <button onClick={handleSubmit} className={style.color}>Continue</button>
        <Text fontSize={'12px'} mb={'20px'} color={'#bbafb3'}>Have trouble loggin in? <b style={{color:'#ff3f6c'}}>Get help</b></Text>
        </Box>
        <ToastContainer/>
      </Box>
    </>
  )
}

export default Login;
