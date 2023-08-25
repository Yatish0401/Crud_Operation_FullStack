import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import style from "./Product.module.css"



const ViewProduct = () => {
    let [products , setproducts] = useState([])
    let user = JSON.parse(localStorage.getItem('User'))
    let navigate = useNavigate()
    let editProduct =(id)=>{
        axios.get(`http://localhost:8080/products/${id}`).then((Response)=>{
            localStorage.setItem("product" , JSON.stringify(Response.data.data))
            navigate('/editproduct')
        })
        .catch(()=>{
            alert("something went wrong")
        })
    }

    let deleteProduct=(id)=>{
        axios.delete(`http://localhost:8080/products/${id}`).then((Response)=>{
            alert(Response.data.message)
        }).catch(()=>{
            alert("can not  delete product")
        })
    }
    useEffect(()=>{
            axios.get(`http://localhost:8080/products/byuser-id/${user.id}`)
            .then((Response)=>{
                setproducts(Response.data.data)
            })
            .catch(()=>{
                // alert("not a good request ")

            })
},[])
return (
    <div id={style.d1}>
        <div id={style.d2} >
        <table >
           <thead>
           <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Image Url</th>
               <th>Action</th>
            </tr>
           </thead>
           <tbody>
            {products.map((p)=>{
                return(
                    <tr>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.brand}</td>
                    <td>{p.category}</td>
                    <td>{p.description}</td>
                    <td>{p.cost}</td>
                    <td>{p.image}</td>
                    <td><button id={style.btn7} onClick={()=>{editProduct(p.id)}}>Edit</button> <button id={style.btn8} onClick={()=>{deleteProduct(p.id)}}>Delete</button></td>
                  
                   
                </tr>
                )
            })}
           </tbody>

        </table>
    </div>
    </div>
  )
}
export default ViewProduct