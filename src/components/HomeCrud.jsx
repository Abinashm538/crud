import React from 'react'
import { Link } from 'react-router-dom';
import desgine from './home.module.css'

const HomeCrud = () => {
  return (
   <section>
    <article id={desgine.home}>
        <div><Link to='/cu'>Create-User</Link></div>
        <div><Link to='/u'>User</Link></div>
    </article>
   </section>
  )
}

export default HomeCrud