import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Select,
  Text,
  Flex
} from '@chakra-ui/react';


function Address({ onAddAddress }) {

    const location = useLocation();                                                // way to get data from navigate or we can say link;
    const searchParams = new URLSearchParams(location.search);
    const total = searchParams.get('total');
    const length = searchParams.get('length');

    const navigate=useNavigate();
    const indianStates = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Delhi',
      ];
      
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pinCode: '',
    address: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  const handleSubmit = () => {
    // You can perform validation here if needed before adding the address
   // onAddAddress(formData);
    // Reset the form fields after adding the address
    // setFormData({
    //   name: '',
    //   mobile: '',
    //   pinCode: '',
    //   address: '',
    //   city: '',
    //   state:'',
    // });
    navigate(`/payment?total=${total}&length=${length}`)
  };
  return (
    <Flex mt={'70px'} gap={'50px'}>
        <Box ml={'400px'}  width={'405px'}>
      <Stack spacing={4}>
        <Text fontSize={'15px'} fontWeight={'bold'}>CONTACT DETAILS</Text>
        <FormControl>
          <Input
            placeholder='Name*'
            _placeholder={{fontSize:'14px'}}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            width={'400px'}
          />
        </FormControl>
        <FormControl>
          <Input
            width={'400px'}
            placeholder='Mobile No*'
            _placeholder={{fontSize:'14px'}}
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </FormControl>
        <Text fontSize={'15px'} fontWeight={'bold'}>ADDRESS</Text>
        <FormControl>
          <Input
            width={'400px'}
            placeholder='PinCode*'
            _placeholder={{fontSize:'14px'}}
            type="number"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Textarea
             width={'400px'}
            placeholder='Address*'
            _placeholder={{fontSize:'14px'}}
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
        <Input
         width={'400px'}
          placeholder='City*'
          _placeholder={{fontSize:'14px'}}
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Select
           width={'400px'}
            placeholder='State*'
            _placeholder={{fontSize:'14px'}}
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </FormControl>
        <Button  mt={'20px'}  width={'400px'} background={'#ff3f6c'} color={'white'} borderRadius={'0px'} onClick={handleSubmit}>
          Add Address
        </Button>
      </Stack>
    </Box>
    <Box ml={'50px'}>
    <Text mb={'25px'} ml={'20px'} fontSize={'20px'} fontWeight={'bold'}>Amount Details</Text>
    <Flex m={'20px'} gap={'200px'}><Text>Items</Text><Text>{length}</Text></Flex>
    <Flex m={'20px'} gap={'120px'}><Text>Delivery Charges</Text><Text color={'green'}>Free</Text></Flex>
    <Flex m={'20px'} gap={'165px'}><Text>Total Price</Text><Text>₹{total}</Text></Flex>
  </Box>
    </Flex>
  );
}

export default Address;
