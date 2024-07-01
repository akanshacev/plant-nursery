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


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/udash' element={<Userdash/>}/>
      <Route path='/adash' element={<Admindash/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/wish' element={<Wishlist/>}/>
      <Route path='/cart' element={<Addtocart/>}/>
      <Route path='/orderlist' element={<Orderlist/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
