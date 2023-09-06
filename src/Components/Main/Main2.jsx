import React,{useState,useEffect,useContext} from "react";
import { ContextApi } from "../login/FirstContextApi";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Select,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  Flex,
  Grid
} from "@chakra-ui/react";
import Main2Item from "./Main2Item";
//import Main2Pagination from "./Main2Pagination";

function Main2() {
  const {value,inputValue,setInputValue}=useContext(ContextApi);
  const navigate=useNavigate();

  const [data,setData]=useState([]);
  const [sort,setSort]=useState('desc');          //Sorting
  const [filter,setFilter]=useState('');          //filtering (type=men or women)
  const [filter2,setFilter2]=useState('');        //filtering (category=kurta or ...)

  // const [totalItem,setTotalItem]=useState(1);    //pagination
  // const limit = 50;
  // const TotalPages=Math.ceil(Number(totalItem/limit));
  

  const handleSort=(e)=>{
     setSort(e.target.value);
  }
  const handleFilter=(e)=>{
    if (e === 'women' || 'men') {
      // Clear the category filter when switching to "women" to "men" and "men" to "women"
      setFilter2('');
    }
     setFilter(`type=${e}`)
  }
  const handleFilter2=(e)=>{
    setFilter2(`category=${e.target.value}`)
  }
  const fetchdata=async(sort,filter,filter2)=>{
    try {
      const d1=await fetch(`https://mock-server-r0tm.onrender.com/Data?_sort=price&_order=${sort}&${filter}&${filter2}`);
      const d2= await d1.json();
      setData(d2)
      //setTotalItem(d2.length);
      console.log(d2.length)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchdata(sort,filter,filter2);
  },[sort,filter,filter2])
  
  //console.log(sort,filter,filter2)
  const handleWishlist=(id)=>{
     const filteredData=data.find((item)=>(item.id===id))

     if (value.mobilenumber !== "") {
      // Send a GET request to check if value.mobilenumber exists in userData
      axios
        .get(`https://mock-server-r0tm.onrender.com/userData?mobilenumber=${value.mobilenumber}`)
        .then((response) => {
          const userData = response.data[0]; // Assuming you are updating the first matching user
          const updatedWishlist = [...userData.wishlist, filteredData]; // Add filteredData to the wishlist
          
          // Send a PUT request to update the userData with the updated wishlist
          axios
            .put(`https://mock-server-r0tm.onrender.com/userData/${userData.id}`, { ...userData, wishlist: updatedWishlist })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        })  
    }
    else{
       navigate('/login')
    } 
  }
  return (
    <div>
      <Navbar />
      <Box>
          <Select
            mt={"30px"}
            ml={"1200px"}
            height={"35px"}
            placeholder="Sort by: Recommended"
            width={"275px"}
            onChange={handleSort}
            value={sort}
          >
            <option value="desc">Price : High To Low</option>
            <option value="asc">Price : Low To High</option>
          </Select>
        </Box>
      <Flex m={4} gap={4}>
      <Box>
        <Box>
          <Box ml={'10px'}>
            <Text fontSize={'16px'} fontWeight={'bold'} >FILTER</Text>
            <RadioGroup onChange={(value)=>handleFilter(value)} m={'20px'} ml={'0px'}>
              <Stack spacing={1} direction="column">
                <Radio size={'sm'} value="men" isChecked={filter === 'type=men'} colorScheme="pink">Men</Radio>
                <Radio size={'sm'} value="women" isChecked={filter === 'type=women'} colorScheme="pink">Women</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          { filter === 'type=men' && <Box ml={'10px'}>
            <Text fontSize={'16px'} fontWeight={'bold'}>CATEGORY</Text>
            <Stack m={'20px'} ml={'0px'} spacing={1} direction="column">
              <Checkbox size={'sm'} value={'Casual Shoes'} onChange={handleFilter2} isChecked={filter2 === 'category=Casual Shoes'} colorScheme="pink"  >
              Casual Shoes
              </Checkbox>
              <Checkbox size={'sm'} value={'Slippers'} onChange={handleFilter2} isChecked={filter2 === 'category=Slippers'} colorScheme="pink"  >
              Slippers
              </Checkbox>
              <Checkbox size={'sm'} value={'Tshirts'} onChange={handleFilter2} isChecked={filter2 === 'category=Tshirts'} colorScheme="pink"  >
              Tshirts
              </Checkbox>
              <Checkbox size={'sm'} value={'Flip Flops'} onChange={handleFilter2} isChecked={filter2 === 'category=Flip Flops'} colorScheme="pink"  >
              Flip Flops
              </Checkbox>
              <Checkbox size={'sm'} value={'Trousers'} onChange={handleFilter2} isChecked={filter2 === 'category=Trousers'} colorScheme="pink"  >
              Trousers
              </Checkbox>
              <Checkbox size={'sm'} value={'beachwear'} onChange={handleFilter2} isChecked={filter2 === 'category=beachwear'} colorScheme="pink"  >
              Beachwear
              </Checkbox>
              <Checkbox size={'sm'} value={'coats'} onChange={handleFilter2} isChecked={filter2 === 'category=coats'} colorScheme="pink"  >
              Coats
              </Checkbox>
            </Stack>
          </Box> }
           {filter==='type=women' && <Box ml={'10px'}>
            <Text fontSize={'16px'} fontWeight={'bold'}>CATEGORY</Text>
            <Stack m={'20px'} ml={'0px'} spacing={1} direction="column">
              <Checkbox size={'sm'} value={'kurta'} onChange={handleFilter2} isChecked={filter2 === 'category=kurta'} colorScheme="pink"  >
                Kurta
              </Checkbox>
              <Checkbox size={'sm'} value={'palazzos'} onChange={handleFilter2} isChecked={filter2 === 'category=palazzos'} colorScheme="pink"  >
                Palazzos
              </Checkbox>
              <Checkbox size={'sm'} value={'jewellery'} onChange={handleFilter2} isChecked={filter2 === 'category=jewellery'} colorScheme="pink"  >
                Jewellery
              </Checkbox>
              <Checkbox size={'sm'} value={'lehenga'} onChange={handleFilter2} isChecked={filter2 === 'category=lehenga'} colorScheme="pink"  >
                Lehenga
              </Checkbox>
              <Checkbox size={'sm'} value={'saree'} onChange={handleFilter2} isChecked={filter2 === 'category=saree'} colorScheme="pink"  >
                Saree
              </Checkbox>
              <Checkbox size={'sm'} value={'dresses'} onChange={handleFilter2} isChecked={filter2 === 'category=dresses'} colorScheme="pink"  >
                Dresses
              </Checkbox>
              <Checkbox size={'sm'} value={'hosiery'} onChange={handleFilter2} isChecked={filter2 === 'category=hosiery'} colorScheme="pink"  >
                Hosiery
              </Checkbox>
              <Checkbox size={'sm'} value={'jumpsuits'} onChange={handleFilter2} isChecked={filter2 === 'category=jumpsuits'} colorScheme="pink"  >
                Jumpsuits
              </Checkbox>
              <Checkbox size={'sm'} value={'lingerie'} onChange={handleFilter2} isChecked={filter2 === 'category=lingerie'} colorScheme="pink"  >
                Lingerie
              </Checkbox>
            </Stack>
          </Box>}
          
        </Box>
      </Box>
      <Grid ml={'60px'} templateColumns='repeat(5, 1fr)' gap={6}>
        {
          data.map((item)=>(
            <Main2Item myKey={item.id} id={item.id} {...item} handleWishlist={handleWishlist}/>
          ))
        }
      </Grid>
      </Flex>
      {/* <Main2Pagination TotalPages={TotalPages}/> */}
    </div>
  );
}

export default Main2;
