import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const navigate = useNavigate()

    const [formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        description: "",
    })

    const onChangeHandler =(e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/product/new", formInfo)
        .then((response) => {
            console.log(response)
                setFormInfo({
                    title:"",
                    price:"",
                    description: "",
                })
                navigate("/api/products")
        })
        .catch(err => console.log("This is a catch error", err))
    }

    return (
        <div className="full">
            <h1>Create</h1>
            <div className="container">
                <form onSubmit={submitHandler}>
                <div className="mb-3 d-flex">
                    <label htmlFor='title' className='form-label'>Title:</label>
                    <input type="text" className='form-control' name='title' value={formInfo.title} onChange={onChangeHandler} />
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor='price' className='form-label'>Price:</label>
                    <input type="text" className='form-control' name='price' value={formInfo.price} onChange={onChangeHandler} />
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
            
            
            <hr/>
    
            <div>
            <h1> Title: {formInfo.title}</h1>
            <h1>Price: {formInfo.price}</h1>
            <h1>Description: {formInfo.description}</h1>
            </div>
        </div>
)
}


export default Form







// import React, {useState} from 'react'
// import axios from 'axios'
// // import { useNavigate } from 'react-router-dom'


// const Form = () => {

//     const [title, setTitle] = useState("")
//     const [price, setPrice] = useState("")
//     const [description, setDescription] = useState("")

//     const [errors, setErrors] = useState([]); 
    
//     const [productList, setProductList] = useState ([])


//         const submitHandler = (e) => {
//             e.preventDefault()
//             axios.post("http://localhost:8000/api/product/new", title, price, description)
//             .then((response) => {
//                 console.log(response)
//                 let productObj = {title, price, description}
        
//                 setProductList([...productList, productObj])
//                     // navigate("/")
//             })
            
//             .catch(err=>{
//                 console.log(err)
//                 const errorResponse = err.response.data.errors; // Get the errors from err.response.data
//                 const errorArr = []; // Define a temp error array to push the messages in
//                 for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
//                     errorArr.push(errorResponse[key].message)
//                 }
//                 // Set Errors
//                 setErrors(errorArr);
//     })}

    

//     return (
//         <div>
//         <h1>Product list:</h1>
//         <form onSubmit= {submitHandler}>
//         <div className="form-group">
//             {errors.map((err, index) => <p key={index}>{err}</p>)}
//             <label htmlFor='title' className='form-label'>Title:</label>
//             <input onChange={(e) => setTitle(e.target.value)} type= "text" name="title" className='form-control' />
//         </div>
//         <div className="form-group">
//             <label htmlFor='price' className='form-label'>Price: </label>
//             <input onChange={(e) => setPrice(e.target.value)} type= "text" className='form-control' />
//         </div>
//         <div className="form-group">
//             <label htmlFor='description' className='form-label'>Description: </label>
//             <input onChange={(e) => setDescription(e.target.value)} type= "text" className='form-control' />
//         </div>
//         <div className="form-group">
//             <button type="submit" value="Add Pet">Add Product</button>
//         </div>
//         </form>
//         <hr/>
//         </div>
//     )
// }


// export default Form