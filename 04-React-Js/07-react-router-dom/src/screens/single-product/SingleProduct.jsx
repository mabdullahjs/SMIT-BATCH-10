import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Card from '../../components/Card';

const SingleProduct = ({id}) => {
    const [data , setData ] = useState(null);

    const params = useParams();
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    } , [])
  return (
    <div className='flex justify-center mt-[5rem]'>
    {data ? <Card title={data.title} description={data.description} src={data.image} showBtn={false}/> : <h1>Loading...</h1>}
    </div>
  )
}

export default SingleProduct