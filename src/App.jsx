import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Profile/profile';
import Workout from './pages/workout/Workout';
import SleepTracking from './pages/SleepTracking/SleepTracking';
import FitnesGoals from './pages/FitnessGoals/FitnesGoals';
import Nutrition from './pages/Nutrition/Nutrition';
import HealthMetrics from './pages/Health Metrics/HealthMetrics';
import { createContext, useState } from 'react';
import LoginSignupForm from './pages/login/login';
const mycontext = createContext()

function App() {
  const [sevendaysdata , setsevendaysdata ] = useState([])
  const [sleepchart,setsleepchart] = useState([])
  const [IsHideSidebarAndHeader,setIsHideSidebarAndHeader ] = useState(false)
  // console.log("app.js data:-",sleepchart)
  const values = {
    sevendaysdata,
    setsevendaysdata,
    setIsHideSidebarAndHeader,
    IsHideSidebarAndHeader,
    setsleepchart,
    sleepchart
  }

  return (
    <>
    <mycontext.Provider value={values}>
      <BrowserRouter>
                  <div className="app-container">
                  { !IsHideSidebarAndHeader && <Sidebar /> }
                    <div className="main-content">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path='/profile' element={<MyProfile/>} />
                        <Route path='/workout' element={<Workout/>} />
                        <Route path='/Sleep' element={<SleepTracking/>} />
                        <Route path='/fitnes' element={<FitnesGoals/>} />
                        <Route path='/nutrition' element={<Nutrition/>} />
                        <Route path='/login' element={<LoginSignupForm/>} />
                        {/* <Route path='/metrics' element={<HealthMetrics/>} /> */}
                        <Route path="*" element={<Navigate to="/" />} />
                      </Routes>
                    </div>
                  </div>
    </BrowserRouter>
    </mycontext.Provider>
    </>
  )
}

export default App
export { mycontext }