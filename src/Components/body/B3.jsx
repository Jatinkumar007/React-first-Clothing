import React,{useState,useEffect} from 'react'
import style from './body2.module.css';
import { Text } from '@chakra-ui/react';

function B3() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const datafetch = async () => {
    try {
      setLoading(true);
      const d1 = await fetch(`https://mock-server-r0tm.onrender.com/RakshabandhanHM?_limit=${5}`);
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
      <Text fontSize={{ base: "18px", md: "22px", lg: "24px", xl:"26px" }} fontWeight='bold' m={'50px 50px'}>RAKSHABANNDHAN GIFTS THIS WAY</Text>
      <div className={style.carouselContainer}>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`carousel-item-${index}`} className={style.image2} />
            <Text fontSize={{ base: "8px", md: "10px", lg: "14px", xl:"18px" }}>{item.text}</Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default B3
