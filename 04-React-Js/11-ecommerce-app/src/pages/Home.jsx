import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from '@mui/material'
import MediaCard from '../components/Card'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Typography className='mt-3 text-center' variant="h3" color="initial">POSTS!</Typography>
            <Box className='d-flex container justify-content-center flex-wrap gap-5 mt-5'>
                {data.length > 0 ? data.map((item)=>{
                    return <MediaCard key={item.id} title={item.title} body={item.body} id={item.id}/>
                }): <Typography variant='h5'>Loading...</Typography>}
            </Box>
        </>
    )
}

export default Home