import React,{useState,useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faHeart, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import Men from "./Men";
import Kids from "./Kids";
import Beauty from "./Beauty";
import Women from "./Women";
import Homeliving from "./Homeliving";
import Studio from "./Studio";
import style from "./Style.module.css";
import { Link } from "react-router-dom";
import { Search2Icon } from '@chakra-ui/icons'
import { Box, Flex, Input, Text, Icon, Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerBody, DrawerHeader } from '@chakra-ui/react'
import User from './User';
import User2 from "./User2";
import { ContextApi } from "../login/FirstContextApi";

function Navbar() {
  const {value,inputValue,setInputValue}=useContext(ContextApi);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const handleValue=(e)=>{
       setInputValue(e.target.value);
  }
  return (
    <div className={style.flex}>
       <div className={style.image}>
       <Link to={'/'}><FontAwesomeIcon icon={faShirt} size="2x" /></Link>
       </div>
       <Box display={[ 'block', 'block','none', 'none']} ml={'20px'} onClick={handleDrawerOpen}><FontAwesomeIcon icon={faBars} style={{fontSize:"23px",margin:"5px"}} /></Box>
       <Flex gap={"35px"} >
       <Box display={['none', 'none', 'block', 'block']}><Men/></Box>
       <Box display={['none', 'none', 'block', 'block']}><Women/></Box>
       <Box display={['none', 'none', 'block', 'block']}><Kids/></Box>
       <Box display={['none', 'none', 'block', 'block']}><Beauty/></Box>
       <Box display={['none', 'none', 'block', 'block']}><Homeliving/></Box>
       <Box display={['none', 'none', 'block', 'block']}><Studio/></Box>
       </Flex>
       <Flex ml={"100px"} display={['none', 'none', 'block', 'block']}>
          <Icon position={'relative'} top={"8px"} right={"6"} as={Search2Icon}/>
          <Input width={"350px"} size={"sm"} placeholder='Search For Products, Brands and More..' onChange={handleValue} />
       </Flex>
       <Flex ml={"130px"} gap={"30px"}>
       {/* <Link><Box><FontAwesomeIcon icon={faUser} style={{fontSize:"23px",marginLeft:'3px'}} /><Text fontSize="0.6em">Profile</Text></Box></Link> */}
       {value.mobilenumber!=="" ? <User2/> : <User/>}
       <Link to={'/wishlist'}><Box><FontAwesomeIcon icon={faHeart} style={{fontSize:"23px",marginLeft:'4px'}}/><Text fontSize="0.6em">Wishlist</Text></Box></Link>
       <Link><Box><FontAwesomeIcon icon={faBagShopping} style={{fontSize:"23px",marginLeft:'5px'}}/><Text fontSize="0.6em">Shoping</Text></Box></Link>
       </Flex>
       
       {/* Drawer for the vertical menu */}
      <Drawer placement="left" onClose={handleDrawerClose} isOpen={isDrawerOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Flex direction="column" gap={2}>
            <Men />
            <Women />
            <Kids />
            <Beauty />
            <Homeliving />
            <Studio />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </div>
  );
}

export default Navbar;
