import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Profile from './profile';
import User from './user'
import Userform from './userform';
import Profileform from './profileform';
import Userview from './userview';
import Useredit from './useredit';
import Profileview from './profileview';
import Profileedit from'./profileedit';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import { Userprovider } from './usercontext';
import { useState } from 'react';

function App() {
  
  const[createform,setcreateform]=useState([
    {
        id:1,
        name:"Ammu",
        age:25,
        salary:150000
    },
    {
        id:2,
        name:"NithiAnbu",
        age:25,
        salary:150000
    },
    {
        id:3,
        name:"Amphia",
        age:24,
        salary:200000
    },
    {
        id:4,
        name:"Vidya",
        age:20,
        salary:40000
    },
    {
        id:5,
        name:"priya",
        age:18,
        salary:50000
    },
    {
        id:6,
        name:"Shanthi",
        age:48,
        salary:80000
    },
    {
        id:7,
        name:"Bharathi",
        age:25,
        salary:80000
    },
    {
        id:8,
        name:"Nithii",
        age:22,
        salary:70000
    },

]);
  
   const [createprofile,setprofile]=useState([
    {
        id:1,
        name:"Ammu",
        age:25,
        dob:"09/05/1997",
        city:"Thirupattur",
        qualification:"BE(Civil)"

    },
    {
        id:2,
        name:"NithiAnbu",
        age:25,
        dob:"25/06/1997",
        city:"Mahankalikapuram",
        qualification:"BE(Civil)"
    },
    {
        id:3,
        name:"Amphia",
        age:24,
        dob:"28/06/1998",
        city:"Chennai",
        qualification:"MBBS"
    },
    {
        id:4,
        name:"vidya",
        age:20,
        dob:"27/02/2002",
        city:"Banglore",
        qualification:"Aeronotics"
    },
    {
        id:5,
        name:"priya",
        age:18,
        dob:"31/12/2004",
        city:"Banglore",
        qualification:"M.tech"
    },
    {
        id:6,
        name:"Shanthi",
        age:48,
        dob:"06/07/1973",
        city:"Nigeria",
        qualification:"M.sc(IT)"
    },
    {
        id:7,
        name:"Bharathi",
        age:48,
        dob:"28/09/1973",
        city:"Jammu",
        qualification:"M.E"
    },
    {
        id:8,
        name:"Nithii",
        age:18,
        dob:"14/07/2004",
        city:"paris",
        qualification:"C.A"
    },
    
])
 
  return (
    <BrowserRouter> 
     <div id="wrapper">
       <Userprovider value={{createform,setcreateform,createprofile,setprofile}}>
            <Sidebar></Sidebar>
       <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
              <Topbar></Topbar>
               <div class="container-fluid">
            <Routes>
           
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path='/user'element={<User />}></Route>
              <Route path="/userform" element={<Userform/>}></Route>
              <Route path="/profileform" element={<Profileform/>}></Route>
              <Route path="/userview/:id" element={<Userview/>}></Route>
              <Route path="/useredit/:id" element={<Useredit/>}></Route>
              <Route path="/profileview/:id" element={<Profileview/>}></Route>
              <Route path="/profileedit/:id" element={<Profileedit/>}></Route>
                          
              </Routes>
              </div>
     </div>
     </div>
     </Userprovider>
    
            </div>
            </BrowserRouter>
  );
}

export default App;
