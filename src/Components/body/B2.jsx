import React, { useState, useEffect } from 'react';
import style from './body2.module.css';
import { Box, Text } from '@chakra-ui/react';

const itemsPerPage = 6; // Number of items per page
const transitionInterval = 5000; // Interval for transitioning to the next set of images (in milliseconds)

function B2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const datafetch = async () => {
    try {
      setLoading(true);
      const d1 = await fetch(`https://mock-server-r0tm.onrender.com/ProductsHM`);
      const d2 = await d1.json();
      setData(d2);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(data.length / itemsPerPage));    //here is the logic
    }, transitionInterval);

    return () => clearInterval(interval);
  }, [currentPage, data.length]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>There is some kind of Error, Please Refresh it again.</h2>;
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <>
      <Box>
        <Text  fontSize={{ base: "18px", md: "22px", lg: "24px", xl:"26px" }}  fontWeight='bold' m={'50px 50px'}>
          MEDAL WORTHY BRANDS TO BAG
        </Text>
      </Box>
      <div className={style.carouselContainer}>
        {currentPageData.map((item, index) => (
          <div key={index} className={style.carouselItem}>
            <img src={item.image} alt={`carousel-item-${index}`} className={style.image} />
            <Text fontSize={{ base: "8px", md: "10px", lg: "14px", xl:"18px" }}>{item.text}</Text>
          </div>
        ))}
      </div>
    </>
  );
}

export default B2;




// import React,{useState,useEffect} from 'react'
// import { Box, Flex, Text } from '@chakra-ui/react'
// import style from './body2.module.css'
// import Pagination from './Pagination';

// function B2() {
//   const [data,setData]=useState([]);
//   const [loading,setLoading]=useState(false);
//   const [error,setError]=useState(false);

//   const [total,setTotal]=useState(null);           //pagination
//   const limit=6;
//   const totalpages=Math.ceil(total/limit);
//   const [currentPage,setCurrentPage]=useState(1);


//   const datafetch=async(currentPage)=>{
//       try {
//           setLoading(true)
//           const d1 = await fetch(`https://mock-server-r0tm.onrender.com/ProductsHM?_page=${currentPage}&_limit=${limit}`);
//           const d2 = await d1.json();
//           //console.log(typeof d1.headers.get('X-Total-Count'))
//           setTotal(Number(d1.headers.get('X-Total-Count')))
//           setData(d2);
//           setLoading(false)
//       } catch (error) {
//          // console.log(error)
//           setError(true);
//       }
//   }
  
//   const handlePageChange=(i)=>{
//     setCurrentPage(i+1);
//    }

//   useEffect(()=>{
//       datafetch(currentPage,limit)
//   },[currentPage]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentPage === totalpages) {
//         setCurrentPage(1);
//       } else {
//         setCurrentPage((prevPage) => prevPage + 1);
//       }
//     }, 5000); // Change page every 5 seconds

//     return () => clearInterval(interval);
//   }, [currentPage, totalpages]);

// if(loading){
//   return <h1>Loading...</h1>
// }  
// if(error){
//   return <h2>There is some kind of Error, Please Refresh it again.</h2>
// }
//   return (
//     <>
//       <Box><Text fontSize='2xl' fontWeight='bold' m={'40px 80px'} >MEDAL WORTHY BRANDS TO BAG</Text></Box>
//       <Box>
//       <Flex>
//       {
//         data.map((item)=>(
//             <div key={item.id} >
//                 <img className={style.image} src={item.image} alt="error" />
//                 <Text>{item.text}</Text>
//             </div>
//         ))
//       }
//       </Flex>
//       </Box>
//       <div>
//       <Pagination totalpages={totalpages} currentPage={currentPage} handlePageChange={handlePageChange}/>
//       </div>
//     </>
//   )
// }

// export default B2
