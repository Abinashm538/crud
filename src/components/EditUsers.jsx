import { useState } from "react"
import desgine from "./home.module.css"

const EditUsers=()=>{
    let [name,setName] = useState("")
    let [salary,setSalary]=useState("")
    let [cname,setCname]=useState("")
    return(
        <form action="" id={desgine.frm}>
        <label htmlFor="">Emp Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} required /><br />
        <label htmlFor="">Emp salary</label>
        <input type="number" onChange={(e)=>setSalary(e.target.value)} value={salary} required/><br />
        <label htmlFor="">Emp Company</label>
        <input type="text" onChange={(e)=>setCname(e.target.value)} value={cname} required/><br /><br />
       <button >Submit</button>
      </form>
    )
}

export default EditUsers