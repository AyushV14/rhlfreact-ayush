import './CSS/App.css'
import { Routes,Route } from 'react-router-dom'
import Layout from './Components/Outlet'
import Homepage from './Pages/Homepage'
import Aboutus from './Pages/Aboutus'
import Clinic from './Pages/Clinic'
import Getinvolved from './Pages/Getinvolved'
import Contact from './Pages/Contact'
import Media from './Pages/Media'
import Programmes from './Pages/Programmes'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route exact path='' element={<Homepage/>}/>
        <Route path='About' element={<Aboutus/>}/>
        <Route path='Clinic' element={<Clinic/>}/>
        <Route path='GetInvolved' element={<Getinvolved/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Media' element={<Media/>}/>
        <Route path='programmes' element={<Programmes/>}/>
      </Route>
    </Routes>
  )
}

export default App
