import React, { useEffect, useState } from "react";
import {useParams} from "react-router"
import axios from "axios";




const Display = () => {
    const[product, setProduct] = useState([])
    const {id} = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((response) => {
            console.log(response.data.results)
            setProduct(response.data.results)
        })
    },[id])



  return (
    <>
        <div className="container">
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
        </div>
    </>
    )
}

export default Display