import { Button } from '@chakra-ui/react';
import React from 'react'

function Main2Pagination({TotalPages}) {
    const arr = new Array(TotalPages).fill(0);

  return (
    <div>
      {
        arr.map((item,i)=>(
            <Button>{i+1}</Button>
        ))
      }
    </div>
  )
}

export default Main2Pagination
