import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Edit = () => {
    const {id} = useParams();
    const navigate = useNavigate();


    const [formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        description: "",
    })


    useEffect (() =>{ 
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((response) => {
            console.log(response.data.results)
            setFormInfo(response.data.results)
        })
        .catch ((err) => {console.log("This is your catch error: ", err)})
    },[id])



    const onChangeHandler =(e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/update/${id}`, formInfo)
        .then((response) => {
            console.log("Here are the results: ", response)
            navigate("/")
        })
        .catch(err => console.log("Here is the catch error: ", err))
    }

    return (
    <div>
    <div className="container">
        <form onSubmit={submitHandler}>
            <div className="mb-3 d-flex">
                <label htmlFor='name' className='form-label'>Title:</label>
                <input type="text" className='form-control' name='name' value={formInfo.title} onChange={onChangeHandler} />
            </div>
            <div className="mb-3 d-flex">
                <label htmlFor='price' className='form-label'>Price:</label>
                <input type="text" className='form-control' name='price' value={formInfo.price}  onChange={onChangeHandler} />
            </div>
            <div className="mb-3 d-flex">
                <label htmlFor='description' className='form-label'>Description:</label>
                <input type="text" className='form-control' name='description' value={formInfo.description} onChange={onChangeHandler} />
            </div>
            <div className="mb-3 d-flex">
                <button type='submit' className='btn btn-success'>Submit</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Edit