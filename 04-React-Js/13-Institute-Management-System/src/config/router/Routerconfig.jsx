import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../../screens/login/Login'
import Admission from '../../screens/admission/Admission'
import AdminDashboard from '../../screens/admin-dashboard/AdminDashboard'
import Student from '../../screens/student-dashboard/Student'

const Routerconfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='admission' element={<Admission />} />
        <Route path='admin/*' element={<AdminDashboard />} />
        <Route path='student' element={<Student />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Routerconfig