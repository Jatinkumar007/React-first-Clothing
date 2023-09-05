import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Image, Box } from '@chakra-ui/react'
import B4 from '../body/B4'
import B5 from './B5'
import { Link } from 'react-router-dom'

function Main() { 
  return (
    <>
      <Navbar/>
      <Box>
        <Link to={'/main2'}>
        <Box>
          <Image mt={'30px'} mb={'30px'} height={'550px'} width={'100%'} src='https://marketplace.canva.com/EAE6eEmwEUo/1/0/1600w/canva-travel-%28banner-%28landscape%29%29-7G4jylPQplA.jpg' alt='Error'/>
        </Box>
        </Link>
        <Link to={'/main2'}><Box><B5/></Box></Link>
        <Link to={'/main2'}><Box><B4/></Box></Link>
      </Box>
      <Footer/>
    </>
  )
}

export default Main
