import axios from 'axios'
import React, { useEffect, useState } from 'react'
import desgine from './home.module.css'
import { Link } from 'react-router-dom'

const Users = () => {
  let [udata,setUdata]=useState([])
  useEffect(
    ()=>{
    axios.get("http://localhost:3000/data")
    .then((response)=>{setUdata(response.data)})
  },[])

  let deleteData=(a)=>{
    axios.delete(`http://localhost:3000/data/${a}`)
    // window.location.assign("/u")
    
  }
 
  return (
    <div id={desgine.usr}>
    <table>
      <tr>
        <th>Name</th>
        <th>Salary</th>
        <th>Company</th>
        <th>Action</th>
      </tr>
      {udata.map(
        (e,index)=>{
          return(
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.salary}</td> 
              <td>{e.cname}</td>
              <td>
                <button><Link to={`/e/${e.id}`}>Edit</Link></button> 
                <button onClick={()=>{deleteData(index)}}>Delete</button>
              </td>
            </tr>
          )
        }
      )}
    </table> 
  </div>
  )
}

export default Users