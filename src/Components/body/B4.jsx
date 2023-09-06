import React, { useState, useEffect } from "react";
import { Box, Text, Grid} from "@chakra-ui/react";

function B4() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const datafetch = async () => {
    try {
      setLoading(true);
      const d1 = await fetch(`https://mock-server-r0tm.onrender.com/ProductsecHM`);
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

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>There is some kind of Error, Please Refresh it again.</h2>;
  }

  return (
    <div>
      <Text fontSize={{ base: "18px", md: "22px", lg: "24px", xl:"26px" }} fontWeight="bold" m={"50px 50px"}>
        SHOP BY CATEGORY
      </Text>
      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(5, 1fr)", xl:"repeat(6, 1fr)" }} gap={6} m={"50px"}>
        {
            data.map((item)=>(
                <Box key={item.id}>
                  <img style={{height:'250px',width:'250px',borderRadius:'10px'}} src={item.image} alt="error" />
                  <Text>{item.text}</Text>
                </Box>
            ))
        }
      </Grid>
    </div>
  );
}

export default B4;
