import React, { useState } from 'react'
import desgine from './home.module.css'

const CreateUser = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [cname,setCname]=useState("")

  return (
    <div id={desgine.frm}>
        <label htmlFor="">Emp Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} /><br />
        <label htmlFor="">Emp salary</label>
        <input type="number" onChange={(e)=>setSalary(e.target.value)} value={salary}/><br />
        <label htmlFor="">Emp Company</label>
        <input type="text" onChange={(e)=>setCname(e.target.value)} value={cname}/><br /><br />
        <button>Submit</button>
    </div>
  )
}

export default CreateUser