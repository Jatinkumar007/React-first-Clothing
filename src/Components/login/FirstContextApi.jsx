import React,{createContext, useState} from 'react'

export const ContextApi = createContext();

function FirstContextApi({children}) {
    const [value,setValue]=useState({mobilenumber:"",otp:"",name:"",wishlist:[]});
    const [inputValue,setInputValue]=useState(false);
  return (
    <ContextApi.Provider value={{value,setValue,inputValue,setInputValue}}>
      {children}
    </ContextApi.Provider>
  )
}

export default FirstContextApi
