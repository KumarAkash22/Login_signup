import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from './Components/Home'
import {ProfileDetails,} from "./Components/ProfileDetails"
import {Login} from "./Components/Loginform"
import { Nav } from "./Components/Navigate"
import { Userform } from "./Components/Userform"
//import './App.css'

function App() {
  
  return (
    
   <>
    <Nav />
    <Routes> 
    <Route exact path="/userData" element={<ProfileDetails/>}></Route>
    <Route exact path="/login" element={<Login/>}></Route>
    <Route exact path="/user"element={<Userform/>}></Route>
    <Route exact path="/" element={<Home/>}></Route>
    </Routes> 
   </>
  
    
  )
}

export default App
