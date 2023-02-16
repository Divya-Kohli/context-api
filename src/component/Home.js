import React from 'react';
import {userStore} from "../apis/Store";

const Home = () => {

  return (
    <div>
    <h1>home</h1>
    <userStore.Consumer>
        {
            value =>{
                return(
                    <div>
                        <h1>{value.count}</h1>
                        <br/>

                        <button onClick={value.handleIncrement}>+</button>
                        <button onClick={value.handleDecrement}>-</button>
                    </div>
                )
            }
        }
    </userStore.Consumer>
      
    </div>
  );
}

export default Home;
