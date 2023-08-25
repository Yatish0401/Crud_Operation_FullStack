import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./Product.module.css"

const Update=()=>{

    let user =JSON.parse(localStorage.getItem("User"))
    let [name , setName] = useState(user.name)
    let [email , setEmail] = useState(user.email)
    let [phone , setPhone] = useState(user.phone)
    let [password , setPassword] = useState(user.password)
    let [id , setId] = useState(user.id)
   

    let nameData=(e)=>{
        setName(e.target.value)

    }
    let emailData=(e)=>{
         setEmail(e.target.value)
    }
    let phoneData=(e)=>{
        setPhone(e.target.value)
    }
    let passwordData=(e)=>{
        setPassword(e.target.value)
    }
    let idData = (e)=>{
        setId(e.target.value)
    }
    let navigate= useNavigate()
    let handleSubmit=(e)=>{
        let payload = {id,name,email,phone,password}
        e.preventDefault()
        axios.put("http://localhost:8080/users",payload).then((Response)=>{
            alert("user updated successfully with Id:"+Response.data.data.id)
            localStorage.setItem("User",JSON.stringify(Response.data.data))
            console.log(Response)
            navigate("/viewuser")
        })
    }
   
    return(
        <div id={style.a1}>
          <div id={style.a2} >
            <form onSubmit={handleSubmit}>
            <label htmlFor="">Id :</label>
                <input id={style.b8} type="text" name ="" value={id} onChange={idData} placeholder="enter your id"/>
                <br /><br />
                <label htmlFor="">Name :</label>
                <input id={style.b4} type="text" name=""  value={name} onChange={nameData}  placeholder="Enter Your name" />
                <br /><br />
                <label htmlFor="">Email :</label>
                <input id={style.b5} type="email" name=""  value={email} onChange={emailData} placeholder="Enter your Email"/>
                <br /><br />
                <label htmlFor="">Phone :</label>
                <input id={style.b6} type="tel" name="" value={phone} onChange={phoneData} placeholder="Enter your phoneNumber" />
                <br /><br />
                <label htmlFor="">Password :</label>
                <input id={style.b7} type="password"  name=""  value={password} onChange={passwordData} placeholder="Enter your Password"/>
                <br /><br />
                <button  id={style.btn4}  type="submit" >Update</button>
 
            </form>
        </div>
        </div>
    )
}
export default Update