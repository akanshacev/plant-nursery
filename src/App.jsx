import './App.css'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Userdash from './pages/Userdash'
import Admindash from './pages/Admindash'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import Wishlist from './components/Wishlist'
import Addplant from './components/Addplant'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Addtocart from './components/Addtocart'
import Orderlist from './pages/Orderlist'
import { TokenAuthContext } from './contextApi/AuthContext'
import { useContext } from 'react'


function App() {
  const {authStatus,setAuthStatus}=useContext(TokenAuthContext)
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/udash' element={authStatus?<Userdash/>:<Landing/>}/>
      <Route path='/adash' element={authStatus?<Admindash/>:<Landing/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/wish' element={authStatus?<Wishlist/>:<Landing/>}/>
      <Route path='/cart' element={authStatus?<Addtocart/>:<Landing/>}/>
      <Route path='/orderlist' element={authStatus?<Orderlist/>:<Landing/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
