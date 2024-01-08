import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';

const Product = () => {

    //states
    const [data , setData ] = useState([]);
    //useeffect
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    } , [])
  return (
    <>
    <div className='flex justify-evenly flex-wrap mt-[5rem] gap-5'>
        {data.length > 0 ? data.map((item)=>{
            return <Card key={item.id} title={item.title} description={item.description} src={item.image} price={item.price} id={item.id}/>
        }): <h1>Loading...</h1>}
    </div>
    
    </>
  )
}

export default Product