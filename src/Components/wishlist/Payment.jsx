import React, { useState,useContext } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { HiOutlineCurrencyRupee } from 'react-icons/hi';
import {
  Box,
  Button,
  Stack,
  Text,
  Flex,
  RadioGroup,
  Radio,
  Input,
  Image
} from "@chakra-ui/react";
import axios from "axios";
import { ContextApi } from "../login/FirstContextApi";

function Payment() {
    const {value: someOtherName}=useContext(ContextApi)  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const total = searchParams.get("total");
  const length = searchParams.get("length");

  const [value, setValue] = useState(null);
  
  const navigate=useNavigate();
  const handleDelete=()=>{
    axios
    .get(`https://mock-server-r0tm.onrender.com/userData?mobilenumber=${someOtherName.mobilenumber}`)
    .then((res)=>{
        axios
      .put(`https://mock-server-r0tm.onrender.com/userData/${res.data[0].id}`, { ...res.data[0], wishlist: [] }) //always enter data.id 
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err));
    })
    .catch((err)=>console.log(err))
}
  const handleHome=()=>{
    handleDelete()
    navigate('/')
  }
  return (
    <Flex mt={"70px"} gap={"50px"} >
      <Box pb={'50px'} ml={"400px"} width={"405px"} boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}>
        <Text mb={"40px"} TextfontSize={"15px"} fontWeight={"bold"}>
          Recommended Payment Options
        </Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack gap={"25px"} direction="column" verticalAlign={"top"}>
            <Radio value="1">
              <Flex gap={'100px'}>
              <Text TextfontSize={"15px"} fontWeight={"bold"}>
                Cash on Delivery (Cash/UPI)
              </Text>
              <HiOutlineCurrencyRupee size={'25px'}/>
              </Flex>
            </Radio>
            {value === "1" && (
              <Box>
                <Text fontSize={'14px'}>
                  ₹10 will be charged extra for Pay On Delivery <br />
                  option. You can pay via Cash/UPI on Delivery.
                </Text>
                <Button
                  borderRadius={"0px"}
                  mt={"25px"}
                  ml={"20px"}
                  width={"290px"}
                  background={"#ff3f6c"}
                  color={"white"}
                  onClick={handleHome}
                >
                  PLACE ORDER
                </Button>
              </Box>
            )}
            <Radio value="2">
              <Flex gap={'226px'}>
              <Text TextfontSize={"15px"} fontWeight={"bold"}>
                Google Pay
              </Text>
              <Image
                width={'25px'}
                src={
                  "https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/Wallets.gif"
                }
                alt={"error"}
              />
              </Flex>
            </Radio>
            {value === "2" && (
              <Box>
                <Input placeholder="Enter UPI Id " />
                <Button borderRadius={"0px"}
                  mt={"25px"}
                  ml={"20px"}
                  width={"290px"}
                  background={"#ff3f6c"}
                  color={"white"}
                  onClick={handleHome}
                  >PLACE ORDER</Button>
              </Box>
            )}
            <Radio value="3">
             <Flex gap={'245px'}>
             <Text TextfontSize={"15px"} fontWeight={"bold"}>
                PhonePe
              </Text>
              <Image width={'25px'} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/batman-returns/logos/UPI.gif" alt="error"/>
             </Flex>
            </Radio>
            {value === "3" && (
              <Box>
                <Input placeholder="Enter UPI Id" />
                <Button borderRadius={"0px"}
                  mt={"25px"}
                  ml={"20px"}
                  width={"290px"}
                  background={"#ff3f6c"}
                  color={"white"}
                  onClick={handleHome}
                  >PLACE ORDER</Button>
              </Box>
            )}
          </Stack>
        </RadioGroup>
      </Box>
      <Box ml={"50px"} boxShadow={'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}>
        <Text mb={"25px"} ml={"20px"} fontSize={"20px"} fontWeight={"bold"}>
          Amount Details
        </Text>
        <Flex m={"20px"} gap={"200px"}>
          <Text>Items</Text>
          <Text>{length}</Text>
        </Flex>
        <Flex m={"20px"} gap={"120px"}>
          <Text>Delivery Charges</Text>
          <Text color={"green"}>Free</Text>
        </Flex>
        <Flex m={"20px"} gap={"165px"}>
          <Text>Total Price</Text>
          <Text>₹{total}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Payment;
