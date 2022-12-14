import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";

import HomeCrud from './components/HomeCrud';
import CreateUser from "./components/CreateUser"
import Users from "./components/Users"
import EditUsers from './components/EditUsers';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <HomeCrud/>
        <Routes>
         <Route path='/cu' element={<CreateUser/>}/>
         <Route path='/u' element={<Users/>}/>
         <Route path="/e" element={<EditUsers/>}/>
        </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default App