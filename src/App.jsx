import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";

import HomeCrud from './components/HomeCrud';
import CreateUser from "./components/CreateUser"
import Users from "./components/Users"

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <HomeCrud/>
        <Routes>
         <Route path='/cu' element={<CreateUser/>}/>
         <Route path='/u' element={<Users/>}/>
        </Routes>
        </BrowserRouter> 
         {/* <CreateUser/>
         <Users/> */}
    </div>
  )
}

export default App