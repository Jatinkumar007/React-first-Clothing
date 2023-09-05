import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Text,Box } from '@chakra-ui/react'
import style from './Style.module.css';

function User() {
    const [value, setValue] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    let enterTimeoutId;
    let leaveTimeoutId;
  
    const handleMouseEnter = () => {
      clearTimeout(leaveTimeoutId); // Clear any pending leave timeout
      enterTimeoutId = setTimeout(() => {
        setValue(true);
      }, 300);
    };
  
    const handleMouseLeave = () => {
      clearTimeout(enterTimeoutId); // Clear any pending enter timeout
      leaveTimeoutId = setTimeout(() => {
        setValue(false);
      }, 300);
    };
    const handleEnter=()=>{
         setIsHovered(true)
    }
    const handleLeave=()=>{
         setIsHovered(false)
    }
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link><Box><FontAwesomeIcon icon={faUser} style={{fontSize:"23px",marginLeft:'3px'}} /><Text fontSize="0.6em">Profile</Text></Box></Link>
        <div>
           {value && 
           (<div className={style.position4}>
           <Text>Welcome</Text>
           <Text fontSize={"10px"}>To Access Account and Manage Orders</Text>
           <button onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={isHovered ? style.selector1 : style.selector2}><Link to={'/login'}>LOGIN/SIGNUP</Link></button>
           </div>)}
        </div>
    </div>
  )
}

export default User
