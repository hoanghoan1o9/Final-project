import React, { useState } from "react";

const Count = () => {
    const initialValue = ()=>{
        let total = 0;
        for( let i=0; i < 100000 ; i++) {
            total += i;
        }
        console.log('initialValue')
        return total;
    };

    const [count, setCount] = useState(()=>{  
        return initialValue()
    });

    const addCountHandler = () =>{
        setCount((prevState) =>{
            return prevState +1
        });
    } 

    const subCountHandler =() =>{
        setCount((prevState) =>{
            return prevState -1
        });
    }

  return (
    <div>
      <p>so lan da dem {count} </p>
      <button onClick={subCountHandler}>SUB</button>
      <button onClick={addCountHandler}>Add</button>
    </div>
  );
};

export default Count;
