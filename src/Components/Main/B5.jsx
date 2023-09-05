import React from 'react'
import { Image, Box,Text, Flex } from '@chakra-ui/react'

function B5() {
  return (
    <div>
      <Text mb={'40px'} textAlign={'center'} fontSize={'35px'} fontWeight={'bold'}>COUPONS CORNER</Text>
      <Flex gap={'5px'} m={'5px'}>
        <Box><Image width={'400px'} height={'400px'} src='https://marketplace.canva.com/EAFBnBu3YiU/1/0/1131w/canva-aesthetic-cream-pink-cosmetic-discount-coupon-91RJo96yzsw.jpg' alt='error'/></Box>
        <Box><Image width={'400px'} height={'400px'} src='https://marketplace.canva.com/EAFA65wke5o/1/0/1131w/canva-blue-yellow-creative-special-discount-gift-box-coupon-uGf1HA2v24I.jpg' alt='error'/></Box>
        <Box><Image width={'400px'} height={'400px'} src='https://marketplace.canva.com/EAE9Qi6XWqg/1/0/1131w/canva-orange-cream-modern-special-discount-pdH-vZO6N_A.jpg  ' alt='error'/></Box>
        <Box><Image width={'400px'} height={'400px'} src='https://marketplace.canva.com/EAE-96xzFOk/1/0/1131w/canva-red-modern-discount-coupon-kFxxrZNaNaQ.jpg' alt='error'/></Box>
      </Flex>
    </div>
  )
}

export default B5
