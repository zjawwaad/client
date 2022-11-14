import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


// set state for list of heros , use State

// import all heros  useEffect
const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]) 
    const[ deleteClicked, setDeleteClicked] = useState(false)
    
    
    useEffect (() =>{ 
        axios.get('http://localhost:8000/api/products')
        .then((response) => {
            console.log(response.data.results)
            setAllProducts(response.data.results)
        })
        .catch ((err) => {console.log("This is your catch error: ", err)})
    },[allProducts])


    const deleteProduct = (e, id) => {
        console.log("Delete this product", id)
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then((response) => {
            console.log("Delete is successful", response)
            setDeleteClicked(deleteClicked)
        })
        .catch(err => console.log(err))
    }


    return (
        <>
            <div>

                <h3><Link to='/product/add'>New Product</Link></h3>
            </div>

            <div className= 'container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td><Link to={`/product/${product._id}`} className="btn btn-outline-dark">{product.title}</Link></td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td><Link to= {`/product/edit/${product._id}`} className='btn btn warning'>Edit</Link>  |  <button className='btn btn-danger' onClick={(e) => {deleteProduct(e, product._id)}}>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default AllProducts
