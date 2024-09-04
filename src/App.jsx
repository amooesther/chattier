import Login from "./Pages/login/Login"
import Chat from "./Pages/Chat/Chat"
import ProfileUpdate from "./Pages/ProfileUpdate/ProfileUpdate"
import {Route, Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <>
    <ToastContainer/>
   <Routes>
<Route  path="/" element={<Login/>}/>
<Route  path="/chat" element={<Chat/>}/>
<Route  path="/profile" element={<ProfileUpdate/>}/>
   </Routes>
    </>
  )
}

export default App
