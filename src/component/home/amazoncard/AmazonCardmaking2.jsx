import React from 'react'

import amcs from "./Amazoncard.module.css"
const AmazonCardmaking2 = (props) => {
const additem=()=>{
  alert(props.desc);
  alert(props.price)
 
}
  return (
    <>
    
    <section className={amcs.am2cardbox}>
    <h4>{props.val}</h4>
    <img className={amcs.am2photo} src={props.link} a lt=''></img>
    <button className={amcs.additeam} onClick={additem} >Add Item </button>
  <p>{props.price}</p>
    <div style={{fontWeight:"700"}}>{props.desc}</div>
   
    </section>
    
    </>
  )
}

export default AmazonCardmaking2