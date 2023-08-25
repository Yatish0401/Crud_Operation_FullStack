import axios from "axios"
import React,{ useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import style from"./Product.module.css"


const Signln =()=>{

    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate = useNavigate()
    let onclick=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/users/verifyByemail?email=${email}&password=${password}`).then((Response)=>{
           localStorage.setItem("User" , JSON.stringify(Response.data.data))
           console.log(Response.data.message)
           alert(Response.data.message)
           navigate('/userhome')
            
        }).catch(()=>{
            alert("invlid Email id and password")
           
        })
       
    }
    return(
        
            <div id={style.a1}>
                <section id={style.a2}>
       <form>
        <input id={style.a3} type='email' value= {email} onChange={(e)=>{setEmail(e.target.value)}} 
        placeholder='enter your email id'></input>
        <br /><br />
        <input id={style.a4} type='password' value= {password} onChange={(e)=>{setPassword(e.target.value)}}
        placeholder='enter your password'></input>
        <br /><br />
        <button id={style.btn} onClick={onclick}>Signln</button>
            
       <button id ={style.btn1} ><Link to={"/signup"}>CreateNewUser</Link></button> 
       </form>
       </section>
       </div>
      
    )
}
export default Signln