import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const SingleProduct = () => {
    const params = useParams()
    console.log(params);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
        <h1>{data?.title}</h1>
        </>
    )
}

export default SingleProduct