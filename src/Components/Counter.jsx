import React, { useState } from 'react'

function Counter() {
    //state creation

    const[counter,setCounter]=useState(0)

    //function creation
    function increment(){
      setCounter(counter+1)  
    }
    function decrement(){
        if(counter<=0){
            setCounter(0);
        }else{
            setCounter(counter-1)  
        }
       
      }
      function reset(){
        setCounter(0)  
      }

  return (
    <div style={{textAlign:'center',padding:'40px'}}>
        <h1 style={{marginBottom:'50px'}}>{counter}</h1>
        <button style={{backgroundColor:'green',color:'white',marginRight:'5px',border:'1px solid transparent',padding:'10px'}} onClick={increment}>Increment</button>
        <button style={{backgroundColor:'red',color:'white',marginRight:'5px',border:'1px solid transparent',padding:'10px'}}  onClick={decrement}>decrement</button>
        <button style={{backgroundColor:'blue',color:'white',marginRight:'5px',border:'1px solid transparent',padding:'10px'}}  onClick={reset}>reset</button>
    </div>
  )
}

export default Counter