import axios from 'axios'
import React from "react"
import { useState } from 'react'
import style from "./Product.module.css"

const EditProduct = () => {
    let p = JSON.parse(localStorage.getItem("product"))
    let[id , setId] = useState(p.id)
    let[name , setName] = useState(p.name)
    let[brand , setBrand] = useState(p.brand)
    let[category ,setCategory] = useState(p.category)
    let[description , setDescription]= useState(p.description)
    let[cost , setCost] = useState(p.cost)
    let[image , setImage] = useState(p.image)

    let add =(e)=>{
        let user = JSON.parse(localStorage.getItem("User"))
        e.preventDefault()
        let product ={id,name,brand,category,description,image,cost}
        axios.put(`http://localhost:8080/products/${user.id}`,product)
        .then((Response)=>{
            alert("product added with Id:"+Response.data.data.id)
        })
        .catch(()=>{
           alert("something went wrong ")
           // console.log("something went wrong");
        })

    }
  return (
    <div id={style.a1}>
      <div id= {style.c3}>
        <div id={style.c4}></div>
        <form>
           
           Name:<input  id={style.c5}type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input><br /><br />
           Brand:<input id={style.c6} type='text' value={brand} onChange={(e)=>{setBrand(e.target.value)}}></input><br /><br />
           Category:<input id={style.c7} type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}}></input><br /><br />
           Description:<input id={style.c8} type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}></input><br /><br />
           Cost:<input id={style.c9}  type='number' value={cost} onChange={(e)=>{setCost(e.target.value)}}></input><br /><br />
           Image Url:<input id={style.b4} type='text' value={image} onChange={(e)=>{setImage(e.target.value)}}></input><br /><br />
           <button id={style.btn9} onClick={add}>Update product</button>
        </form>
        
        </div>
    </div>
  )
}

export default EditProduct