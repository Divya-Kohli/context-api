import React, { createContext, useState } from 'react';

export const userStore = createContext("Dafault");

const Store = (props) => {
    let[count , setCount] =useState(0)

    let handleIncrement =() =>{
        setCount(count+1);
    };

    let handleDecrement =() =>{
        setCount(count-1);
    }



  return (
<userStore.Provider value={{count,handleIncrement,handleDecrement}}>
    {props.children}
</userStore.Provider>
  );
}

export default Store;
