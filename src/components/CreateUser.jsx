import axios from 'axios'
import React, { useState } from 'react'
import desgine from './home.module.css'
import { useNavigate} from 'react-router-dom'

const CreateUser = () => {
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [cname,setCname]=useState("")
    let Navigate = useNavigate()

    let formhandle=(e)=>{
      e.preventDefault()
      let payload={name,salary,cname}
      axios.post("http://localhost:3000/data",payload)
      .then(()=>{
        console.log("Added");
      })
      Navigate("/u")
    }

  return (
       <form action="" id={desgine.frm}>
         <label htmlFor="">Emp Name</label>
         <input type="text" onChange={(e)=>setName(e.target.value)} value={name} required /><br />
         <label htmlFor="">Emp salary</label>
         <input type="number" onChange={(e)=>setSalary(e.target.value)} value={salary} required/><br />
         <label htmlFor="">Emp Company</label>
         <input type="text" onChange={(e)=>setCname(e.target.value)} value={cname} required/><br /><br />
        <button onClick={formhandle}>Submit</button>
       </form>
  )
}

export default CreateUser