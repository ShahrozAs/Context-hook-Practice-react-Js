import React from 'react'
import {useState, createContext,useContext ,useEffect,useRef} from 'react'

const UserContext=createContext();
function Component1() {
  const [user, setuser] = useState("Mr Sherry")
  return (
   <>
   <UserContext.Provider value={user}>
    <h1>{`Hello ${user}`}</h1>
    <Component2/>
   </UserContext.Provider>
   </>
  )
}

function Component2() {
  return(
    <>
     <h2>Hello sir 2</h2>
     <Component3/>
    </>
  )
  
}
function Component3() {
  return(
    <>
     <h3>Hello sir 3 </h3>
     <Component4/>
    </>
  )
  
}
function Component4() {
  return(
    <>
    <h4>Hello sir 4</h4>
    <Component5/>
    </>
  )
  
}
function Component5() {
  const user=useContext(UserContext);

 const [inputValue, setInputValue] = useState("");
  const  PV = useRef("");
  const  inputElement = useRef();

const fc=()=>{
inputElement.current.focus();
}
  useEffect(() => {
     PV.current = inputValue;
    
  }, [inputValue]);

  return(
    <>
    <h1>{`Welcome back ${user}`}</h1>

 
     <input
        type="text"
        value={inputValue}
        ref={inputElement}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: { PV.current} </h2>
      <button className="btn" onClick={fc}>click here</button>

      const make = 'Ford';
const model = 'Mustang';
const car = { make, model };
console.log(car);
    </>
  )
  
}

export default Component1