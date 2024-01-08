import React from 'react'
import {Button , Box} from '@mui/material'
import Table from './component/Table'
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <>
    <Button variant="contained" color='error'>Contained</Button>
    <Typography variant='h1'>hello from material</Typography>
    <Box className="d-flex justify-content-evenly bg-dark text-light">
    <Typography variant='h5'>hello from material</Typography>
    <Typography variant='h5'>hello from material</Typography>
    <ShoppingCartIcon/>

    </Box>
    <Table/>
    </>
  )
}

export default App