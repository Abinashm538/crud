import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import desgine from "./home.module.css"

const EditUsers=()=>{
    let [name,setName] = useState("")
    let [salary,setSalary]=useState("")
    let [cname,setCname]=useState("")
    let {index} = useParams()
    let navigate=useNavigate()

    console.log(index);

    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${index}`)
        .then((x)=>{
            // console.log(x.data);
            setName(x.data.name)
            setSalary(x.data.salary)
            setCname(x.data.cname)

        })
    },[])

    let formHandle=(e)=>{
        e.preventDefault()
        let payload = {name,salary,cname}
        axios.put(`http://localhost:3000/data/${index}`,payload)
        .then(()=>{
            console.log("Data has been added");
        })
        navigate("/u")

    }

    
    return(
        <form action="" id={desgine.frm} >
            <h2>Edit User</h2>
            <label htmlFor="">Emp Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} required /><br />
            <label htmlFor="">Emp salary</label>
            <input type="number" onChange={(e)=>setSalary(e.target.value)} value={salary} required/><br />
            <label htmlFor="">Emp Company</label>
            <input type="text" onChange={(e)=>setCname(e.target.value)} value={cname} required/><br /><br />
         <button onClick={formHandle} >Submit</button>
      </form>
    )
}

export default EditUsers