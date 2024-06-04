import './App.css'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Userdash from './pages/Userdash'
import Admindash from './pages/Admindash'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import Wishlist from './components/Wishlist'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/udash' element={<Userdash/>}/>
      <Route path='/adash' element={<Admindash/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/wish' element={<Wishlist/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App
