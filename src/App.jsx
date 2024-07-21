import React from 'react'
import HomeScreen from './Screens/home/main/HomeScreen'
import RegisterMain from './Screens/registerVendor/RegisterMain'
import { BrowserRouter, Route , Routes } from 'react-router-dom'

function App() {
  return (
    <div className='bg-[#FAFBFC]'>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomeScreen />}> </Route>
      <Route path='/home' element={<HomeScreen />}> </Route>
      <Route path='/vendorRegister' element={<RegisterMain />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
   
  )
}

export default App
