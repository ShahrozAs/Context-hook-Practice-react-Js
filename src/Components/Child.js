import React,{createContext,useState} from 'react'

export const ChildContext=createContext();

function ChildProvider({children}) {
  const [color, setColor] = useState('green');

  const handleChange=()=>{
    setColor('pink');
  }

  return (
    <ChildContext.Provider value={{color,handleChange}}>
     {children}
    </ChildContext.Provider>
  )
}

export default ChildProvider