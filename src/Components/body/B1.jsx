import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from './body.module.css';

function B1() {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const datafetch=async()=>{
        try {
            setLoading(true)
            const d1 = await fetch(`https://mock-server-r0tm.onrender.com/FashionHM`);
            const d2 = await d1.json();
            setData(d2);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(true);
        }
    }
    console.log(data)
    useEffect(()=>{
        datafetch()
    },[]);
  if(loading){
    return <h1>Loading...</h1>
  }  
  if(error){
    return <h2>There is some kind of Error, Please Refresh it again.</h2>
  }
  return (
    <div style={{marginTop:"50px"}}>
        <Carousel showThumbs={false}
    autoPlay={true}
    interval={5000}
    showArrows={true}
    showStatus={false}
    infiniteLoop={true}
    stopOnHover={true}>
      {
        data.map((item)=>(
            <div key={item.id} className={style.carouselslide}>
                <img src={item.image} alt="error" />
            </div>
        ))
      }
    </Carousel>
    </div>
  )
}

export default B1
