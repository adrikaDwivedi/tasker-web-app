import {Routes, Route} from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'
import SplashScreen from '../components/layout/SplashScreen'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<SplashScreen/>}/>
      <Route path='/components/layout/DashboardLayout.jsx' element={<DashboardLayout/>}/>
    </Routes>
    </>
  )
}

export default App
