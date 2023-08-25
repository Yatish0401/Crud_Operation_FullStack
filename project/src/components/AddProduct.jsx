import axios from 'axios'
import React, { useState } from 'react'
import style from "./Product.module.css"


const AddProduct = () => {
    
    let [name ,setName] = useState("")
    let [brand , setBrand] = useState("")
    let [category , setCategory] = useState("")
    let [description , setDescription] = useState("")
    let [cost , setCost] = useState("")
    let [image , setImage] = useState("")

    let add=(e)=>{
        let user = JSON.parse(localStorage.getItem("User"))
        e.preventDefault()
        let product = { name , brand , category , description , cost , image}
        axios.post(`http://localhost:8080/products/${user.id}`, product).then((Response)=>{
            alert("product added with id:" + Response.data.data.id)
        }).catch(()=>{
            alert("somthing went wrong")
        })  
    }
   return (
    <div id={style.a1}>
        <div id={style.c3}>
            <div id={style.c4}>
     <form  >
        
      Name :<input id={style.c5} type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter The Name"></input><br /><br />
      Brand :<input id={style.c6} type='text' value={brand} onChange={(e)=>{setBrand(e.target.value)}} placeholder="Enter The Brand"></input><br /><br />
      Category :<input id={style.c7} type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Enter The Category"></input><br /><br />
      Description :<input id={style.c8} type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Enter The Description"></input><br /><br />
      Cost :<input id={style.c9} type='number' value={cost} onChange={(e)=>{setCost(e.target.value)}} placeholder="Enter The Cost"></input><br /><br />
      Image Url :<input id={style.b4} type='text' value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder="Enter The Url" ></input><br /><br />
       <button  id={style.btn9}  onClick={add}>Add Product</button>
     </form>
     </div>
      
     </div>
      
    </div>
  )
}

export default AddProduct