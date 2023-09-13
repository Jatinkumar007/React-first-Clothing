import React from 'react';
import { Flex,Box,Text, Link } from '@chakra-ui/react'
import { FaGooglePlay, FaApple, FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import style from './Footer.module.css';

function Footer() {
  return (
    <Flex className={style.horizontal2} justifyContent={'center'} gap={'120px'} mb={'50px'}>
      <Flex flexDirection={'column'}>
        <Text mb={'10px'}>ONLINE SHOPPING</Text>
        <Link>Men</Link>
        <Link>Women</Link>
        <Link>Kids</Link>
        <Link>Home & Living</Link>
        <Link>Beauty</Link>
        <Link>Gift Cards</Link>
        <Link>Myntra Insider</Link>
      </Flex>
      <Flex flexDirection={'column'}>
        <Text mb={'10px'}>CUSTOMER POLICIES</Text>
        <Link>Contact Us</Link>
        <Link>FAQ</Link>
        <Link>T&C</Link>
        <Link>Terms Of Use</Link>
        <Link>Track Orders</Link>
        <Link>Shipping</Link>
        <Link>Cancellation</Link>
        <Link>Returns</Link>
        <Link>Privacy policy</Link>
        <Link>Grievance Officer</Link>
      </Flex>
      <Box className={style.horizontal}>
        <Box className={style.horizontal}>
            <Text mb={'10px'}>EXPERIENCE MYNTRA APP ON MOBILE</Text>
            <Flex gap={'15px'} mt={'10px'} >
             <FaGooglePlay size={"40px"}/>
             <FaApple size={"40px"}/>
            </Flex>
        </Box>
        <Box className={style.horizontal}>
            <Text mb={'10px'} mt={'10px'}>KEEP IN TOUCH</Text>
            <Flex gap={'10px'} mt={'20px'}>
              <FaFacebookF size={"20px"}/>
              <FaTwitter size={"20px"}/>
              <FaYoutube size={"20px"}/>
              <FaInstagram size={"20px"}/>
            </Flex>
        </Box>
      </Box>
      <Box className={style.horizontal}>
        <Text mb={'10px'}><b>100% ORIGINAL</b> guarantee for <br /> all products at Jatin's Website</Text>
        <Text><b>Return within 14days</b> of <br /> receiving your order.</Text>
      </Box>
    </Flex>
  )
}

export default Footer
