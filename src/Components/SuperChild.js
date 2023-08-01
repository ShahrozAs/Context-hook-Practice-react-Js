import React,{useContext} from 'react'
import { ChildContext } from './Child'

function SuperChild() {
    const {color,handleChange} = useContext(ChildContext);

  return (
    <div>
        <h1 style={{color:color}} onClick={()=>{handleChange()}}>Super Child</h1>
    </div>
  )
}

export default SuperChild