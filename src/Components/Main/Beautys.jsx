import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Image, Box } from '@chakra-ui/react'
import B4 from '../body/B4'
import B5 from './B5'
import { Link } from 'react-router-dom'


function Beautys() {
  return (
    <>
      <Navbar/>
      <Box>
        <Link to={'/main2'}>
        <Box>
          <Image mt={'30px'} mb={'30px'} height={'550px'} width={'100%'} src='https://marketplace.canva.com/EAE1T0DckSk/1/0/1600w/canva-white-elegant-and-minimalist-makeup-grand-opening-banner-landscape-JM7Ix5b3Wng.jpg' alt='Error'/>
        </Box>
        </Link>
        <Link to={'/main2'}><Box><B5/></Box></Link>
        <Link to={'/main2'}><Box><B4/></Box></Link>
      </Box>
      <Footer/>
    </>
  )
}

export default Beautys
