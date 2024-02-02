import React from 'react'
import { Button, Box } from '@mui/material';
import PersistentDrawerLeft from '../../components/Drawer'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Addcourse from './addcourse/Addcourse'
import AllCourse from './allcourse/AllCourse';
import AllStudent from './allstudents/AllStudent';
import SingleCourse from './singlecourse/SingleCourse';

const AdminDashboard = () => {

  //react-router navigate hook
  const navigate = useNavigate();
  return (
    <>
      <PersistentDrawerLeft screen={
        <Box>
          {/* <Box className='d-flex justify-content-around'>
            <Button onClick={()=> navigate('/admin')} variant="contained">AddCourse</Button>
            <Button variant="contained" onClick={()=> navigate('/admin/allcourse')}>AllCourse</Button>
            <Button variant="contained" onClick={()=> navigate('/admin/allstudents')}>AllStudents</Button>
            <Button variant="contained" onClick={()=> navigate('/admin/singlecourse')}>SingleCourse</Button>
          </Box> */}

          <Routes>
            <Route path='/' element={<Addcourse />} />
            <Route path='/allcourse' element={<AllCourse />} />
            <Route path='/allstudents' element={<AllStudent />} />
            <Route path='/singlecourse' element={<SingleCourse />} />

          </Routes>
        </Box>
      } />
    </>
  )
}

export default AdminDashboard