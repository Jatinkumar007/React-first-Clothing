import React,{useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Text,Box, Button } from '@chakra-ui/react'
import style from './Style.module.css';
//import axios from 'axios';
import {ContextApi} from '../login/FirstContextApi';

function User2() {
    const [stateValue, setStateValue] = useState(false);
    const {value,setValue} = useContext(ContextApi);
   // const [dta,setDta] = useState([]);
   // const [dta2,setDta2]=useState({});

    let enterTimeoutId;
    let leaveTimeoutId;
  
    const handleMouseEnter = () => {
      clearTimeout(leaveTimeoutId); // Clear any pending leave timeout
      enterTimeoutId = setTimeout(() => {
        setStateValue(true);
      }, 300);
    };
  
    const handleMouseLeave = () => {
      clearTimeout(enterTimeoutId); // Clear any pending enter timeout
      leaveTimeoutId = setTimeout(() => {
        setStateValue(false);
      }, 300);
    };
    // const fetchData=async()=>{
    //     try {
    //         axios.get('https://mock-server-r0tm.onrender.com/userData')
    //         .then((res)=>{setDta(res.data)});
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // const match=()=>{
    //     const updatedData=dta.map((item)=>{
    //         if(item.mobilenumber===value.mobilenumber){
    //             return {
    //                 mobilenumber:item.mobilenumber,
    //                 name:item.name
    //             };
    //         }
    //         return null;
    //     }).filter(Boolean);
        
    //     if(updatedData.length>0){
    //         setDta2(updatedData)
    //     }
    // }
    // useEffect(()=>{
    //   fetchData()
    //   match()
    // },[])
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link><Box><FontAwesomeIcon icon={faUser} style={{fontSize:"23px",marginLeft:'3px'}} /><Text fontSize="0.6em">Profile</Text></Box></Link>
        <div>
           {stateValue && 
           (<div className={style.position4}>
           <Text mb={'10px'} ml={'20px'}><b>Hello {value.name} <br /> {value.mobilenumber} </b></Text>
           <Text ml={'20px'} fontSize={"12px"}>Orders</Text>
           <Text ml={'20px'} fontSize={"12px"}>Wishlist</Text>
           <Text ml={'20px'} fontSize={"12px"}>Gift Cards</Text>
           <Text mb={'10px'} ml={'20px'} fontSize={"12px"}>Contact Us</Text>
           <Button ml={'5px'} onClick={()=>{setValue({mobilenumber:"",otp:"",name:""})}}><Link to={'/'}>Logout</Link></Button>
           </div>)}
        </div>
    </div>
  )
}

export default User2
