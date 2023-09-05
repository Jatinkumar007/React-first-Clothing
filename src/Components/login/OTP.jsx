import React,{useState,useEffect,useContext} from 'react';
import myimage from '../Icons/6333057.jpg'
import { Input,Text,Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ContextApi } from './FirstContextApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/Navbar';

function Otp() {

    const {value,setValue}=useContext(ContextApi); 
    const navigate=useNavigate();
    const handleOtp=()=>{
        return Math.floor(1000 + Math.random()*9000)
    }

    const [otp,setOtp]=useState(handleOtp());
    const [timer,setTimer]=useState(25);


    const refresh=()=>{
        setOtp(handleOtp());
        setTimer(25);
    }
    useEffect(()=>{
        const time=setInterval(()=>{
            if(timer > 0){
                setTimer((val)=>val-1);
            }else{
                refresh();
            }
        },1000);

        return ()=> clearInterval(time);
    },[timer])
    const handleChange=(e)=>{
        const {name,value:inputValue}= e.target;

        setValue({...value, [name]:inputValue});
    }

    const handleEnter=()=>{
         
        if(otp.toString()===value.otp.toString() ){
            toast.success('OTP is correct!', {
                position: 'top-right', // Adjust the position as needed
                autoClose: 3000, // Close the toast after 3 seconds
                hideProgressBar: false, // Show a progress bar
              });
            navigate('/name')
        }else{
            toast.error('Wrong OTP. Please try again.', {
                position: 'top-right', // Adjust the position as needed
                autoClose: 3000, // Close the toast after 3 seconds
                hideProgressBar: false, // Show a progress bar
              });
        }
    }
  return (
   <>
    <Navbar/>
    <div style={{margin:'auto',width:'400px',marginTop:"100px"}}>
      <div><img style={{width:'400px'}} src={myimage} alt="error" /></div>
      <div>
        <Text fontSize={'16px'} m={'10px 30px'}><b>Verify with OTP :{otp}</b></Text>
        <Box display={'flex'} ml={'30px'} gap={'20px'}>
        <Input type='number' name="otp" value={value.otp} borderColor="#bbafb3" width={"100px"} onChange={handleChange} />
        </Box>
        <Text fontSize={'13px'} m={'10px 30px'}>Remaining time <b>{timer}</b></Text>
        <Button background={'#ff3f6c'} color={'white'} width={'335px'} ml={'30px'} onClick={handleEnter}>CONTINUE</Button>
        <Text fontSize={'13px'} m={'10px 30px'}>Having trouble logging in? <b style={{color:'#ff3f6c'}}>Get help</b></Text>
      </div>
      <ToastContainer />
    </div>
   </>
  )
}

export default Otp;


